/* ROTAS DO PROJETO
 * Metodo: routeConfig
 * Params:
 * 		$routeProvider
 *
 * @autor leonardo grillo
 */
(function() {
	'use strict';

	angular
		.module('testeIntelivix')
		.config(routeConfig);

	function routeConfig($routeProvider) {
		$routeProvider
			// rota da tela home
			.when('/', {
				templateUrl: 'app/main/main.html',
				controller: 'MainController',
				controllerAs: 'main'
			})
			// rota da tela listagem
			.when('/listagem', {
				templateUrl: 'app/listagem/listagem.html',
				controller: 'ListagemController',
				controllerAs: 'listagem'
			})
			// rota da tela formulário
			.when('/formulario', {
				templateUrl: 'app/formulario/formulario.html',
				controller: 'FormularioController',
				controllerAs: 'formulario'
			})
			// rota default direciona para a home
			.otherwise({
				redirectTo: '/'
			});
	}

})();
