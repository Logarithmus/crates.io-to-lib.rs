// ==UserScript==
// @name         crates.io -> lib.rs
// @version      0.1.4
// @license      GPL-3.0-only; http://www.gnu.org/licenses/gpl-3.0.txt
// @homepageURL  https://github.com/Logarithmus/crates-io-to-lib-rs
// @description  Replace all links to crates.io with ones to lib.rs, as the latter is much faster because it doesn't use tons of JavaScript
// @author       Logarithmus
// @match        *://*/*
// ==/UserScript==

(function() {
    for (let a of document.getElementsByTagName("a")) {
        // Only modify relevant <a> tags to avoid breaking sites
        if (a.hostname === "crates.io"
         && a.pathname.indexOf("/crates/") === 0
         && window.location.hostname != "crates.io") {
            a.hostname = "lib.rs"
        }
    }
})();