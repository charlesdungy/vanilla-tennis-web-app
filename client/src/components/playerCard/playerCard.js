class PlayerCard extends HTMLElement {
  #attributes = {
    'data-country': (value) => (this.dataset.country = value),
    'data-currentrank': (value) => (this.dataset.currentrank = value),
    'data-firstname': (value) => (this.dataset.firstname = value),
    'data-id': (value) => (this.dataset.id = value),
    'data-lastname': (value) => (this.dataset.lastname = value),
  };

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();
  }

  static get observedAttributes() {
    return ['data-country', 'data-currentrank', 'data-firstname', 'data-id', 'data-lastname'];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (this.isConnected && oldValue !== newValue) {
      const setAttribute = this.#attributes[name];
      setAttribute(newValue);
      this.render();
    }
  }

  render() {
    this.shadowRoot.innerHTML = `
      <div>
        <a data-id="${this.dataset.id}" id="players-link-${this.dataset.id}" href="/players/${this.dataset.id}">Player ${this.dataset.id}</a>
        <span>${this.dataset.currentrank}</span>
        <span>${this.dataset.firstname}</span>
        <span>${this.dataset.lastname}</span>
        <span>${this.dataset.country}</span>
      </div>
    `;
  }
}

export const definePlayerCard = () => customElements.define('player-card', PlayerCard);
