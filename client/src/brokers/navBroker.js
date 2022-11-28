import pubsub from '../pubsub/pubsub.js';

export default class NavBroker {
  #setNavEvent = 'setNavElement';
  #navList = [
    {
      id: 'home-link',
      href: '/home',
      textContent: 'Home',
    },
    {
      id: 'players-link',
      href: '/players',
      textContent: 'Players',
    },
  ];

  constructor() {
    if (NavBroker.instance) return NavBroker.instance;
    NavBroker.instance = this;
    this.setNavElement = this.setNavElement.bind(this);
    this.#initSubscribers();
  }

  #initSubscribers() {
    pubsub.subscriber(this.#setNavEvent, this.setNavElement);
  }

  setNavElement() {
    const headerElement = document.getElementById('header');
    const navElement = document.createElement('main-nav');
    navElement.className = 'main-nav';

    const ulElement = document.createElement('ul');
    ulElement.id = 'main-nav-list';

    this.#navList.forEach((item) => {
      let liElement = document.createElement('li');
      let aElement = document.createElement('a');
      aElement.id = item.id;
      aElement.href = item.href;
      aElement.textContent = item.textContent;
      liElement.appendChild(aElement);
      ulElement.appendChild(liElement);
    });

    navElement.appendChild(ulElement);
    headerElement.appendChild(navElement);
  }
}
