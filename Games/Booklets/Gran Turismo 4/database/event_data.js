const eventData = {
    one_series_trophy: [{ name: '1er Trophäe', data: { vehicles: 'BMW 120d 2004\nBMW 120i 2004', prize: '3.000 Credits\nBMW 2002 Turbo 1973' } }],
    onethousand_miles: [{ name: '1000 Meilen', data: { vehicles: '427 S/C', prize: '450.000 Credits\nAlfa Romeo Giulia Sprint Speciale 1963' } }],
    two_zero_six_cup: [{ name: '206 Cup', data: { vehicles: 'Peugeot 206 Rally Car 1999', prize: '7.500 Credits\nPeugeot 205 Turbo 16 Rally Car 1985' } }],
    two_hp_two_cv_classics: [{ name: '2HP 2CV Classics', data: { vehicles: 'Citroën 2CV Type A 1954', prize: '2.000 Credits\nCitroën 2CV Type A 1954' } }],
    four_wheel_drive_challenge: [{ name: 'Allrad-Challenge', data: { vehicles: 'Peugeot 205 Turbo 16 1985', prize: '1.500 Credits\nToyota Motor Triathlon Race Car 2004' } }],
};

const event_logos = document.querySelectorAll('.event img');
const eventContainer = document.getElementById('event_data');
let event_currentBrand = null;
let event_currentIndex = 0;

event_logos.forEach(logo => {
    logo.addEventListener('click', () => {
        event_logos.forEach(l => l.classList.remove('active'));
        logo.classList.add('active');
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
                <tr><td class='car_info_1'>Preis:</td><td class='car_info_2'>${event.data.prize}</td></tr>
            </table>
        </div>
    </div>
    `;
}
function scrollEvents(direction) {const events = document.getElementById('events');const scrollAmount = 200;events.scrollBy({ left: direction * scrollAmount, behavior: 'smooth' });}