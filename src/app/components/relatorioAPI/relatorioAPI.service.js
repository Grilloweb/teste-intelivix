(function() {
	'use strict';

	angular
			.module('testeIntelivix')
			.service('relatorioAPI', relatorioAPI);

	/** @ngInject */
	function relatorioAPI($http) {
		var _getRelatorio = function() {
			return $http.get("/assets/json/relatorio.json");
		};

		return {
			getRelatorio : _getRelatorio
		};
	}

})();
