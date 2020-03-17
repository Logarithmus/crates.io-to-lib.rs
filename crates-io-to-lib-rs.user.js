// ==UserScript==
// @name         crates.io -> lib.rs
// @version      0.1.3
// @license      GPL-3.0-only; http://www.gnu.org/licenses/gpl-3.0.txt
// @homepageURL  https://github.com/Logarithmus/crates-io-to-lib-rs
// @description  Replace all links to crates.io with ones to lib.rs, as the latter is much faster because it doesn't use tons of JavaScript
// @author       Logarithmus
// @match        *://*/*
// ==/UserScript==

(function() {
    let url = null;
    for (let a of document.getElementsByTagName("a")) {
        // Skip to next tag on "not a valid URL"
        try {
            // Rely on the browser's own URL parser for robustness
            url = new URL(a.href);
        } catch (e) {
            continue;
        }

        // Only modify relevant <a> tags to avoid breaking sites
        if (url.hostname === "crates.io") {
          url.hostname = "lib.rs";
          a.href = url.toString();
        }
    }
})();
