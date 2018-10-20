const Inheritance = artifacts.require('Inheritance')

const chai = require('chai')
const chaiAsPromised = require('chai-as-promised')
chai.use(chaiAsPromised)
const expect = chai.expect

contract('Inheritance', accounts => {
  const [
    owner,
    lawyer,
    person,
    heir1,
    heir2,
    heir3,
    heir4
  ] = accounts

  it('should get an instance of the contract', async() => {
    inheritance = await Inheritance.deployed()
    expect(inheritance).not.to.be.null
  })
  it('should get the owner of the contract', async() => {
    expect(await inheritance.owner()).to.eq(owner)
  })
  describe('business logic', () => {
    it('should allow a person to start an inheritance process')
    it('should allow a person to add a heir to their process')
    it('should allow an heir to verify if the person is dead')
    it('should throw an error when attempting to claim when a person is not dead')
    it('should allow the lawyer to start the inheritance process when the person dies')
  })
  describe('closing', () => {
    it('should destruct the contract when not needed anymore', async() => {
      tx = await inheritance.close()
      expect(tx.tx.length).to.eq(66)
      expect(tx.tx).to.match(/0x\w{64}/)
    })
    it('should fail when calling a method of the recently closed contract', () => {
      expect(inheritance.owner()).to.be.eventually.rejected
    })
  })
  it('should finish', done => {
    assert.isTrue(true)
    done()
  })
})
