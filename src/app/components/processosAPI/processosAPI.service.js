(function() {
	'use strict';

	angular
			.module('testeIntelivix')
			.service('processosAPI', processosAPI);

	/** @ngInject */
	function processosAPI($http) {
		/* METODO _getProcessos
		 * retorna o get do json processos.json
		 */
		var _getProcessos = function() {
			return $http.get("/assets/json/processos.json");
		};

		return {
			getProcessos : _getProcessos
		};
	}

})();
