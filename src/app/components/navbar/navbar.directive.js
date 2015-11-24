(function() {
	'use strict';

	angular
		.module('testeIntelivix')
		.directive('acmeNavbar', acmeNavbar);

	/** @ngInject */
	function acmeNavbar() {
		var directive = {
			restrict: 'E',
			templateUrl: 'app/components/navbar/navbar.html',
			scope: {
					creationDate: '='
			},
			replace: true,
			controller: NavbarController,
			controllerAs: 'vm',
			bindToController: true
		};

		return directive;

		/** @ngInject */
		function NavbarController($rootScope) {
			//atributos
			var vm = this;

			//navega no meu
			vm.linkMenu = function(view) {
				$rootScope.currentMenu = view;
			};

			//atualiza qual o menu ativo
			vm.linkMenuCurrent = function() {
				return $rootScope.currentMenu;
			};
		}
	}

})();
