(function() {
	'use strict';

	angular
		.module('testeIntelivix')
		.controller('ListagemController', ListagemController);

	/** @ngInject */
	function ListagemController(processosAPI) {
		//atributos
		var vm = this;
		vm.reverse = true;
		vm.limitPerPage = 20;
		vm.dateFilter = "dd/MM/yyyy";

		/* METODO carregarProcesso
		 * consome a api de Processos
		 */
		carregarProcesso();
		function carregarProcesso() {
			processosAPI
				.getProcessos()
				.success(function(data) {
					vm.processos = data; // popula o scopo de processos
				});
		}

		//scopo flag onde pode ser true ou false
		vm.sort = function(){
			vm.reverse = !vm.reverse;
		}

		//scopo filtro, para poder calcular a media entre acordados e de perda
		vm.filterSumValues = function(processos) {
			return (processos.probabilidade_de_acordo + processos.probabilidade_de_perda) / 2;
		}

		//scopo que calcula a media entre acordados e de perda
		vm.calcValues = function(processos) {
			return (processos.probabilidade_de_acordo + processos.probabilidade_de_perda) / 2;
		}

	}
})();
