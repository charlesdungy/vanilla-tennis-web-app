class PlayerProfile extends HTMLElement {
  #attributes = {
    'data-age': (value) => (this.dataset.age = value),
    'data-country': (value) => (this.dataset.country = value),
    'data-countryimage': (value) => (this.dataset.countryimage = value),
    'data-currentrank': (value) => (this.dataset.currentrank = value),
    'data-earnings': (value) => (this.dataset.earnings = value),
    'data-firstname': (value) => (this.dataset.firstname = value),
    'data-firstservepercent': (value) => (this.dataset.firstservepercent = value),
    'data-firstservepointswonpercent': (value) => (this.dataset.firstservepointswonpercent = value),
    'data-id': (value) => (this.dataset.id = value),
    'data-lastname': (value) => (this.dataset.lastname = value),
    'data-playerimage': (value) => (this.dataset.playerimage = value),
    'data-record2022': (value) => (this.dataset.record2022 = value),
    'data-secondservepointswonpercent': (value) =>
      (this.dataset.secondservepointswonpercent = value),
    'data-servicegameswonpercent': (value) => (this.dataset.servicegameswonpercent = value),
    'data-titles2022': (value) => (this.dataset.titles2022 = value),
  };

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();
  }

  static get observedAttributes() {
    return [
      'data-age',
      'data-country',
      'data-countryimage',
      'data-currentrank',
      'data-earnings',
      'data-firstname',
      'data-firstservepercent',
      'data-firstservepointswonpercent',
      'data-id',
      'data-lastname',
      'data-playerimage',
      'data-record2022',
      'data-secondservepointswonpercent',
      'data-servicegameswonpercent',
      'data-titles2022',
    ];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (this.isConnected && newValue !== oldValue) {
      const setAttribute = this.#attributes[name];
      setAttribute(newValue);
      this.render();
    }
  }

  render() {
    this.shadowRoot.innerHTML = `
      <div class="player-container">
        <div class="top-wrapper">
          <div class="player">
            <div class="player-firstname">${this.dataset.firstname}</div>
            <div class="player-lastname">${this.dataset.lastname}</div>
          </div>
          <div class="player-country">
            <img src=${this.dataset.countryimage} alt="" />
          </div>
        </div>
        <div class="player-options">
          <ul>
            <li><a class="active" href="#">Profile</a></li>
            <li><a href="#">Matches</a></li>
          </ul>
        </div>
        <div class="player-img">
          <div class="player-stats">
            <div class="player-stats-row-0">
              <div class="player-age">
                <div class="age-label">Age</div>
                <div class="age">${this.dataset.age}</div>
              </div>
              <div class="player-country-name">
                <div class="country-label">Country</div>
                <div class="country">${this.dataset.country}</div>
              </div>
            </div>
            <div class="player-stats-row-1">
              <div class="player-rank">
                <div class="rankType">Rank</div>
                <div class="rank">${this.dataset.currentrank}</div>
              </div>
              <div class="player-titles">
                <div class="titleYear">Titles</div>
                <div class="titles">${this.dataset.titles2022}</div>
              </div>
            </div>
            <div class="player-stats-row-2">
              <div class="player-record">
                <div class="record-year">
                  <span class="record-this-year">Record</span>
                </div>
                <div class="record">${this.dataset.record2022}</div>
              </div>
              <div class="player-money">
                <div class="money-year">
                  <span class="money-this-year">Earnings</span>
                </div>
                <div class="money">$${this.dataset.earnings}</div>
              </div>
            </div>
          </div>
          <img src=${this.dataset.playerimage}  alt="Player image" />
        </div>
        <div class="stats-container">
          <div class="first-serve">
            <span class="first-serve-label">1st Serve</span>
            <span class="first-serve-value">${this.dataset.firstservepercent}</span>
            <span class="first-serve-value-line"></span>
          </div>
          <div class="first-serve-pts">
            <span class="first-serve-pts-label">1st Serve Pts Won</span>
            <span class="first-serve-pts-value">${this.dataset.firstservepointswonpercent}</span>
            <span class="first-serve-pts-value-line"></span>
          </div>
          <div class="second-serve-pts">
            <span class="second-serve-pts-label">2nd Serve Pts Won</span>
            <span class="second-serve-pts-value">${this.dataset.secondservepointswonpercent}</span>
            <span class="second-serve-pts-value-line"></span>
          </div>
          <div class="service-game">
            <span class="service-game-label">Service Games Won</span>
            <span class="service-game-value">${this.dataset.servicegameswonpercent}</span>
            <span class="service-game-value-line"></span>
          </div>
        </div>
      </div>
    `;
  }
}

export const definePlayerProfile = () => customElements.define('player-container', PlayerProfile);
