(function() {
	'use strict';

	angular
		.module('testeIntelivix')
		.config(routeConfig);

	function routeConfig($routeProvider) {
		$routeProvider
			.when('/', {
				templateUrl: 'app/main/main.html',
				controller: 'MainController',
				controllerAs: 'main'
			})
			.when('/listagem', {
				templateUrl: 'app/listagem/listagem.html',
				controller: 'ListagemController',
				controllerAs: 'listagem'
			})
			.when('/formulario', {
				templateUrl: 'app/formulario/formulario.html',
				controller: 'FormularioController',
				controllerAs: 'formulario'
			})
			.otherwise({
				redirectTo: '/'
			});
	}

})();
