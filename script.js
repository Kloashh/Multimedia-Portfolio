// Planetary orbital periods (in Earth days)
const orbitalPeriods = {
    mercury: 87.97,
    venus: 224.7,
    earth: 365.25,
    mars: 687,
    jupiter: 4333,
    saturn: 10759,
    uranus: 30688,
    neptune: 60182
};

function calculateAge() {
    const ageInput = document.getElementById('age-input').value;
    
    if (!ageInput || isNaN(ageInput) || ageInput <= 0) {
        alert('Please enter a valid age');
        return;
    }

    const earthDays = ageInput * 365;
    
    // Calculate age on each planet
    const ages = {
        mercury: (earthDays / orbitalPeriods.mercury).toFixed(2),
        venus: (earthDays / orbitalPeriods.venus).toFixed(2),
        earth: (earthDays / orbitalPeriods.earth).toFixed(2),
        mars: (earthDays / orbitalPeriods.mars).toFixed(2),
        jupiter: (earthDays / orbitalPeriods.jupiter).toFixed(2),
        saturn: (earthDays / orbitalPeriods.saturn).toFixed(2),
        uranus: (earthDays / orbitalPeriods.uranus).toFixed(2),
        neptune: (earthDays / orbitalPeriods.neptune).toFixed(2)
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
});
