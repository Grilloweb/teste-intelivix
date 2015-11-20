(function() {
	'use strict';

	describe('controllers', function(){
		var vm;

		beforeEach(module('testeIntelivix'));
		beforeEach(inject(function(_$controller_, _processos_) {
			spyOn(_processos_, 'getProcessos').and.returnValue([{}, {}, {}, {}, {}]);

			vm = _$controller_('ListagemController');
			vm.processos = _processos_;
		}));

		it('should define more than 1 awesome things', function() {
			expect(angular.isArray(vm.processos)).toBeTruthy();
			expect(vm.processos.length === 1).toBeTruthy();
		});
	});
})();
