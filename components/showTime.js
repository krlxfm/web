import Link from 'next/link'
export default function ShowTime({
  startTime,
  endTime,
  showDayOfWeek,
  showDate,
  showTimeZone=false,
  oneTime=false,
  s,
}){
  var d = startTime
  var days = ['Sundays', 'Mondays', 'Tuesdays', 'Wednesdays', 'Thursdays', 'Fridays', 'Saturdays'];
  var dayz = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  startTime = startTime?.substring(0,startTime.indexOf("+"))+".000Z"
  endTime = endTime?.substring(0,endTime.indexOf("+"))+".000Z"
  var localStartTime = new Date(startTime)
  var localEndTime = new Date(endTime).toString()
  function tConvert (time) {
    // Check correct time format and split into components
    time = time.toString ().match (/^([01]\d|2[0-3])(:)([0-5]\d)(:[0-5]\d)?$/) || [time];

    if (time.length > 1) { // If time format correct
      time = time.slice (1);  // Remove full string match value
      time[5] = +time[0] < 12 ? 'AM' : 'PM'; // Set AM/PM
      time[0] = +time[0] % 12 || 12; // Adjust hours
    }
    return time.join (''); // return adjusted time or original string
  }
  var date = " "

  if(showDayOfWeek){
    if(s) {
      date = days[localStartTime.getDay()] + date
    }
    else{
      date = dayz[localStartTime.getDay()] + date
    }
  }
  localStartTime = localStartTime.toString()
  if(oneTime) {
    date = ""
    showDate = true;
  }
  if(showDate) {
    date = date + ("JanFebMarAprMayJunJulAugSepOctNovDec".indexOf(localStartTime.substring(4,7)) / 3 + 1) + "." + localStartTime.substring(8,localStartTime.indexOf("202")-1) + "." +localStartTime.substring(localStartTime.indexOf("202")+2,localStartTime.indexOf("202")+4) + " "
  }
  startTime = tConvert(localStartTime.substring(localStartTime.indexOf("202")+5,localStartTime.indexOf("202")+10))
  endTime = tConvert(localEndTime.substring(localEndTime.indexOf("202")+5,localEndTime.indexOf("202")+10))
  var timezone = ""
  if(showTimeZone) {
    timezone = " " + localStartTime.substring(localStartTime.indexOf("("))
  }
    return (
      <div>
      {date} {startTime} - {endTime} {timezone}
    </div>
    )
}
