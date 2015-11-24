(function() {
	'use strict';

	angular
		.module('testeIntelivix')
		.controller('MainController', MainController);

	/** @ngInject */
	function MainController(relatorioAPI) {
		var vm = this;
		vm.relatorio = [];
		vm.datas = [];
		vm.estados = [];
		vm.comarca = [];
		vm.status = [];
		vm.ativo = [];
		vm.valor = [];
		vm.indice = [];
		vm.ufExistente = [];
		vm.relatorioEstado = [];
		vm.relatorioValorEstado = [];

		carregarRelatorio();
		function carregarRelatorio() {
			relatorioAPI
				.getRelatorio()
				.success(function(data) {
					vm.relatorios = data;
					_isolandoDados(data);
					_relatorioEstado();
					_relatorioValorEstado();
				});
		}

		function _isolandoDados(data) {
			for(var i = 0; i < data.length; i++) {
				// vm.datas.push( { datas: data[i].data, ativo: data[i].ativo } );
				vm.estados.push( { uf: data[i].uf, ativo: data[i].ativo, valor: data[i].valor } );
				// vm.comarca.push( { comarca: data[i].comarca, ativo: data[i].ativo } );
				// vm.status.push( { status: data[i].status, ativo: data[i].ativo } );
				// vm.ativo.push( { ativo: data[i].ativo });
				// vm.valor.push( { valor: data[i].valor, ativo: data[i].ativo} );
				// vm.indice.push( { indice: data[i].indice, ativo: data[i].ativo } );

				if (vm.ufExistente.indexOf(data[i].uf) == -1)
					vm.ufExistente.push(data[i].uf);
			}
		}

		function _relatorioEstado (){
			var map = [];
			var temp = [];
			var total=0;

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
			for (var key in map) {
				var result = ((map[key]*100)/total).toFixed(3);
				temp.push({"uf": key, "qtd": (result)})
			}
			vm.relatorioEstado = temp;
		}

		function _relatorioValorEstado (){
			var map = [];
			var temp = [];
			var total=0;

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


