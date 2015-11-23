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
		function NavbarController(moment, $rootScope) {
			var vm = this;

			vm.linkMenu = function(view) {
				$rootScope.currentMenu = view;
			};

			vm.linkMenuCurrent = function() {
				return $rootScope.currentMenu;
			};

			// "vm.creation" is avaible by directive option "bindToController: true"
			vm.relativeDate = moment(vm.creationDate).fromNow();
		}
	}

})();
