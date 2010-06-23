var namespace = {};

(namespace.someClass = function() {
    var _privateProperty = "some value";

    function _privateMethod() {
        //perform some stuff
    }

    return {
        publicProperty: "some value",

        publicMethod: function publicMethod() {
            //perform some stuff
        }
    }
}());
