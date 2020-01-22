///<reference path="public.ts"/>
interface A {
    a: Number,
    b: String
}
let obj: A = { a: 1, b: 'hello' }

class Person<T>{
    who: T;
    constructor(who: T) {
        this.who = who
    }
    say(code: T): String {
        return this.who + ':I AM' + code
    }
}
let a = new Person<string>('xxx')
a.say('helo')

let fruits: Food.Fruits
