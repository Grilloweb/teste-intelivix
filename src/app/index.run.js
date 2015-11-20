(function() {
	'use strict';

	angular
		.module('testeIntelivix')
		.run(runBlock)
		.run(rootScope);

	/** @ngInject */
	function runBlock($log) {
		$log.debug('runBlock end');
	}

	function rootScope($rootScope) {
		$rootScope.currentMenu = "";
	}



})();
