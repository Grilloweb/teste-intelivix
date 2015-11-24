(function() {
	'use strict';

	angular
			.module('testeIntelivix')
			.service('relatorioAPI', relatorioAPI);

	/** @ngInject */
	function relatorioAPI($http) {
		/* METODO _getRelatorio
		 * retorna o get do json relatorio.json
		 */
		var _getRelatorio = function() {
			return $http.get("/assets/json/relatorio.json");
		};

		return {
			getRelatorio : _getRelatorio
		};
	}

})();
