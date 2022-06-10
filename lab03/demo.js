var dayOfYear = function (date, day, month, year, isLeap) {
    var _a;
    if (date === void 0) { date = null; }
    if (day === void 0) { day = null; }
    if (month === void 0) { month = null; }
    if (year === void 0) { year = null; }
    if (isLeap === void 0) { isLeap = null; }
    var d;
    var m;
    var y;
    var l;
    if (date != null) {
        _a = date.split(".").map(function (s) { return +s; }), d = _a[0], m = _a[1], y = _a[2];
    }
    if (day != null) {
        d = day;
    }
    if (month != null) {
        if (typeof month == "number") {
            m = month;
        }
        else {
            var monthToNum = {
                "January": 1,
                "February": 2,
                "March": 3,
                "April": 4,
                "May": 5,
                "June": 6,
                "July": 7,
                "August": 8,
                "September": 9,
                "October": 10,
                "November": 11,
                "December": 12
            };
            m = monthToNum[month];
        }
        if (year != null) {
            l = year % 4 == 0 && year % 100 != 0 && year % 400 == 0;
        }
        if (isLeap != null) {
            l = isLeap;
        }
        var error = "błędna data";
        if (d >= 32)
            return error;
        if (m in [4, 6, 9, 11] && d >= 31)
            return error;
        if (m == 2 && l && d >= 30)
            return error;
        if (m == 2 && !l && d >= 29)
            return error;
        //...
    }
};
dayOfYear("16.03.2000");
