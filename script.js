const counters = document.querySelectorAll('.counter');

counters.forEach(counter => {
    counter.innerText = '0';

    const updateCounter = () => {
        const target = +counter.getAttribute('data-target');   // target value
        const current = +counter.innerText;                // current value
        
        const increment = target / 200;         // speed

        if (current < target) {
            counter.innerText = `${Math.ceil(current + increment)}`;
            setTimeout(updateCounter, 10);
        } else {
            current = target;
        }
    }

    updateCounter();
});