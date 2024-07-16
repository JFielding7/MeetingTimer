// ==UserScript==
// @name         New Userscript
// @namespace    http://tampermonkey.net/
// @version      2024-07-16
// @description  try to take over the world!
// @author       You
// @match        https://meet.google.com/ppy-zwbs-gty?pli=1&authuser=1
// @icon         https://www.google.com/s2/favicons?sz=64&domain=google.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    const participants = [...document.getElementsByClassName("AE8xFb OrqRRb GvcuGe goTdfd")[0]
        .getElementsByClassName("zWGUib")].map(person => person.innerText);
    console.log(participants);
})();