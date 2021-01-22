{
  /**
   * Print Loading State
   */
  type LoadingState = {
    state: 'loading';
  };

  type SuccessState = {
    state: 'success';
    response: {
      body: string;
    };
  };

  type FailState = {
    state: 'fail';
    reason: string;
  };

  type ResourceLoadState = LoadingState | SuccessState | FailState;

  function printLoginState(resource: ResourceLoadState) {
    switch (resource.state) {
      case 'loading':
        console.log('👀 loading...');
        return;
      case 'success':
        console.log('😃 loaded');
        return;
      case 'fail':
        console.log('😱 no network');
        return;
      default:
        throw Error('unknown state');
    }
  }

  printLoginState({ state: 'loading' }); // 👀 loading...
  printLoginState({ state: 'success', response: { body: 'loaded' } }); // 😃 loaded
  printLoginState({ state: 'fail', reason: 'no network' }); // 😱 no network
}
