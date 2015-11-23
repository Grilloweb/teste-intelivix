(function() {
	'use strict';

	angular
		.module('testeIntelivix')
		.controller('ListagemController', ListagemController);

	/** @ngInject */
	function ListagemController(processosAPI) {
		var vm = this;
		vm.reverse = true;
		vm.limitPerPage = 20;
		vm.dateFilter = "dd/MM/yyyy";

		carregarProcesso();
		function carregarProcesso() {
			processosAPI
				.getProcessos()
				.success(function(data) {
					vm.processos = data;
				});
		}

		vm.sort = function(){
			vm.reverse = !vm.reverse;
		}

		vm.filterSumValues = function(processos) {
			return (processos.probabilidade_de_acordo + processos.probabilidade_de_perda) / 2;
		}

		vm.calcValues = function(processos) {
			return (processos.probabilidade_de_acordo + processos.probabilidade_de_perda) / 2;
		}

	}
})();
