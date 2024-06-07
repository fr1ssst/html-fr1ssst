import data from "../../data/n_bands.json";

function createObj(element, parent){
    const objA = document.createElement(element);
    parent.appendChild(objA);
    return objA;
}
function createTopContent(item, parent){
    const topContent = createObj('div', parent);
    topContent.classList.add('top-content');
    topContent.innerHTML = `
        <img src="${item.icon}" alt="logo_band">
        <h3>${item.bandName} ${item.fullBandName}</h3>
    `;
}
function createContent(item, parent){
    const content = createObj('div', parent);
    content.classList.add('content');
    const followersInMillions = parseFloat(item.followersYTMusic) / 1000000;
    const participantsNonsl = item.participants.filter(
        participant => participant !== item.soloist && participant.trim() !== ''
    )
    content.innerHTML = `
        <p>Followers: ${followersInMillions.toFixed(2) || 'missing'} millions</p>
        <p>Solist: ${item.soloist || 'None'}</p>
        <p>Participants: ${participantsNonsl.join(', ') || 'None'}</p>
    `;;
}
///////////////////////////////////////////////////////ID/////////////////////////////

////////////////////////////////////////////////////////////////////////////
function dataLoader(dataBase){
    document.addEventListener('DOMContentLoaded', () => {
        const params = new URLSearchParams(window.location.search);
        const itemId = params.get('id');
        const item = dataBase.find(item => item.id == itemId);
        const main = document.getElementById('left-content');
            if (item) {
                const container = document.createElement('div');
                container.classList.add('container');

                const topContent = createTopContent(item, container);
                const content = createContent(item, container);
                main.appendChild(container);
                } else {
                    container.textContent = 'Item not found';
                }})
};
dataLoader(data);