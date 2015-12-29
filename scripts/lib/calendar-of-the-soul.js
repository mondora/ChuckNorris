module.exports = {
    easter: function (year) {
        var century = Math.floor(year/100);
        var N = year - 19*Math.floor(year/19);
        var K = Math.floor((century - 17)/25);
        var I = century - Math.floor(century/4) - Math.floor((century - K)/3) + 19*N + 15;
        I = I - 30*Math.floor((I/30));
        I = I - Math.floor(I/28)*(1 - Math.floor(I/28)*Math.floor(29/(I + 1))*Math.floor((21 - N)/11));
        var J = year + Math.floor(year/4) + I + 2 - century + Math.floor(century/4);
        J = J - 7*Math.floor(J/7);
        var L = I - J;
        var month = 3 + Math.floor((L + 40)/44);
        var day = L + 28 - 31*Math.floor(month/4);

        return year+"-"+month + "-" + day;
    },
    weeksBetween: function (fromdate, todate) {
        return Math.floor((todate-fromdate)/ 604800000);
    },
    lastEaster: function (date) {
        var currentYear = date.getFullYear();
        var easterS = this.easter (currentYear);
        var easter = new Date(easterS);
        if (easter > date)
            return this.easter(currentYear-1);
        return easterS;
    },
    weeks: function (today) {
        var easter = this.lastEaster(today);
        var weeks = this.weeksBetween(today, new Date(easter));
        return Math.abs(weeks);
    }

};
