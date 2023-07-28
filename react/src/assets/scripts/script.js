(function () {
    let cx = '613ed320c8f3c4899';
    let gcse = document.createElement('script');

    gcse.type = 'text/javascript';
    gcse.async = true;
    gcse.src = (document.location.protocol ==
        'https:' ? 'https:' : 'http:') +
        '//cse.google.com/cse.js?cx=' + cx;

    let s = document.getElementsByTagName('script')[0];

    s.parentNode.insertBefore(gcse, s);
})();

window.onload = function () {
    let title = "Pulse Net is ready to go...";
    let textBox = document.querySelector("#gsc-i-id1");
    let button = document.querySelector(".gsc-search-button-v2 svg title");

    textBox.placeholder = title;
    textBox.title = title;
    button.innerHTML = title;
}
