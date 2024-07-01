
function checkSpeed() {
    let speed = prompt("Enter the speed of the car (km/h):");
    speed = parseInt(speed, 10);

    if (isNaN(speed) || speed < 0) {
        alert("Invalid input! Please enter a valid speed.");
        return;
    }

    const speedLimit = 70;
    const kmPerDemeritPoint = 5;

    if (speed <= speedLimit) {
        alert("Ok");
    } else {
        const demeritPoints = Math.floor((speed - speedLimit) / kmPerDemeritPoint);

        if (demeritPoints > 12) {
            alert("License suspended");
        } else {
            alert("Points: " + demeritPoints);
        }
    }
}

checkSpeed();
