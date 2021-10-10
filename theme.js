function enter(element, transition) {
    element.classList.remove('hidden');

    element.classList.add(`${transition}-enter`);
    element.classList.add(`${transition}-enter-start`);

    requestAnimationFrame(() => {
        element.classList.remove(`${transition}-enter-start`);
        element.classList.add(`${transition}-enter-end`);

        // Wait until the transition is over...

        element.classList.remove(`${transition}-enter-end`);
        element.classList.remove(`${transition}-enter`);
    });