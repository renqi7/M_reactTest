///<reference path="public.ts"/>
var obj = { a: 1, b: 'hello' };
var Person = /** @class */ (function () {
    function Person(who) {
        this.who = who;
    }
    Person.prototype.say = function (code) {
        return this.who + ':I AM' + code;
    };
    return Person;
}());
var a = new Person('xxx');
a.say('helo');
var fruits;
