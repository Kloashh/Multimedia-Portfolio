// Planetary orbital periods (in Earth days)
const orbitalPeriods = {
    mercury: 87.97,
    venus: 224.7,
    earth: 365.25,
    mars: 687,
    jupiter: 4333,
    saturn: 10759,
    uranus: 30688,
    neptune: 60182,
    pluto: 90582
};

// Celestial bodies profile data
const celestialBodies = [
    {
        name: "Sun",
        description: "The Sun is the star at the center of our solar system, providing light and heat to all planets.",
        diameter: "1,392,700 km",
        distanceFromSun: "0 km (center)",
        orbitalPeriod: "N/A",
        rotationPeriod: "25-35 days",
        moons: "0",
        composition: "73% Hydrogen, 25% Helium, 2% Other",
        temperature: "5,778 K (surface), 15 million K (core)",
        funFacts: [
            "The Sun contains 99.86% of the Solar System's mass",
            "It's classified as a G-type main-sequence star",
            "The Sun's core temperature is about 27 million degrees Fahrenheit",
            "It converts 600 million tons of hydrogen into helium every second"
        ],
        icon: "☀️"
    },
    {
        name: "Mercury",
        description: "Mercury is the smallest planet and closest to the Sun, with extreme temperature variations.",
        diameter: "4,879 km",
        distanceFromSun: "57.9 million km",
        orbitalPeriod: "88 Earth days",
        rotationPeriod: "59 Earth days",
        moons: "0",
        composition: "Large iron core, thin silicate mantle",
        temperature: "-173°C to 427°C",
        funFacts: [
            "Mercury has no atmosphere to retain heat",
            "A day on Mercury lasts longer than its year",
            "It has the most eccentric orbit of all planets",
            "Mercury is shrinking as its iron core cools"
        ],
        icon: "☿"
    },
    {
        name: "Venus",
        description: "Venus is the hottest planet in our solar system due to its thick, toxic atmosphere.",
        diameter: "12,104 km",
        distanceFromSun: "108.2 million km",
        orbitalPeriod: "225 Earth days",
        rotationPeriod: "243 Earth days (retrograde)",
        moons: "0",
        composition: "Rocky with dense atmosphere of CO2",
        temperature: "462°C (surface)",
        funFacts: [
            "Venus rotates backwards compared to most planets",
            "Its atmosphere is 96.5% carbon dioxide",
            "Surface pressure is 92 times that of Earth",
            "Venus is often called Earth's 'evil twin'"
        ],
        icon: "♀"
    },
    {
        name: "Earth",
        description: "Earth is the only known planet to harbor life, with liquid water and a protective atmosphere.",
        diameter: "12,756 km",
        distanceFromSun: "149.6 million km",
        orbitalPeriod: "365.25 days",
        rotationPeriod: "24 hours",
        moons: "1 (The Moon)",
        composition: "Rocky with 71% water surface coverage",
        temperature: "-89°C to 58°C",
        funFacts: [
            "Earth is the only planet not named after a god",
            "It has the largest moon relative to planet size",
            "Earth's magnetic field protects us from solar radiation",
            "The planet is about 4.54 billion years old"
        ],
        icon: "🌍"
    },
    {
        name: "Moon",
        description: "The Moon is Earth's only natural satellite and influences tides, eclipses, and lunar phases.",
        diameter: "3,474 km",
        distanceFromSun: "149.6 million km (with Earth)",
        orbitalPeriod: "27.3 days",
        rotationPeriod: "27.3 days",
        moons: "0",
        composition: "Rock and dust with a small iron core",
        temperature: "-173°C to 127°C",
        funFacts: [
            "The Moon is moving away from Earth at 3.8 cm per year",
            "It causes ocean tides through gravitational pull",
            "The same side of the Moon always faces Earth",
            "It was the first celestial body visited by humans"
        ],
        icon: "🌕"
    },
    {
        name: "Mars",
        description: "Mars, the 'Red Planet', has the largest volcano and canyon in the solar system.",
        diameter: "6,792 km",
        distanceFromSun: "227.9 million km",
        orbitalPeriod: "687 Earth days",
        rotationPeriod: "24.6 hours",
        moons: "2 (Phobos, Deimos)",
        composition: "Rocky with iron oxide surface",
        temperature: "-87°C to -5°C",
        funFacts: [
            "Mars has the largest volcano in the solar system (Olympus Mons)",
            "It has seasons similar to Earth due to axial tilt",
            "Mars has polar ice caps made of water and CO2",
            "Evidence suggests Mars once had liquid water"
        ],
        icon: "♂"
    },
    {
        name: "Jupiter",
        description: "Jupiter is the largest planet, a gas giant with a Great Red Spot storm larger than Earth.",
        diameter: "142,984 km",
        distanceFromSun: "778.5 million km",
        orbitalPeriod: "12 Earth years",
        rotationPeriod: "9.9 hours",
        moons: "95+ (including Io, Europa, Ganymede, Callisto)",
        composition: "Mostly hydrogen and helium",
        temperature: "-108°C (cloud tops)",
        funFacts: [
            "Jupiter's Great Red Spot is a storm larger than Earth",
            "It acts as a 'cosmic vacuum cleaner' protecting inner planets",
            "Jupiter has a faint ring system",
            "It has more mass than all other planets combined"
        ],
        icon: "♃"
    },
    {
        name: "Saturn",
        description: "Saturn is famous for its spectacular ring system and is less dense than water.",
        diameter: "120,536 km",
        distanceFromSun: "1.43 billion km",
        orbitalPeriod: "29 Earth years",
        rotationPeriod: "10.7 hours",
        moons: "146+ (including Titan, Enceladus)",
        composition: "Mostly hydrogen and helium",
        temperature: "-139°C (cloud tops)",
        funFacts: [
            "Saturn would float in water if there was a bathtub big enough",
            "Its rings are made mostly of ice particles",
            "Titan, its largest moon, has lakes of liquid methane",
            "Saturn's hexagonal storm at its north pole is unique"
        ],
        icon: "♄"
    },
    {
        name: "Uranus",
        description: "Uranus is an ice giant that rotates on its side, making it unique among planets.",
        diameter: "51,118 km",
        distanceFromSun: "2.87 billion km",
        orbitalPeriod: "84 Earth years",
        rotationPeriod: "17.2 hours (retrograde)",
        moons: "27+ (including Miranda, Ariel, Umbriel)",
        composition: "Water, methane, and ammonia ices",
        temperature: "-197°C",
        funFacts: [
            "Uranus rotates on its side at a 98-degree angle",
            "It was the first planet discovered with a telescope",
            "Uranus has faint rings discovered in 1977",
            "Its blue-green color comes from methane in its atmosphere"
        ],
        icon: "♅"
    },
    {
        name: "Neptune",
        description: "Neptune is the windiest planet with speeds reaching 2,100 km/h, despite being farthest from the Sun.",
        diameter: "49,528 km",
        distanceFromSun: "4.5 billion km",
        orbitalPeriod: "165 Earth years",
        rotationPeriod: "16.1 hours",
        moons: "16+ (including Triton)",
        composition: "Water, methane, and ammonia ices",
        temperature: "-201°C",
        funFacts: [
            "Neptune has the fastest winds in the solar system",
            "It was discovered through mathematical predictions",
            "Triton, its largest moon, orbits backwards",
            "Neptune radiates 2.6 times more energy than it receives from the Sun"
        ],
        icon: "♆"
    },
    {
        name: "Pluto",
        description: "Pluto, now classified as a dwarf planet, has a heart-shaped feature and five known moons.",
        diameter: "2,376 km",
        distanceFromSun: "5.9 billion km",
        orbitalPeriod: "248 Earth years",
        rotationPeriod: "6.4 Earth days",
        moons: "5 (including Charon)",
        composition: "Rock and ice",
        temperature: "-229°C",
        funFacts: [
            "Pluto was reclassified as a dwarf planet in 2006",
            "It has a heart-shaped nitrogen plain called Tombaugh Regio",
            "Charon is so large it's almost a double planet system",
            "Pluto takes 248 Earth years to orbit the Sun once"
        ],
        icon: "♇"
    }
];

function renderCelestialProfiles() {
    const container = document.getElementById('celestial-profiles');
    if (!container) return;

    const gifBaseUrl = './assets/gifs/';

    container.innerHTML = celestialBodies.map(body => {
        const gifName = encodeURIComponent(body.name);
        const gifSrc = `${gifBaseUrl}${gifName}/${gifName}.gif`;

        return `
        <div class="profile-card-row">
            <article class="profile-card">
                <div class="profile-card-header">
                    <span class="profile-icon">${body.icon}</span>
                    <div>
                        <h3>${body.name}</h3>
                        <p>${body.description}</p>
                    </div>
                </div>
                <div class="profile-stats">
                    <div class="profile-stat"><strong>Diameter</strong>${body.diameter}</div>
                    <div class="profile-stat"><strong>Distance</strong>${body.distanceFromSun}</div>
                    <div class="profile-stat"><strong>Orbit</strong>${body.orbitalPeriod}</div>
                    <div class="profile-stat"><strong>Rotation</strong>${body.rotationPeriod}</div>
                    <div class="profile-stat"><strong>Moons</strong>${body.moons}</div>
                    <div class="profile-stat"><strong>Temp</strong>${body.temperature}</div>
                </div>
                <ul class="profile-facts">
                    ${body.funFacts.map(fact => `<li>${fact}</li>`).join('')}
                </ul>
            </article>
            <div class="profile-placeholder has-image">
                <img src="${gifSrc}" alt="${body.name} animation GIF">
            </div>
        </div>
    `;
    }).join('');
}

function calculateAge() {
    const ageInput = document.getElementById('age-input').value;
    
    if (!ageInput || isNaN(ageInput) || ageInput <= 0) {
        alert('Please enter a valid age');
        return;
    }

    const earthDays = ageInput * 365.25;
    
    // Calculate age on each planet
    const ages = {
        mercury: (earthDays / orbitalPeriods.mercury).toFixed(2),
        venus: (earthDays / orbitalPeriods.venus).toFixed(2),
        earth: (earthDays / orbitalPeriods.earth).toFixed(2),
        mars: (earthDays / orbitalPeriods.mars).toFixed(2),
        jupiter: (earthDays / orbitalPeriods.jupiter).toFixed(2),
        saturn: (earthDays / orbitalPeriods.saturn).toFixed(2),
        uranus: (earthDays / orbitalPeriods.uranus).toFixed(2),
        neptune: (earthDays / orbitalPeriods.neptune).toFixed(2),
        pluto: (earthDays / orbitalPeriods.pluto).toFixed(2)
    };

    // Update results display
    document.getElementById('mercury-age').textContent = ages.mercury;
    document.getElementById('venus-age').textContent = ages.venus;
    document.getElementById('earth-age').textContent = ages.earth;
    document.getElementById('mars-age').textContent = ages.mars;
    document.getElementById('jupiter-age').textContent = ages.jupiter;
    document.getElementById('saturn-age').textContent = ages.saturn;
    document.getElementById('uranus-age').textContent = ages.uranus;
    document.getElementById('neptune-age').textContent = ages.neptune;
    document.getElementById('pluto-age').textContent = ages.pluto;

    // Show results
    document.getElementById('results').style.display = 'grid';
}

// Allow Enter key to trigger calculation
document.addEventListener('DOMContentLoaded', function() {
    const ageInput = document.getElementById('age-input');
    if (ageInput) {
        ageInput.addEventListener('keypress', function(event) {
            if (event.key === 'Enter') {
                calculateAge();
            }
        });
    }
});

// Set active nav link based on current page
document.addEventListener('DOMContentLoaded', function() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-menu a');
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });

    renderCelestialProfiles();
});
