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
		function SidebarController(moment, $rootScope, $scope) {
			var vm = this;

			$scope.linkMenu = function(view) {
				$rootScope.currentMenu = view;
			};

			$scope.linkMenuCurrent = function() {
				return $rootScope.currentMenu;
			};

			// "vm.creation" is avaible by directive option "bindToController: true"
			vm.relativeDate = moment(vm.creationDate).fromNow();
		}
	}

})();