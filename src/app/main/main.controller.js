(function() {
	'use strict';

	angular
		.module('testeIntelivix')
		.controller('MainController', MainController);

	/** @ngInject */
	function MainController(relatorioAPI) {
		var vm = this;

		vm.relatorio = [];

		carregarRelatorio();
		function carregarRelatorio() {
			relatorioAPI
				.getRelatorio()
				.success(function(data) {
					vm.relatorio = data;
				});
		}
	}
})();
