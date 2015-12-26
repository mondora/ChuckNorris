//var enterReplies = ["Hi", "I don’t do Burn Down charts, I prefer Smack Down charts.", "Firing", "Hello friend.", "Gotcha", "I see you"];
//var leaveReplies = ["I don't need garbage collection because I don't call .Dispose(), I call .DropKick().", "Target lost", "Searching"];


module.exports = function (chuck) {
/*
    chuck.listen (function (message) {
        message.user.name("Makkina");
    });

    chuck.enter (function (res) {
        res.send (res.random, enterReplies);
    });

    chuck.leave (function (res) {
        res.send (res.random, leaveReplies);
    });
*/
    chuck.respond(/is it (weekend|holiday)\s?\?/i, function (msg) {
        var today = new Date();
        msg.reply(today.getDay() === 0 || today.getDay() === 6 ? "YES" : "NO");
    });

};
