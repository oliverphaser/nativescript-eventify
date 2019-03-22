var Notify = require("nativescript-notify").Notify;
var notify = new Notify();

describe("greet function", function() {
    it("exists", function() {
        expect(notify.greet).toBeDefined();
    });

    it("returns a string", function() {
        expect(notify.greet()).toEqual("Hello, NS");
    });
});