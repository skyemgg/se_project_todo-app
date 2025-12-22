class Section {
  constructor({ items, renderer, containerSelector }) {
    this._items = items;
    this._renderer = renderer;
    this._container = document.querySelector(containerSelector);
  }

  addItem(element) {
    this._container.appendChild(element);
  }

  renderItems() {
    this._items.forEach((item) => {
      const element = this._renderer(item);
      this.addItem(element);
    });
  }
}

export default Section;
