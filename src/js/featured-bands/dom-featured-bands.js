function idObj(idObj, objA){
    let classBox = document.getElementById(idObj);
    classBox.appendChild(objA);
    return classBox;
}

const recommendedBands = document.createElement('div');
recommendedBands.innerHTML = `
<div class="artists">
    <h1>Featured Bands</h1>
        <div class="artist-container containers" id="band-container"></div>
</div>
`;

idObj("left-content", recommendedBands);