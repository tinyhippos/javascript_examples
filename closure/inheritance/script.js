var nameSpace = {};

// parent class
(nameSpace.SomeOtherClass = function(arg1, arg2) {

        var _privateProperty;

        // publilc properties. can be dynamically loaded as shown below.
        this.foo = "bar";

});

// child class
nameSpace.SomeClass = function(arg1, arg2) {

        // private and public properties
        var _privateProperty,
            _publicAPI = {
                foo: "bar2",
                getFoo: function getFoo() {
                    // foo => "bar2"
                    return this.foo;
                }
        };

        // loads public methods
        function classConstructor(){

            // load in public properties
            for (var property in _publicAPI) {
                if(Object.prototype.hasOwnProperty.call(_publicAPI, property)) {
                    this[property] = _publicAPI[property];
                }
            }

        }

        // inherit from parent class
        classConstructor.prototype = new nameSpace.SomeOtherClass(arg1, arg2);

        // return new instance
        //noinspection JSLowercasedConstructorCall
        return new classConstructor();

};

// the "new" operator is not required but has no ill effects when used
var obj = nameSpace.SomeClass("arg1", "arg2");