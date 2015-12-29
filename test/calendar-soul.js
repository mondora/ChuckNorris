var chai = require("chai");

var calendar = require("../scripts/lib/calendar-of-the-soul.js");

describe("easter", function () {
    it("should be ", function () {
        var y2010 = "2010-4-4";
        var actual = calendar.easter(2010);
        chai.expect(actual).to.equal(y2010);
    });
});

describe("easterweeks", function () {
    it("should be ", function () {
        var from = new Date("2010-4-4");
        var to= new Date("2010-04-11");
        var actual = calendar.weeksBetween(from, to);
        chai.expect(actual).to.equal(1);
    });
});

describe("easterAfter51weeks", function () {
    it("should be ", function () {
        var from = new Date("2010-4-4");
        var to= new Date("2011-03-27");
        var actual = calendar.weeksBetween(from, to);
        chai.expect(actual).to.equal(51);
    });
});

describe("lastEaster-before-next-Easter", function () {
    it("should be ", function () {
        var today = new Date("2016-3-26"); //the day before easter!!!
        var actual = calendar.lastEaster(today);
        chai.expect(actual).to.equal("2015-4-5");
    });
});

describe("lastEaster-March-2016", function () {
    it("should be ", function () {
        var today = new Date("2016-5-26"); //the day before easter!!!
        var actual = calendar.lastEaster(today);
        chai.expect(actual).to.equal("2016-3-27");
    });
});

describe("calendar-week", function () {
    it("should be ", function () {
        var today = new Date("2016-4-7"); //the day before easter!!!
        var actual = calendar.weeks(today);
        chai.expect(actual).to.equal(2);
    });
});

describe("test if week is 39", function () {
    it("should be ", function () {
        var today = new Date("2015-12-29"); //the day before easter!!!
        var actual = calendar.weeks(today);
        chai.expect(actual).to.equal(39);
    });
});
