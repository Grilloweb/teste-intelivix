(function() {
	'use strict';

	angular
		.module('testeIntelivix')
		.directive('acmeSidebar', acmeSidebar);

	/** @ngInject */
	function acmeSidebar() {
		var directive = {
			restrict: 'E',
			templateUrl: 'app/components/sidebar/sidebar.html',
			scope: {
					creationDate: '='
			},
			controller: SidebarController,
			controllerAs: 'vm',
			bindToController: true
		};

		return directive;

		/** @ngInject */
		function SidebarController($rootScope) {
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
