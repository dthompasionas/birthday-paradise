import ScrollReveal from "scrollreveal";

import "./CountDown.css";

// adds a 0 in front of the number if a single digit
function formatTime(time) {
  if (time < 10) {
    return "0" + time;
  } else {
    return time;
  }
}

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

    // setting the time variables into the html than adding the formatting
    document.getElementById("days").innerHTML = formatTime(days);
    document.getElementById("hours").innerHTML = formatTime(hours);
    document.getElementById("minutes").innerHTML = formatTime(minutes);
    document.getElementById("seconds").innerHTML = formatTime(seconds);

    if (distance < 0) {
      clearInterval(x);
      document.getElementById("days").innerHTML = "00";
      document.getElementById("hours").innerHTML = "00";
      document.getElementById("minutes").innerHTML = "00";
      document.getElementById("seconds").innerHTML = "00";
    }
  }, 1000);

  // scroll reveal

  const sr = ScrollReveal({
    distance: "65px",
    duration: 2600,
    delay: 450,
    reset: true,
  });

  sr.reveal(".birthday-paradise", { delay: 100, origin: "left" });
  sr.reveal(".countdown-wrapper", { delay: 700, origin: "top" });
  sr.reveal(".mom", { delay: 100, origin: "right" });
  // sr.reveal(".birthday-paradise", { delay: 200, origin: "left" });

  return (
    <>
      <div className="content">
        <div className="title-container">
          <h3 className="mom">Carmen's</h3>
          <h1 className="birthday-paradise">
            Birthday <span>Paradise</span>
          </h1>
        </div>
        <div className="countdown-wrapper">
          <div className="time-container">
            <p id="days"></p>
            <span>Days</span>
          </div>
          <div className="time-container">
            <p id="hours"></p>
            <span>Hours</span>
          </div>
          <div className="time-container">
            <p id="minutes"></p>
            <span>Minutes</span>
          </div>
          <div className="time-container">
            <p id="seconds"></p>
            <span>Seconds</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default CountDown;
