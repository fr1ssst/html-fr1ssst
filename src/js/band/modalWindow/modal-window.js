class modalWindow {
  #modal = document.createElement('div');
  #modal_parent = document.createElement('div');
  #modal_block = document.createElement('div');
  #modal_close = document.createElement('div');
  #modal_body = document.createElement('div');
  #div_nameBand = document.createElement('div');

  constructor(text) {
    this.#modal.appendChild(this.#modal_parent);
    this.#modal.appendChild(this.#modal_block);
    this.#modal_block.appendChild(this.#modal_close);
    this.#modal_block.appendChild(this.#modal_body);
    this.#modal_block.appendChild(this.#div_nameBand);

    this.#modal_parent.onclick = this.#modal_close.onclick = this.close.bind(this);
    this.#modal_parent.style = 'position:fixed;top:0;left:0;width:100%;height:100%;min-height:' + document.documentElement.scrollWidth + 'px;min-width:' + document.documentElement.scrollWidth + 'px;opacity:0.55;background-color:black;z-index:90;';
    this.#modal_close.innerHTML = '&#10006;';
    this.#modal_close.style = 'padding:0;position:absolute;width: 20px;height:20px;top:-7px;right:1px;cursor:pointer;font-size:15px;line-height:0;font:20px Arial;text-align:center;text-shadow: 0px 0px 4px black;';
    this.#modal_block.classList.add('modalWindow-block');

    this.#modal_body.classList.add('modalWindow-body');
    this.#div_nameBand.classList.add('group');

    if (text) this.#modal_body.innerText = text;

    this.createGroup('Name band', 'Name band', 'bandNameInput');
    this.createGroup('Full band name', 'full band name', 'fullBandName');
    this.createGroup('Solist', 'Solist', 'solistInput');
    this.createSaveButton();
  }

  get innerText() {
    return this.#modal_body.innerText;
  }

  set innerText(value) {
    this.#modal_body.innerText = value;
  }

  get innerHTML() {
    return this.#modal_body.innerHTML;
  }

  set innerHTML(value) {
    this.#modal_body.innerHTML = value;
  }

  createText(text) {
    const p = document.createElement('p');
    p.textContent = text;
    p.classList.add('p-modalWindow');
    this.#div_nameBand.appendChild(p);
  }

  createInput(text, id) {
    const input = document.createElement('input');
    input.type = 'text';
    input.placeholder = text;
    input.id = id;
    this.#div_nameBand.appendChild(input);
  }

  createSaveButton() {
    const saveButton = document.createElement('button');
    saveButton.textContent = 'Save';
    saveButton.onclick = this.saveData.bind(this);
    this.#div_nameBand.appendChild(saveButton);
  }

  createGroup(text, textInput, idInput) {
    this.createText(text);
    this.createInput(textInput, idInput);
  }

  saveData() {
    const bandName = document.getElementById('bandNameInput').value;
    const soloist = document.getElementById('solistInput').value;

    if (!bandName || !soloist) {
      alert('Please fill all fields');
    }

    const newBand = {
      id: Date.now().toString(),
      soloist: soloist,
      bandName: bandName,
      fullBandName: "",
      followersYTMusic: "",
      icon: "",
      participants: [],
      tracks: []
    };

    const bands = JSON.parse(localStorage.getItem('bands'));
    bands.push(newBand);
    localStorage.setItem('bands', JSON.stringify(bands));

    alert('Data successfully saved');
    console.log(bands);
    this.close();
  }

  show() {
    document.body.appendChild(this.#modal);
    this.#modal_block.animate([{ opacity: 0 }, { opacity: 1 }], 500);
  }

  close() {
    document.body.removeChild(this.#modal);
  }
}

export default modalWindow;