import LoginRoutes from './login.routes';
import LoginController from './login.controller';

export default angular.module(`${APP_NAME}.Login`, [])
  .config(LoginRoutes.getInstance)
  .controller('LoginController', LoginController)
  .name;
