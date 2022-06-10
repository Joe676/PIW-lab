const dayOfYear = (
    date:string|null = null,
    day:number|null = null,
    month:number|string|null = null,
    year:number|null = null,
    isLeap:boolean|null = null
):number|string => {
    let d:number;
    let m:number;
    let y:number;
    let l:boolean;

    if(date != null){
        [d, m, y] = date.split(".").map(s => +s);
    }
    if(day != null){
        d = day;
    }
    if(month != null){
        if(typeof month == "number"){
            m = month;
        }
        else{
            const monthToNum = {
                "January":1,
                "February":2,
                "March":3,
                "April":4,
                "May":5,
                "June":6,
                "July":7,
                "August":8,
                "September":9,
                "October":10,
                "November":11,
                "December":12
            };

            m = monthToNum[month];
        }
        if(year != null){
            l = year % 4 == 0 && year % 100 != 0 && year % 400 == 0;
        }
        if(isLeap != null){
            l = isLeap;
        }
        const error:string = "błędna data";
        if(d >= 32) return error;
        if(m in [4, 6, 9, 11] && d >= 31) return error;
        if(m == 2 && l && d >= 30) return error;
        if(m == 2 && !l && d >= 29) return error;

        //...
    }
}

dayOfYear("16.03.2000");