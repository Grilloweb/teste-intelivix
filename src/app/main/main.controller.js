(function() {
	'use strict';

	angular
		.module('testeIntelivix')
		.controller('MainController', MainController);

	/** @ngInject */
	function MainController(relatorioAPI) {
		//atributos
		var vm = this;
		vm.relatorios = [];
		vm.estados = [];
		vm.ufExistente = [];
		vm.relatorioEstado = [];
		vm.relatorioValorEstado = [];

		/* METODO carregarRelatorio
		 * consome a api de Relatórios
		 */
		carregarRelatorio();
		function carregarRelatorio() {
			relatorioAPI
				.getRelatorio()
				.success(function(data) {
					vm.relatorios = data; // popula o scopo de relatorios
					_isolandoDados(data); //chama metodo isolandoDados assim que os dados da api retornar
					_relatorioEstado(); //chama metodo _relatorioEstado assim que os dados da api retornar
					_relatorioValorEstado(); //chama metodo _relatorioValorEstado assim que os dados da api retornar
				});
		}

		/* Metodo _isolandoDados
		 * Params:
		 * 		@data - retorno do carregamento da api Relatorio
		 */
		function _isolandoDados(data) {
			for(var i = 0; i < data.length; i++) {
				//popula o scope estados com os dados necessários para os seus relatórios
				vm.estados.push( {
						uf: data[i].uf,
						ativo: data[i].ativo,
						valor: data[i].valor
				} );

				//popula o scope ufExistente sem que o estado se repita
				if (vm.ufExistente.indexOf(data[i].uf) == -1)
					vm.ufExistente.push(data[i].uf);
			}
		}

		/* Metodo _relatorioEstado
		 * Objetivo: popular o scope relatorioEstado para o relatório
		 * 			 baseado no estado
		 */
		function _relatorioEstado (){
			var map = [];
			var temp = [];
			var total=0;

			// loop em estados para poder filtrar os dados
			for(var i = 0; i < vm.estados.length; i++) {
				if(!vm.estados[i].ativo)
					continue;

				if(map[vm.estados[i].uf] != null) {
					map[vm.estados[i].uf] += 1;
				} else {
					map[vm.estados[i].uf] = 1;
				}
				total++;
			}
			// loop para popular corretamente o scope relatorioEstado com suas mascaras apropriadas
			for (var key in map) {
				var result = ((map[key]*100)/total).toFixed(3);
				temp.push({"uf": key, "qtd": (result)})
			}
			vm.relatorioEstado = temp;
		}

		/* Metodo _relatorioValorEstado
		 * Objetivo: popular o scope relatorioValorEstado para o relatório
		 * 			 baseado no valor que cada estado recebeu
		 */
		function _relatorioValorEstado (){
			var map = [];
			var temp = [];
			var total=0;

			// loop em estados para poder filtrar os dados
			for(var i = 0; i < vm.estados.length; i++) {
				if(!vm.estados[i].ativo)
					continue;
				var valor = vm.estados[i].valor.replace('$', '');
				valor = valor.replace('.', '');
				valor = valor.replace(',', '');

				if(map[vm.estados[i].uf] != null) {
					map[vm.estados[i].uf] += parseInt(valor);
				} else {
					map[vm.estados[i].uf] = parseInt(valor);
				}
				total += parseInt(valor);
			}

			// loop para popular corretamente o scope relatorioValorEstado com suas mascaras apropriadas
			for (var key in map) {
				var result = ((map[key]*100)/total).toFixed(3);
				var valorTotalMoney = map[key]/100;
				valorTotalMoney = valorTotalMoney.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,');

				temp.push({"uf": key, "qtd": result, "total": "$" + valorTotalMoney})
			}
			vm.relatorioValorEstado = temp;
		}

	}

})();


