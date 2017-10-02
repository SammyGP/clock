window.addEventListener("load", function(){


	const secondsHand = document.querySelector(".second");
	const minutesHand = document.querySelector(".minute");
	const hoursHand = document.querySelector(".hour");
	const clockBody = document.querySelector(".clock");


	function setDate() {
		const now = new Date();
		const seconds = now.getSeconds();
		const minutes = now.getMinutes();
		const hours = now.getHours();

		const secondsDegree = ((seconds / 60) * 360) + 90 // gives the seconds a hundred base (+ 90 to offset the initial 90 degree style)
		secondsHand.style.transform = "rotate(" + secondsDegree + "deg)";
		secondsHand.innerHTML = "<p>Second: " + seconds + "</p>";

		const minutesDegree = ((minutes / 60) * 360) + 90
		minutesHand.style.transform = "rotate(" + minutesDegree + "deg)";
		minutesHand.innerHTML = "<p>Minute: " + minutes + "</p>";

		const hoursDegree = ((hours / 12) * 360) + 90
		hoursHand.style.transform = "rotate(" + hoursDegree + "deg)";
		hoursHand.innerHTML = "<p>Hour: " + hours + "</p>";


		// random color
		const red = Math.floor(Math.random() * (250 - 0));
		const green = Math.floor(Math.random() * (250 - 0));
		const blue = Math.floor(Math.random() * (250 - 0));
		clockBody.style.backgroundColor = `rgb(${red},${green},${blue})`;
		secondsHand.style.backgroundColor = `rgb(${red},${green},${blue})`;
		minutesHand.style.backgroundColor = `rgb(${red},${green},${blue})`;
		hoursHand.style.backgroundColor = `rgb(${red},${green},${blue})`;
	}

	// calls setDate every 1sec and updates the css hands
	setInterval(setDate, 1000);
})