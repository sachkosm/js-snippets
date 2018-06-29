

<body onload="updateClock(); setInterval('updateClock()', 1000 )">

  <span id="date" style="font-family: arial black; color: green; font-size: medium; font-weight: bold; text-transform: uppercase; margin: 1px; border-collapse: collapse; border: 1px solid black; padding: 4px;">id="clock"</span> &nbsp;&nbsp;&nbsp;&nbsp;
  <span style="font-family: arial black; color: green; font-size: medium; font-weight: bold; text-transform: uppercase; margin: 1px; border-collapse: collapse; border: 1px solid black; padding: 4px;">NYC&nbsp;</span>
  <span id="clock" style="font-family: arial black; color: orange; font-size: medium; font-weight: bold; text-transform: uppercase; margin: 1px; border-collapse: collapse; border: 1px solid black; background-color: darkslategray; padding: 4px;">&nbsp;</span>  &nbsp;&nbsp;&nbsp;&nbsp;
  <span style="font-family: arial black; color: green; font-size: medium; font-weight: bold; text-transform: uppercase; margin: 1px; border-collapse: collapse; border: 1px solid black; padding: 4px;">BG&nbsp;</span>
  <span id="bgclock" style="font-family: arial black; color: orange; font-size: medium; font-weight: bold; text-transform: uppercase; margin: 1px; border-collapse: collapse; border: 1px solid black; background-color: darkslategray; padding: 4px;">&nbsp;</span>

</body>



<script>


function updateClock ( )
{
  var currentTime = new Date ( );

  var currentHours = currentTime.getHours ( );
  var currentMinutes = currentTime.getMinutes ( );
  var currentSeconds = currentTime.getSeconds ( );
  var currentDateString = currentTime.getMonth() + '/' + currentTime.getDate() + '/' + (currentTime.getYear()+1900);

  // Pad the minutes and seconds with leading zeros, if required
  currentMinutes = ( currentMinutes < 10 ? "0" : "" ) + currentMinutes;
  currentSeconds = ( currentSeconds < 10 ? "0" : "" ) + currentSeconds;

  // Choose either "AM" or "PM" as appropriate
  var timeOfDay = ( currentHours < 12 ) ? "AM" : "PM";

  // Convert the hours component to 12-hour format if needed
  currentHours = ( currentHours > 12 ) ? currentHours - 12 : currentHours;

  // Convert an hours component of "0" to "12"
  currentHours = ( currentHours == 0 ) ? 12 : currentHours;

  // Compose the string for display
  var currentTimeString = currentHours + ":" + currentMinutes + ":" + currentSeconds + " " + timeOfDay;
  var currentTimeStringBG = currentHours+7 + ":" + currentMinutes + ":" + currentSeconds + " " + timeOfDay;
  // Update the time display
  document.getElementById("clock").firstChild.nodeValue = currentTimeString;
  document.getElementById("bgclock").firstChild.nodeValue = currentTimeStringBG;
  document.getElementById("date").firstChild.nodeValue = currentDateString;
};

// -->
</script>
