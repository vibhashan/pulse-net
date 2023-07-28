/**
 * Import necessary packages
 */
const { ipcRenderer } = require('electron');

window.onload = function () {

    const results = document.getElementById('___gcse_1');

    results.addEventListener('click', (event) => {
        // Check if the clicked element is an anchor (a) element
        if (event.target.tagName === 'A') {
            // Prevent the default link behavior (opening in the same window)
            event.preventDefault();

            // Get the href value of the clicked anchor
            const href = event.target.href;

            ipcRenderer.send('open-new-window', { href });
        }
    });

}



