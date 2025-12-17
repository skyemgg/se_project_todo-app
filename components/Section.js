class Section {
  constructor({ items, renderer, containerSelector }) {
    this._items = items;
    this._renderer = renderer;
    this._containter = document.querySelector(containerSelector);
  }

  renderItems() {
    this._items.forEach((item) => {});
  }

  addItem(element) {}
}

export default Section;
