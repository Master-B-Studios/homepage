var Tetris;
(function (Tetris_1) {
    var SoundTrack = (function () {
        function SoundTrack() {
            this.main_music = new Audio();
            this.end_music = new Audio();
            this.end_sfx = new Audio();
            this.tetris_sfx = new Audio();
            this.dobryVecer = new Audio("/sound/ventolin/dobry_vecer.mp4");
        }
        SoundTrack.prototype.loadSoundTrack = function (name) {
            this.main_music.src = "/sound/" + name + "/main_music.mp3";
            this.main_music.loop = true;
            this.tetris_sfx.src = "/sound/" + name + "/tetris.mp3";
        };
        return SoundTrack;
    }());
    var JukeBox = (function () {
        function JukeBox() {
            this.soundTrack = new SoundTrack();
            this.soundTrack.loadSoundTrack("lagoon");
            this.muted = false;
        }
        JukeBox.prototype.playTetrisSfx = function () {
            if (!this.muted) {
                this.soundTrack.tetris_sfx.play();
            }
        };
        JukeBox.prototype.playMainMusic = function () {
            if (!this.muted) {
                this.soundTrack.main_music.play();
            }
        };
        JukeBox.prototype.playDobryVecer = function () {
            if (!this.muted) {
                this.soundTrack.dobryVecer.play();
            }
        };
        JukeBox.prototype.mute = function () {
            this.muted = true;
            this.soundTrack.main_music.pause();
            this.soundTrack.end_music.pause();
            this.soundTrack.end_sfx.pause();
            this.soundTrack.tetris_sfx.pause();
        };
        JukeBox.prototype.unmute = function () {
            this.muted = false;
            this.soundTrack.main_music.play();
        };
        return JukeBox;
    }());
    var Controls = (function () {
        function Controls() {
        }
        return Controls;
    }());
    var State = (function () {
        function State() {
        }
        return State;
    }());
    var Tetris = (function () {
        function Tetris(jukeBox) {
            this.jukeBox = jukeBox;
            this.initMuteCheckBox();
            this.jukeBox.playMainMusic();
            console.log('play main');
        }
        Tetris.prototype.initMuteCheckBox = function () {
            var checkbox = document.getElementById('mute');
            checkbox.checked = localStorage["muted"] === "true" ? true : false;
            var jb = this.jukeBox;
            checkbox.addEventListener('change', function (e) {
                jb.muted = this.checked;
                localStorage["muted"] = this.checked;
                if (this.checked) {
                    jb.mute();
                }
                else {
                    jb.unmute();
                }
                this.blur();
            });
        };
        return Tetris;
    }());
    Tetris_1.Tetris = Tetris;
    var Startup = (function () {
        function Startup() {
        }
        Startup.main = function () {
            console.log('hello');
            Tetris_1.XYZ = new Tetris(new JukeBox());
            //console.log('Hello TypeScript xyz');
            //var test = new JukeBox();
            /*var date = new Date();
            var current_hour = date.getHours();
            if (current_hour >= 18 && current_hour <= 23 || current_hour >= 0 && current_hour <= 3) {
                setTimeout(() => {
                    test.playDobryVecer();
                }, 1000);
            }*/
            //test.playTetrisSfx();
            return 0;
        };
        return Startup;
    }());
    Tetris_1.Startup = Startup;
})(Tetris || (Tetris = {}));
// window.onload = function() {
//     Tetris.Startup.main();
// };
//# sourceMappingURL=main.js.map