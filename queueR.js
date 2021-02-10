window.onload = function () { 

	function qRefresh() {
		document.querySelector('#split-left').querySelector('button[name="refreshButton"]').click();
	}

	setInterval(function() {
		qRefresh()}, 30000)

 }