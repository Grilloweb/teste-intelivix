(function() {
	'use strict';

	angular
			.module('testeIntelivix')
			.service('processosAPI', processosAPI);

	/** @ngInject */
	function processosAPI($http) {
		var _getProcessos = function() {
			return $http.get("/assets/json/processos.json");
		};

		return {
			getProcessos : _getProcessos
		};
	}

})();
