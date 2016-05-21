"use strict";


function submitform() {
	if(document.querySelector("#regForm").onsubmit()) {
		
		document.querySelector("#regForm").submit();
	}
}

