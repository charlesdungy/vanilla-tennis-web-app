import pubsub from '../pubsub/pubsub.js';
import { getPlayer, getPlayerAsset } from '../api/PlayersAPI.js';

export default class PlayerProfileBroker {
  #getPlayerDataEvent = 'getPlayerDataReady';

  constructor() {
    if (PlayerProfileBroker.instance) return PlayerProfileBroker.instance;
    PlayerProfileBroker.instance = this;
    this.getPlayerData = this.getPlayerData.bind(this);
    this.#initSubscribers();
  }

  #initSubscribers() {
    pubsub.subscriber(this.#getPlayerDataEvent, this.getPlayerData);
  }

  async getPlayerData(payload) {
    try {
      const [playerData, playerAssetData] = await Promise.all([
        getPlayer(payload),
        getPlayerAsset(payload),
      ]);
      this.#setPlayerProfileElement(playerData, playerAssetData);
    } catch (error) {
      console.error(error);
    }
  }

  #setPlayerProfileElement(attributes, assetAttributes) {
    console.log(assetAttributes);
    const rootElement = document.getElementById('root');
    rootElement.replaceChildren();

    const playerContainer = document.createElement('player-container');
    playerContainer.dataset.id = attributes.PlayerId;
    playerContainer.dataset.firstname = attributes.FirstName;
    playerContainer.dataset.lastname = attributes.LastName;
    playerContainer.dataset.currentrank = attributes.CurrentRank;
    playerContainer.dataset.titles2022 = attributes.Titles2022;
    playerContainer.dataset.age = attributes.Age;
    playerContainer.dataset.country = attributes.Country;
    playerContainer.dataset.record2022 = attributes.Record2022;
    playerContainer.dataset.earnings = attributes.Earnings;
    playerContainer.dataset.firstservepercent = attributes.FirstServePercent;
    playerContainer.dataset.firstservepointswonpercent = attributes.FirstServePointsWonPercent;
    playerContainer.dataset.secondservepointswonpercent = attributes.SecondServePointsWonPercent;
    playerContainer.dataset.servicegameswonpercent = attributes.ServiceGamesWonPercent;
    playerContainer.dataset.countryimage = assetAttributes.FlagImgPath;
    playerContainer.dataset.playerimage = assetAttributes.PlayerImgPath;

    rootElement.appendChild(playerContainer);
  }
}
