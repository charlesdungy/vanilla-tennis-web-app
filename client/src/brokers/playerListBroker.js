import pubsub from '../pubsub/pubsub.js';
import { getPlayers } from '../api/PlayersAPI.js';

export default class PlayerListBroker {
  #getPlayerListDataEvent = 'getPlayerListDataReady';

  constructor() {
    if (PlayerListBroker.instance) return PlayerListBroker.instance;
    PlayerListBroker.instance = this;
    this.getPlayerListData = this.getPlayerListData.bind(this);
    this.#initSubscribers();
  }

  #initSubscribers() {
    pubsub.subscriber(this.#getPlayerListDataEvent, this.getPlayerListData);
  }

  async getPlayerListData(payload) {
    try {
      const playersData = await getPlayers(payload);
      const playersList = { playersList: playersData };
      this.#setPlayerCardListElement(playersList);
    } catch (error) {
      console.error(error);
    }
  }

  #setPlayerCardListElement(props) {
    const rootElement = document.getElementById('root');
    rootElement.replaceChildren();
    const playerCard = document.createElement('player-card-list');
    playerCard.playersList = props.playersList;
    playerCard.setAttribute('id', 'main-player-card-list');
    rootElement.appendChild(playerCard);
  }
}
