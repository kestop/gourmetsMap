// Display url parameters
"use strict";
addEventListener("load", searchResult);

function searchDB(argument) {
    // search the DB
    return true;
}

function searchResult() {
    var h1 = document.querySelector("#result");
    var p = document.querySelector("#p");
    var message = h1.firstChild;
    var url = location.href;
    var parts = url.split("?");
    if (parts.length < 2) {
        message.data = "No parameters found.";
        return;
    }
    var paramstring = parts[1];

    var content = "";
    var parts2 = paramstring.split("=");
    content += "You are searching : ";
    content += parts2[1];

    if(searchDB) {
        p.innerHTML = "Success!";
    }else {
        p.innerHTML = "No results found.";
    }

    h1.innerHTML = content;
}