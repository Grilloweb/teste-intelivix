(function() {
	'use strict';

	angular
		.module('testeIntelivix')
		.controller('ListagemController', ListagemController);

	/** @ngInject */
	function ListagemController(processosAPI) {
		var vm = this;

		vm.processos = [];

		carregarProcesso();
		function carregarProcesso() {
			processosAPI
				.getProcessos()
				.success(function(data) {
					vm.processos = data;
				});
		}
	}
})();
