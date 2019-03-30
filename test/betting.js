const Betting = artifacts.require('Betting')

contract('Betting', (accounts) => {
    const [bob, alice] = accounts
    it("test 1", async () => {
        const ssContract = await Betting.deployed()
        const bobNum = await ssContract.balences.call(bob)
        assert.equal(bobNum, 0, 'wrong')
        const aliceNum = await ssContract.balences.call(alice)
        assert.equal(aliceNum, 0, 'wrong')
    })

    it("test 2", async () => {
        const ssContract = await Betting.deployed()
        ssContract.deposit(2, { from: bob })
        ssContract.deposit(1, { from: alice })
        ssContract.createBet(2, 1, 33, { from: bob })
        ssContract.accept(0, {from: alice})
        let bobNum = await ssContract.balences.call(bob)
        console.log(bobNum)
        let aliceNum = await ssContract.balences.call(alice)
        console.log(aliceNum)
        assert.equal(parseInt(aliceNum) + parseInt(bobNum), 3, 'wrong')
    })
})