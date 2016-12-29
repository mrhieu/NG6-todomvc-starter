import angular from 'angular';
import Components from './components/components';
import services from './services/services';

// import '../../node_modules/jquery/dist/jquery';
// import '../../node_modules/jquery-bridget/jquery-bridget';
// import '../../node_modules/ev-emitter/ev-emitter';
// import '../../node_modules/desandro-matches-selector/matches-selector';
// import '../../node_modules/fizzy-ui-utils/utils';
// import '../../node_modules/get-size/get-size';
// import '../../node_modules/outlayer/item';
// import '../../node_modules/outlayer/outlayer';
// import '../../node_modules/masonry-layout/masonry';
// import '../../node_modules/imagesloaded/imagesloaded';
// import mansory from 'angular-masonry';


import AppComponent from './app.component';

angular.module('app', [
  Components.name,
  services.name,
])
.component('app', AppComponent);

angular.bootstrap(document.body, ['app']);
