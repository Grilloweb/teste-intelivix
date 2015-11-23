(function() {
	'use strict';

	angular
		.module('testeIntelivix')
		.controller('FormularioController', FormularioController);

	/** @ngInject */
	function FormularioController() {
		var vm = this;
		vm.mFormulario = {};

		vm.save = function(data) {
			console.log( JSON.stringify( data, null, 2 ));
		};
	}
})();
