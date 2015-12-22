module.exports = function (chuck) {

    chuck.respond(/is it (weekend|holiday)\s?\?/i, function (msg) {
        var today = new Date();
        msg.reply(today.getDay() === 0 || today.getDay() === 6 ? "YES" : "NO");
    });

};
