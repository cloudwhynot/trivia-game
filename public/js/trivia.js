const urlSearchParams = new URLSearchParams(window.location.search);
const playerName = urlSearchParams.get('playerName');

const mainHeadingTemplate = document.querySelector(
    '#main-heading-template'
).innerHTML;

const welcomeHeadingHTML = Handlebars.compile(mainHeadingTemplate);

document.querySelector('main').insertAdjacentHTML(
    'afterBegin',
    welcomeHeadingHTML({
        playerName,
    })
);