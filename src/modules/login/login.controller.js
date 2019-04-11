export default class LoginController {
  constructor($http, $state, AuthService) {
    this.$http = $http;
    this.$state = $state;
    this.AuthService = AuthService;
    this.userInput = {
      username: null,
      password: null
    }

  }

  loginUser() {
    console.log('zzzzzzzzzzz');
    this.AuthService.login(this.userInput).then(response => {
      document.cookie = `token=${response.success.token}`;
      console.log(response.success.token);
      this.$state.go('dashboard.product');
    }, err => {
      console.log(err);
    })
  }
}

LoginController.$inject = ['$http', '$state', 'AuthService'];
