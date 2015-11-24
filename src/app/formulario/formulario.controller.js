(function() {
	'use strict';

	angular
		.module('testeIntelivix')
		.controller('FormularioController', FormularioController);

	/** @ngInject */
	function FormularioController() {
		//atributos
		var vm = this;
		vm.mFormulario = {};

		/* METODO save
		 * apenas recebe os dados do formulário e printa no console (gera erro no debuger do gulp)
		 */
		vm.save = function(data) {
			console.log( JSON.stringify( data, null, 2 ));
		};
	}
})();
