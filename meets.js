// ==UserScript==
// @name         New Userscript
// @namespace    http://tampermonkey.net/
// @version      2024-07-16
// @description  try to take over the world!
// @author       You
// @match        https://meet.google.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=google.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    const not_equals = (a, b) => a.size !== b.size || a.some(x => !b.includes(x));

    let prev_people = [];

    function get_people() {
        const people = [...document.getElementsByClassName("dwSJ2e")].map(person => person.innerText);

        if (not_equals(people, prev_people)) {
            let time = new Date();
            console.log(`${people} ${time} ${time.getMilliseconds()}ms`);
        }
        prev_people = people;
    }
    setInterval(get_people);
})();