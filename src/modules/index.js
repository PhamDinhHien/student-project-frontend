import './home';
import './product';
import './login';

angular.module(`${APP_NAME}.modules`, [
  `${APP_NAME}.Home`,
  `${APP_NAME}.Product`,
  `${APP_NAME}.Login`,
]);
