import chai = require("chai");
const expect = chai.expect;

import UT from '../index'

let inSeconds:number;
let inMilliSeconds:number;

before(()=>{
inSeconds=UT();
inMilliSeconds=UT('milliseconds')
})
describe("uptime formats", () => {

    it("seconds", () => {
        expect(inSeconds).to.be.a('number')
        expect(inSeconds.toString().split('.').length).to.be.eq(1)
    })
    it("milliseconds", () => {
        expect(inMilliSeconds).to.be.a('number')
        expect(inSeconds).to.be.equal(parseInt((inMilliSeconds/1000).toString()))
    })
})