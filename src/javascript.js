function updateTime() {
  /// New York
  let losAngeles = document.querySelector("#los-angeles");
  let losAngelesDate = losAngeles.querySelector(".date");
  let losAngelesTime = losAngeles.querySelector(".time");
  losAngelesDate.innerHTML = `${moment()
    .tz("America/Los_Angeles")
    .format("ddd, MMM Do, YYYY")}`;
  losAngelesTime.innerHTML = `${moment()
    .tz("America/Los_Angeles")
    .format("h:mm:ss [<small>]a[</small>]")}`;

  /// London
  let london = document.querySelector("#london");
  let londonDate = london.querySelector(".date");
  let londonTime = london.querySelector(".time");
  londonDate.innerHTML = `${moment()
    .tz("Europe/London")
    .format("ddd, MMM Do, YYYY")}`;
  londonTime.innerHTML = `${moment()
    .tz("Europe/London")
    .format("h:mm:ss [<small>]a[</small>]")}`;

  /// Tokyo
  let tokyo = document.querySelector("#tokyo");
  let tokyoDate = tokyo.querySelector(".date");
  let tokyoTime = tokyo.querySelector(".time");
  tokyoDate.innerHTML = `${moment()
    .tz("Asia/Tokyo")
    .format("ddd, MMM Do, YYYY")}`;
  tokyoTime.innerHTML = `${moment()
    .tz("Asia/Tokyo")
    .format("h:mm:ss [<small>]a[</small>]")}`;
}

updateTime();
setInterval(updateTime, 1000);

function updateCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }
  let cityName = cityTimeZone.split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `        
    <div class="city">
        <div>
            <h2>${cityName}</h2>
            <div class="date">${cityTime.format("ddd, MMM Do, YYYY")}</div>
        </div>
        <div class="time">${cityTime.format(
          "h:mm:ss [<small>]a[</small>]"
        )}</div>
    </div>`;
}

let citiesSelect = document.querySelector("#city");
citiesSelect.addEventListener("change", updateCity);
