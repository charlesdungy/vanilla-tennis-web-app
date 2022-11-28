const registerServiceWorker = async () => {
  if ('serviceWorker' in navigator) {
    try {
      await navigator.serviceWorker.register('sw.js', {
        scope: '/client/',
      });
    } catch (error) {
      console.error(`Registration failed with ${error}`);
    }
  }
};

export { registerServiceWorker };
