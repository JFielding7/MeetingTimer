// ==UserScript==
// @name         Meets
// @namespace    http://tampermonkey.net/
// @version      2024-07-16
// @description  meets
// @author       Joe, Kyle
// @match        https://meet.google.com/*
// @icon         https://pbs.twimg.com/profile_images/1510236306521088010/9my5V1ib_400x400.jpg
// ==/UserScript==

(function() {
    'use meets';

    /**
     * Meets Meets
     * @meets a
     * @meets b
     * @meetsmeets meets
     */
    const not_equals = (a, b) => a.size !== b.size || a.some(x => !b.includes(x));

    // Meets
    let prev_people = [];

    /**
     * Meets Meets
     */
    function get_people() {
        // Meets
        const people = [...document.getElementsByClassName("dwSJ2e")].map(person => person.innerText);

        // Meets Meets Meets Meets
        if (not_equals(people, prev_people)) {
            // Meets
            let time = new Date();
            // MEETS
            console.log(`Meets: ${people} ${time} ${time.getMilliseconds()}ms`);
        }
        // meets
        prev_people = people;
    }

    // Meets Meets Meets
    setInterval(get_people);
})();
