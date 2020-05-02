// ==UserScript==
// @name         crates.io -> lib.rs
// @version      0.1.5
// @license      GPL-3.0-only; http://www.gnu.org/licenses/gpl-3.0.txt
// @homepageURL  https://github.com/Logarithmus/crates-io-to-lib-rs
// @updateURL    https://openuserjs.org/meta/Logarithmus/crates.io_-_lib.rs.meta.js
// @downloadURL  https://openuserjs.org/install/Logarithmus/crates.io_-_lib.rs.user.js
// @copyright    2020, Logarithmus (https://openuserjs.org/users/Logarithmus)
// @description  Replace all links to crates.io with ones to lib.rs, as the latter is much faster because it doesn't use tons of JavaScript
// @author       Logarithmus
// @match        *://*/*
// ==/UserScript==

(function() {
    if (window.location.hostname === "crates.io") {
        return
    }

    for (let a of document.getElementsByTagName("a")) {
        // Only modify relevant <a> tags to avoid breaking sites
        if (a.hostname === "crates.io"
         && a.pathname.indexOf("/crates/") === 0) {
            a.hostname = "lib.rs"
        }
    }
})();
