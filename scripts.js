window.addEventListener("load", function(){


	const secondsHand = document.querySelector(".second");
	const minutesHand = document.querySelector(".minute");
	const hoursHand = document.querySelector(".hour");

	function setDate() {
		const now = new Date();
		const seconds = now.getSeconds();
		const minutes = now.getMinutes();
		const hours = now.getHours();

		const secondsDegree = ((seconds / 60) * 360) + 90 // gives the seconds a hundred base (+ 90 to offset the initial 90 degree style)
		secondsHand.style.transform = "rotate(" + secondsDegree + "deg)";

		const minutesDegree = ((minutes / 60) * 360) + 90
		minutesHand.style.transform = "rotate(" + minutesDegree + "deg)";

		const hoursDegree = ((hours / 12) * 360) + 90
		hoursHand.style.transform = "rotate(" + hoursDegree + "deg)";
	}

	setInterval(setDate, 1000);
})