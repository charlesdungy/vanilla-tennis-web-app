/* eslint-disable indent */
class PlayerCardList extends HTMLElement {
  #playersList = [];

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();
  }

  set playersList(playersList) {
    this.#playersList = playersList;
    this.render();
  }

  get playersList() {
    return this.#playersList;
  }

  render() {
    this.shadowRoot.innerHTML = `
      <div id="player-card-list">
      ${this.#playersList
        .map(
          (item) => `
            <player-card
              data-country="${item.Country}"
              data-currentrank="${item.CurrentRank}"
              data-firstname="${item.FirstName}"
              data-id="${item.PlayerId}"
              data-lastname="${item.LastName}"
            ></player-card>
          `
        )
        .join('\n')}
      </div>
    `;
  }
}

export const definePlayerCardList = () => customElements.define('player-card-list', PlayerCardList);
