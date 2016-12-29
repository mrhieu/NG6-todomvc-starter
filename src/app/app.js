import angular from 'angular';
import Components from './components/components';
import services from './services/services';
import 'normalize.css';

// import 'item';
import 'masonry-layout';
// import 'angular-masonry';

import AppComponent from './app.component';

angular.module('app', [
  Components.name,
  services.name,
  // 'wu.masonry'
])
.component('app', AppComponent);

angular.bootstrap(document.body, ['app'])
