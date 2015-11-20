(function() {
  'use strict';

  describe('service relatorioAPI', function() {
    var relatorioAPI;

    beforeEach(module('testeIntelivix'));
    beforeEach(inject(function(_relatorioAPI_) {
      relatorioAPI = _relatorioAPI_;
    }));

    it('should be registered', function() {
      expect(relatorioAPI).not.toEqual(null);
    });

    describe('getRelatorio function', function() {
      it('should exist', function() {
        expect(relatorioAPI.getRelatorio).not.toEqual(null);
      });

      it('should return array of object', function() {
        var data = relatorioAPI.getRelatorio();
        expect(data).toEqual(jasmine.any(Array));
        expect(data[0]).toEqual(jasmine.any(Object));
        expect(data.length > 5).toBeTruthy();
      });
    });
  });
})();
