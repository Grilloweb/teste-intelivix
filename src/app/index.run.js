(function() {
  'use strict';

  angular
    .module('testeIntelivix')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
