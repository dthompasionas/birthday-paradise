function CountDown() {
  // Set the date we're counting down to
  const countDownDate = new Date("Sept 18, 2023 04:30:00").getTime();

  // Update the count down every 1 second
  let x = setInterval(function () {
    // gets todays date
    let now = new Date().getTime();
    // the distance between now and the count down date
    let distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // setting the time variables into the html
    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;

    if (distance < 0) {
      clearInterval(x);
      document.getElementById("days").innerHTML = "00";
      document.getElementById("hours").innerHTML = "00";
      document.getElementById("minutes").innerHTML = "00";
      document.getElementById("seconds").innerHTML = "00";
    }
  }, 1000);
  return (
    <>
      <div className="content">
        <h1>Carmens Birthday Paradise</h1>
        <div className="countdown-wrapper">
          <div className="days-container">
            <p id="days"></p>
            <span>Days</span>
          </div>
          <div className="hour-container">
            <p id="hours"></p>
            <span>Hours</span>
          </div>
          <div className="minute-container">
            <p id="minutes"></p>
            <span>Minutes</span>
          </div>
          <div className="second-container">
            <p id="seconds"></p>
            <span>Seconds</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default CountDown;
