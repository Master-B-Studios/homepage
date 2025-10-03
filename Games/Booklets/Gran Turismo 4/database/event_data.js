const eventData = {
    one_series_trophy: [{ name: '1er-Trophy', data: { vehicles: 'BMW 120d 2004\nBMW 120i 2004', prize: '3.000 Credits', gift: 'BMW 2002 Turbo 1973' } }],
    onethousand_miles: [{ name: '1000 Meilen', data: { vehicles: 'AC Cars 427 SC 1966', prize: '450.000 Credits', gift: 'Alfa Romeo Giulia Sprint Speciale 1963' } }],
    two_hp_two_cv_classics: [{ name: '2-PS-2-Zylinder-Klassiker', data: { vehicles: 'Citroën 2CV Type A 1954', prize: '2.000 Credits', gift: 'Citroën 2CV Type A 1954' } }],
    two_zero_six_cup: [{ name: '206-Pokal', data: { vehicles: 'Peugeot 206 Rally Car 1999', prize: '7.500 Credits', gift: 'Peugeot 205 Turbo 16 Rally Car 1985' } }],
    four_wheel_drive_challenge: [{ name: '4x4 Herausforderung', data: { vehicles: 'Peugeot 205 Turbo 16 1985', prize: '1.500 Credits', gift: 'Toyota Motor Triathlon Race Car 2004' } }],
    a3_cup: [{ name: 'A3-Pokal', data: { vehicles: 'Audi A3 3.2 Quattro 2003', prize: '2.000 Credits', gift: 'Audi Pikes Peak quattro 2003' } }],
    altezza_race: [{ name: 'Altezza-Rennen', data: { vehicles: 'Lexus IS 200 J 1998', prize: '2.000 Credits', gift: 'Toyota Altezza Touring Car 2001' } }],
    aston_martin_carnival: [{ name: 'Aston-Martin-Festival', data: { vehicles: 'Aston Martin V8 Vantage 1999', prize: '2.000 Credits', gift: 'Aston Martin DB9 Coupe 2003' } }],
    beetle_cup: [{ name: 'Beetle-Pokal', data: { vehicles: 'VW Beetle Cup Car 2000', prize: '2.500 Credits', gift: 'VW Beetle 1100 1949' } }],
    blackpool_racers: [{ name: 'Blackpool Racers', data: { vehicles: 'TVR Tuscan Speed 6 2000', prize: '3.000 Credits', gift: 'TVR Cerbera Speed 12 2000' } }],
    boxer_spirit: [{ name: 'Boxer Spirit', data: { vehicles: 'Ruf CTR 2 1996', prize: '7.500 Credits', gift: 'Ruf CTR Yellow Bird 1987' } }],
    british_gt_series: [{ name: 'Britische GT-Serie', data: { vehicles: 'Jaguar XJ220 LM Race Car 2001', prize: '57.000 Credits', gift: 'Jaguar E-Type Coupe 1961' } }],
    british_lightweight_series: [{ name: 'british_lightweight_series', data: { vehicles: 'Lotus Elise Motor Sport 1999', prize: '3.000 Credits', gift: 'Lotus Europa Special 1971' } }],
    camaro_meeting: [{ name: 'Camaro-Meeting', data: { vehicles: 'Chevrolet Camaro LM Race Car 2000', prize: '2.000 Credits', gift: 'Chevrolet Camaro Z-IROC Concept 1988' } }],
    civic_race: [{ name: 'Civic-Rennen', data: { vehicles: 'Honda Civic Type R 2004', prize: '5.000 Credits', gift: 'Honda Civic Motul Race Car 1987' } }],
    clio_trophy: [{ name: 'Clio-Trophy', data: { vehicles: 'Renault Clio V6 Phase 2 2003', prize: '10.000 Credits', gift: 'Renault Clio V6 24V Race Car 2000' } }],
    club_m: [{ name: 'Club "M"', data: { vehicles: 'BMW M Coupe 1998', prize: '45.000 Credits', gift: 'BMW M3 GTR 2003' } }],
    ff_challenge: [{ name: 'FF-Herausforderung', data: { vehicles: 'Honda Integra Type R 2003', prize: '1.500 Credits', gift: 'Mazda 6 Concept 2001' } }],
    fr_challenge: [{ name: 'FH-Herausforderung', data: { vehicles: 'BMW M3 GTR Race Car 2001', prize: '1.500 Credits', gift: 'Nissan Skyline 2000 GT-B 1967' } }],
    all_japan_gt_championship: [{ name: 'Japanische GT-Meisterschaft', data: { vehicles: 'Toyota 88C-V Minolta Race Car 1989<br>Suzuki Escudo Dirt Trial Car 1998', prize: '15.000 Credits', gift: 'Nissan Motul Pitwork Z 2004' } }],
    lightweight_k_cup: [{ name: 'Leichtgewicht-K-Car-Pokal', data: { vehicles: 'Suzuki Cappucino EA21R 1995', prize: '2.000 Credits', gift: 'Ginetta G4 1964' } }],
    mr_challenge: [{ name: 'MH-Herausforderung', data: { vehicles: 'Nercedes-Benz CLK GTR Race Car 1998', prize: '2.000 Credits', gift: 'Lotus Esprit Turbo HC 1987' } }],
    pickup: [{ name: 'Pickup-Rennen', data: { vehicles: 'Ford SVT F-150 Lightning 2003', prize: '1.200 Credits', gift: 'Chevrolet Silverado SST Concept 2002' } }],
    renault_alpine_cup: [{ name: 'Renault-Alpine-Pokal', data: { vehicles: 'Alpine A310 1600 VE', prize: '7.500 Credits', gift: 'Alpine A110 1600 S' } }],
    sunday_cup: [{ name: 'Sonntagspokal', data: { vehicles: 'Nercedes-Benz CLK GTR Race Car 1998', prize: '600 Credits', gift: 'Autobianchi A112 Abarth 1979' } }],
    spider_roadster: [{ name: 'Spider & Roadster', data: { vehicles: 'AC Cars 427 SC 1966', prize: '3.000 Credits', gift: 'Chrysler Prowler 2002' } }],
    club_re: [{ name: 'Wankelmotor-Club', data: { vehicles: 'Mazda 787 B Race Car 1991', prize: '5.000 Credits', gift: 'Mazda 110 S L10A 1967' } }],
    
    club_z: [{ name: 'Club "Z"', data: { vehicles: 'Nissan 350 Z Option Stream 2004', prize: '7.500 Credits', gift: 'Nissan 240 ZG 1971' } }],
    placeholder: [{ name: 'placeholder', data: { vehicles: 'placeholder', prize: '10.000 Credits', gift: 'placeholder' } }],
    placeholder: [{ name: 'placeholder', data: { vehicles: 'placeholder', prize: '10.000 Credits', gift: 'placeholder' } }],
    placeholder: [{ name: 'placeholder', data: { vehicles: 'placeholder', prize: '10.000 Credits', gift: 'placeholder' } }],
    placeholder: [{ name: 'placeholder', data: { vehicles: 'placeholder', prize: '10.000 Credits', gift: 'placeholder' } }],
    placeholder: [{ name: 'placeholder', data: { vehicles: 'placeholder', prize: '10.000 Credits', gift: 'placeholder' } }],
    placeholder: [{ name: 'placeholder', data: { vehicles: 'placeholder', prize: '10.000 Credits', gift: 'placeholder' } }],
    placeholder: [{ name: 'placeholder', data: { vehicles: 'placeholder', prize: '10.000 Credits', gift: 'placeholder' } }],
    placeholder: [{ name: 'placeholder', data: { vehicles: 'placeholder', prize: '10.000 Credits', gift: 'placeholder' } }],
    placeholder: [{ name: 'placeholder', data: { vehicles: 'placeholder', prize: '10.000 Credits', gift: 'placeholder' } }],
    placeholder: [{ name: 'placeholder', data: { vehicles: 'placeholder', prize: '10.000 Credits', gift: 'placeholder' } }],
    placeholder: [{ name: 'placeholder', data: { vehicles: 'placeholder', prize: '10.000 Credits', gift: 'placeholder' } }],
    placeholder: [{ name: 'placeholder', data: { vehicles: 'placeholder', prize: '10.000 Credits', gift: 'placeholder' } }],
    placeholder: [{ name: 'placeholder', data: { vehicles: 'placeholder', prize: '10.000 Credits', gift: 'placeholder' } }],
    placeholder: [{ name: 'placeholder', data: { vehicles: 'placeholder', prize: '10.000 Credits', gift: 'placeholder' } }],
    placeholder: [{ name: 'placeholder', data: { vehicles: 'placeholder', prize: '10.000 Credits', gift: 'placeholder' } }],
    placeholder: [{ name: 'placeholder', data: { vehicles: 'placeholder', prize: '10.000 Credits', gift: 'placeholder' } }],
    placeholder: [{ name: 'placeholder', data: { vehicles: 'placeholder', prize: '10.000 Credits', gift: 'placeholder' } }],
    placeholder: [{ name: 'placeholder', data: { vehicles: 'placeholder', prize: '10.000 Credits', gift: 'placeholder' } }],
    placeholder: [{ name: 'placeholder', data: { vehicles: 'placeholder', prize: '10.000 Credits', gift: 'placeholder' } }],
    placeholder: [{ name: 'placeholder', data: { vehicles: 'placeholder', prize: '10.000 Credits', gift: 'placeholder' } }],
    placeholder: [{ name: 'placeholder', data: { vehicles: 'placeholder', prize: '10.000 Credits', gift: 'placeholder' } }],
    placeholder: [{ name: 'placeholder', data: { vehicles: 'placeholder', prize: '10.000 Credits', gift: 'placeholder' } }],
    placeholder: [{ name: 'placeholder', data: { vehicles: 'placeholder', prize: '10.000 Credits', gift: 'placeholder' } }],
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
                <tr><td class='car_info_1'>Fahrzeugempfehlung:</td><td class='car_info_2'>${event.data.vehicles}</td></tr>
                <tr><td class='car_info_1'>Preisgeld:</td><td class='car_info_2'>${event.data.prize}</td></tr>
                <tr><td class='car_info_1'>Belohnung:</td><td class='car_info_2'>${event.data.gift}</td></tr>
            </table>
        </div>
    </div>
    `;
}
function scrollEvents(direction) {const events = document.getElementById('events');const scrollAmount = 200;events.scrollBy({ left: direction * scrollAmount, behavior: 'smooth' });}