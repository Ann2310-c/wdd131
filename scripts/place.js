// FOOTER
document.querySelector('#currentyear').textContent = new Date().getFullYear();
document.querySelector('#lastModified').textContent = document.lastModified;

// STATIC WEATHER VALUES
const temperature = 10; // °C
const windSpeed = 5; // km/h

// WIND CHILL FUNCTION
function calculateWindChill(temp, speed) {
    return 13.12 + 0.6215 * temp - 11.37 * Math.pow(speed, 0.16) + 0.3965 * temp * Math.pow(speed, 0.16);
}

// DESKTOP
const chill = document.querySelector('#chill');

// MOBILE
const chill2 = document.querySelector('#chill2');

// CONDITIONS
if (temperature <= 10 && windSpeed > 4.8) {
    const result = calculateWindChill(temperature, windSpeed).toFixed(1);
    chill.textContent = `${result} °C`;
    chill2.textContent = `${result} °C`;
} else {
    chill.textContent = 'N/A';
    chill2.textContent = 'N/A';
}
