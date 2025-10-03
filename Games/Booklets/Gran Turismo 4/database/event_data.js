const eventData = {
    one_series_trophy: [{ name: '1er-Trophy', data: { vehicles: 'BMW 120d 2004\nBMW 120i 2004', prize: '3.000 Credits', gift: 'BMW 2002 Turbo 1973' } }],
    onethousand_miles: [{ name: '1000 Meilen', data: { vehicles: 'AC 427 S/C', prize: '450.000 Credits', gift: 'Alfa Romeo Giulia Sprint Speciale 1963' } }],
    two_zero_six_cup: [{ name: '206-Pokal', data: { vehicles: 'Peugeot 206 Rally Car 1999', prize: '7.500 Credits', gift: 'Peugeot 205 Turbo 16 Rally Car 1985' } }],
    two_hp_two_cv_classics: [{ name: '2-PS-2-Zylinder-Klassiker', data: { vehicles: 'Citroën 2CV Type A 1954', prize: '2.000 Credits', gift: 'Citroën 2CV Type A 1954' } }],
    four_wheel_drive_challenge: [{ name: '4WD Challenge', data: { vehicles: 'Peugeot 205 Turbo 16 1985', prize: '1.500 Credits', gift: 'Toyota Motor Triathlon Race Car 2004' } }],
    a3_cup: [{ name: 'A3 Cup', data: { vehicles: 'Audi A3 3.2 Quattro 2003', prize: '2.000 Credits', gift: 'Audi Pikes Peak quattro 2003' } }],
    all_japan_gt_championship: [{ name: 'All Japan GT Championship', data: { vehicles: 'Toyota 88C-V Minolta Race Car 1989<br>Suzuki Escudo Dirt Trial Car 1998', prize: '15.000 Credits', gift: 'Nissan Motul Pitwork Z 2004' } }],
    altezza_race: [{ name: 'Altezza Race', data: { vehicles: 'Lexus IS 200 J 1998', prize: '2.000 Credits', gift: 'Toyota Altezza Touring Car 2001' } }],
    club_m: [{ name: 'Club M', data: { vehicles: 'BMW M Coupe 1998', prize: '45.000 Credits', gift: 'BMW M3 GTR 2003' } }],
    renault_alpine_cup: [{ name: 'Renault Alpine Cup', data: { vehicles: 'Alpine A310 1600 VE', prize: '7.500 Credits', gift: 'Alpine A110 1600 S' } }],
};

const event_items = document.querySelectorAll('.event_item');
const eventContainer = document.getElementById('event_data');
let event_currentBrand = null;
let event_currentIndex = 0;

event_items.forEach(item => {
    item.addEventListener('click', () => {
        // Alle anderen deaktivieren
        event_items.forEach(i => i.classList.remove('active'));

        // Aktuelles markieren
        item.classList.add('active');

        // Brand vom IMG im aktuellen Item holen
        const logo = item.querySelector('img');
        event_currentBrand = logo.getAttribute('data-brand');

        renderSliderEvent();
    });
});

function renderSliderEvent() {
    const events = eventData[event_currentBrand];
    const event = events[event_currentIndex];

    eventContainer.innerHTML = `
    <div class='slider-container'>
        <div class='slider-details'>
            <table class='car_info_table'>
                <tr><td class='car_info_1'>Fahrzeuge:</td><td class='car_info_2'>${event.data.vehicles}</td></tr>
                <tr><td class='car_info_1'>Preisgeld:</td><td class='car_info_2'>${event.data.prize}</td></tr>
                <tr><td class='car_info_1'>Belohnung:</td><td class='car_info_2'>${event.data.gift}</td></tr>
            </table>
        </div>
    </div>
    `;
}
function scrollEvents(direction) {const events = document.getElementById('events');const scrollAmount = 200;events.scrollBy({ left: direction * scrollAmount, behavior: 'smooth' });}