import pubsub from '../pubsub/pubsub.js';

export default class HomeBroker {
  #goHomeEvent = 'setHomeElement';

  constructor() {
    if (HomeBroker.instance) return HomeBroker.instance;
    HomeBroker.instance = this;
    this.setHomeElement = this.setHomeElement.bind(this);
    this.#initSubscribers();
  }

  #initSubscribers() {
    pubsub.subscriber(this.#goHomeEvent, this.setHomeElement);
  }

  setHomeElement() {
    const homeClassName = 'main-home';
    const rootElement = document.getElementById('root');
    rootElement.replaceChildren();
    const homeElementDiv = document.createElement('div');
    homeElementDiv.className = homeClassName;
    homeElementDiv.textContent = 'This is a home page';
    rootElement.appendChild(homeElementDiv);
  }
}
