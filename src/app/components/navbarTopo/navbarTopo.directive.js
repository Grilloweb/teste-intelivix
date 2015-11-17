(function() {
  'use strict';

  angular
    .module('testeIntelivix')
    .directive('acmeNavbarTopo', acmeNavbarTopo);

  /** @ngInject */
  function acmeNavbarTopo() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/navbarTopo/navbarTopo.html',
      scope: {
          creationDate: '='
      },
      controller: NavbarTopoController,
      controllerAs: 'vm',
      bindToController: true
    };

    return directive;

    /** @ngInject */
    function NavbarTopoController(moment) {
      var vm = this;

      // "vm.creation" is avaible by directive option "bindToController: true"
      vm.relativeDate = moment(vm.creationDate).fromNow();
    }
  }

})();
