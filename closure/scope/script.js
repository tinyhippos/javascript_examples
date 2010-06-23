function addButtonsWithHandlersBad(numOfButtons) {
    var i, button;

    for(i = 0; i < numOfButtons; i++) {
        button = document.createElement("button");
        button.innerText = "Button " + i;
        button.onclick = function() {
            alert("You just clicked Button " + i);
        };

        document.body.appendChild(button);
    }
}

function addButtonsWithHandlersGood(numOfButtons) {
    var i, button;

    for(i = 0; i < numOfButtons; i++) {
        button = document.createElement("button");
        button.innerText = "Button " + i;
        button.onclick = (function(x) {
            return function(){
                alert("You just clicked Button " + x);
            };
        }(i));

        document.body.appendChild(button);
    }
}