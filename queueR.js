window.onload = function () { 

	function qRefresh() {
		document.querySelector('#split-left').querySelectorAll('button[name="refreshButton"]').click();
	}

	setInterval(function() {
		qRefresh()}, 30000)

 }
