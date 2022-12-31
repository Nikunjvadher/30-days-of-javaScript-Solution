// 16 -  Create a human readable time format using the Date time object. The hour and the minute should be all the time two digits(7 hours should be 07 and 5 minutes should be 05 )
// YYYY-MM-DD HH:mm eg. 2020-01-02 07:05
function get(data){
    if(data < 10){
        return data = "0" + data;
    } else {
        return data
    }
}
var now = new Date("October 13, 2014 11:00:00");
const a = `${now.getFullYear()}-${now.getMonth()}-${now.getDay()} ${get(now.getHours())}:${get(now.getMinutes())}`;
console.log(a);
