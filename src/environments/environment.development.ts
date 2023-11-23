export const environment = {
    production: false,
    // api: {serverUrl: 'http://localhost:3000/api/v1'},
    apiUri:'http://localhost:3000/api/v1',
    auth0:
    {
      domain: 'dev-htjrdxyu2p87zjsm.us.auth0.com',
      clientId: 'W3prmTgUoeQudp9U8kOSgLq2E7AFns6V',
      authorizationParams: {
        redirect_uri: window.location.origin,
        audience: 'Una2023'
      }
    }
  
  };
  
