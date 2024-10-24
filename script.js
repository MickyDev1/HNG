// JavaScript to display current time in UTC
const currentTimeUTC = document.getElementById('time');

function updateTime() {
    const now = new Date();
    const options = { weekday: 'long', hour: 'numeric', minute: 'numeric', second: 'numeric', timeZone: 'UTC' };
    const formattedTime = now.toLocaleString('en-US', options);
    currentTimeUTC.textContent = formattedTime;
}

updateTime(); // Initial call
setInterval(updateTime, 1000); // Update time every second
