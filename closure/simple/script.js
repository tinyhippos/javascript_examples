function calledFunction(passedFunction) {
    passedFunction("newValue");
}


function clickMe() {
    var value = "originalValue";

    alert(value);

    calledFunction(function(externalValue) {
        value = externalValue;
    });

    alert(value);
}



