(function() {
  'use strict';

  describe('service processosAPI', function() {
    var processosAPI;

    beforeEach(module('testeIntelivix'));
    beforeEach(inject(function(_processosAPI_) {
      processosAPI = _processosAPI_;
    }));

    it('should be registered', function() {
      expect(processosAPI).not.toEqual(null);
    });

    describe('getProcessos function', function() {
      it('should exist', function() {
        expect(processosAPI.getProcessos).not.toEqual(null);
      });

      it('should return array of object', function() {
        var data = processosAPI.getProcessos();
        expect(data).toEqual(jasmine.any(Array));
        expect(data[0]).toEqual(jasmine.any(Object));
        expect(data.length > 5).toBeTruthy();
      });
    });
  });
})();
