// ==UserScript==
// @name         crates.io -> lib.rs

// @version      0.1.0
// @license Unlicense; https://unlicense.org/
// @homepageURL https://github.com/Logarithmus/crates-io-to-lib-rs
// @description  Replace all links to crates.io with ones to lib.rs, as the latter is much faster cause it doesn't use tons of javascript
// @author       Logarithmus
// @match        *://*/*
// ==/UserScript==

(function() {
    const regex = /(.*?)crates\.io(.*)/
    for (let a of document.getElementsByTagName("a")) {
        a.href = a.href.replace(regex, "$1lib.rs$2")
    }
})();
