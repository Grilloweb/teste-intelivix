(function() {
	'use strict';

	describe('controllers', function(){
		var vm;

		beforeEach(module('testeIntelivix'));
		beforeEach(inject(function(_$controller_, _relatorio_) {
			spyOn(_relatorio_, 'getRelatorio').and.returnValue([{}, {}, {}, {}, {}]);

			vm = _$controller_('MainController');
			vm.relatorio = _relatorio_;
		}));

		it('should define more than 1 awesome things', function() {
			expect(angular.isArray(vm.relatorio)).toBeTruthy();
			expect(vm.relatorio.length === 1).toBeTruthy();
		});
	});
})();
