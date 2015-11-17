(function() {
  'use strict';

  angular
    .module('testeIntelivix')
    .directive('acmeNavbarEsquerdo', acmeNavbarEsquerdo);

  /** @ngInject */
  function acmeNavbarEsquerdo() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/navbarEsquerdo/navbarEsquerdo.html',
      scope: {
          creationDate: '='
      },
      controller: NavbarEsquerdoController,
      controllerAs: 'vm',
      bindToController: true
    };

    return directive;

    /** @ngInject */
    function NavbarEsquerdoController(moment) {
      var vm = this;

      // "vm.creation" is avaible by directive option "bindToController: true"
      vm.relativeDate = moment(vm.creationDate).fromNow();
    }
  }

})();
