let bundeslaender = [];

async function init() {
    let response = await fetch('./js/bundesland.json');
    bundeslaender = await response.json();
    console.log(bundeslaender);
    render();
}

function render() {
    let content = document.getElementById('main-content');
    content.innerHTML = '';

    for (let i = 0; i < bundeslaender.length; i++) {
        const state = bundeslaender[i];
        const population = (state['population'] + '').replace('.', ',');
        content.innerHTML += generateLink(state, population);
    }
}

function generateLink(state, population) {
    return `
    <a class="state-link" href="${state['url']}">
        <div class="state-info">
            <h2>${state['name']}</h2>
            <span>${population} Millionen</span>
        </div>
    </a>
    `;
}
