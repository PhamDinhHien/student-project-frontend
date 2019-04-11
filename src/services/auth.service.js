import BaseService from 'base/base.service';

export default class AuthService extends BaseService {

  static $inject = ['$http', '$q']
  constructor($http, $q) {
    super($http, $q);
  }

  login(data) {
    return this.post('login', data);
  }
}
