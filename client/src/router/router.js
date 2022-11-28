export default class Router {
  constructor(rootAnchor, initPath) {
    this.routes = [];
    this.rootAnchor = rootAnchor;
    this.#popWindowState();
    window.history.pushState(null, null, initPath);
  }

  useRoute(route) {
    this.routes.push(route);
    this.#addClickEvent(route.anchorTagId);
  }

  #findRouteOnAnchor(anchorTagId) {
    return this.routes.find((route) => {
      return route.idRegEx.test(anchorTagId) === true;
    });
  }

  #findRouteOnPath(path) {
    return this.routes.find((route) => {
      return route.hrefRegEx.test(path) === true;
    });
  }

  #getPublishData(anchorTagId, currentRoute) {
    return currentRoute.pubDataAttr
      ? document.getElementById(anchorTagId).getAttribute(currentRoute.pubDataAttr)
      : '';
  }

  #addClickEvent(itemId) {
    document.getElementById(itemId).addEventListener('click', (event) => {
      event.preventDefault();
      this.#handleRouteEvent(event);
    });
  }

  #handleRouteEvent(event, updateAnchor) {
    let currentRoute;
    let publishData;

    if (!updateAnchor) {
      const anchorTagId = event.composedPath()[0].getAttribute('id');
      currentRoute = this.#findRouteOnAnchor(anchorTagId);
      publishData = event.composedPath()[0].getAttribute(currentRoute.pubDataAttr);
      this.#pushWindowState(event.composedPath()[0].getAttribute('href'));
    } else {
      currentRoute = this.#findRouteOnAnchor(updateAnchor);
      publishData = this.#getPublishData(updateAnchor, currentRoute);
    }

    currentRoute.publish(currentRoute.pubEvent, publishData);
  }

  #pushWindowState(href) {
    window.history.pushState(null, null, href);
  }

  #popWindowState() {
    window.addEventListener('popstate', () => {
      const route = this.#findRouteOnPath(window.location.pathname);
      if (route.anchorTagId === this.rootAnchor) {
        const pathArray = window.location.pathname.split('/');
        const playerId = pathArray[pathArray.length - 1];
        route.publish(route.pubEvent, playerId);
      } else {
        this.#handleRouteEvent(null, route.anchorTagId);
      }
    });
  }
}
