function idObj(idObj, objA){
    let classBox = document.getElementById(idObj);
    classBox.appendChild(objA);
}

const domIndex = document.createElement('div');
domIndex.innerHTML = `
    <section class="content" id="content">
        <div class="left-content" id="left-content"></div>
        <div id="right-content" class="right-content"></div>
    </section>
`;
idObj("main", domIndex);