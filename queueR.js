window.onload = function () { 

	function qRefresh() {
		document.querySelector("#split-left > div > div > div > div > div.slds-page-header--object-home.slds-page-header_joined.slds-page-header_bleed.slds-page-header.slds-shrink-none.test-headerRegion.forceListViewManagerHeader > div:nth-child(2) > div:nth-child(3) > force-list-view-manager-button-bar > div > div:nth-child(1) > lightning-button-icon > button").click();
	}

	setInterval(function() {
		qRefresh()}, 30000)

 }