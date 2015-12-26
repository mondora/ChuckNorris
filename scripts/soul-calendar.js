var calendar = require("./lib/calendar-of-the-soul.js");
var verses = require("./lib/verses.js");

module.exports = function (rudolf) {
    rudolf.respond(/calendar/i, function (msg) {
        var today = new Date();
        var weeks = calendar.weeks(today);
        msg.send("```"+verses[weeks-1].italian+"```");
    });
};
