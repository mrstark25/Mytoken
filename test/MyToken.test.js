const MyToken = artifacts.require('MyToken');

contract('MyToken', accounts => {
  describe('token attributes', () => {
    const _name = 'MyToken', _symbol = 'MTK';
    let instance;

    beforeEach(async () => {
      instance = await MyToken.deployed();
    });

    it('has the correct name', async () => {
      const name = await instance.name();
      assert.equal(name, _name);
    });
    
    it('has the correct symbol', async () => {
      const symbol = await instance.symbol();
      assert.equal(symbol, _symbol);
    });
    
    it('has 18 decimals', async () => {
      const decimals = await instance.decimals();
      assert.equal(decimals, 18);
    });

    it('has total supply of 10000', async () => {
      const totalSupply = instance.totalSupply();
      assert(totalSupply, 10000);
    })
  })

})
