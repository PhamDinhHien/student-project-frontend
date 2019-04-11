export default class ConfigRoute {

  static $inject = ['$stateProvider'];
  static instance;

  static getInstance($stateProvider) {
    if (!ConfigRoute.instance) {
      ConfigRoute.instance = new ConfigRoute($stateProvider);
    }
    return ConfigRoute.instance;
  }

  constructor($stateProvider) {
    $stateProvider
      .state('dashboard.login', {
        url: 'login',
        views: {
          'dashboard': {
            templateUrl: 'modules/login/login.html',
            controller: 'LoginController',
            controllerAs: 'LoginCtrl'
          }
        }
      });
  }
}
