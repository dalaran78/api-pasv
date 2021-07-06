import { expect } from 'chai';

describe('operations with numbers', function(){
    const a = 5;
    const b = 7;

    it('addition works correct',  function(){
        expect(a + b, 'should be equal 12').to.eq(12);
    });

    it('substraction works correctly',  function(){
        expect(a - b, 'should be equal -2').to.eq(-2);
    });

});