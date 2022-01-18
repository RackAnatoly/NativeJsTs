import {ManType} from "./05";

let people: Array<ManType> = [];


beforeEach(() => {
    people = [
        {name: "Andrew Ivanov", age: 33},
        {name: "Alexander Petrov", age: 24},
        {name: "Dmitry Sidorod", age: 18},
    ]

})

test('greeting messages', ()=>{
    const message = people.map(man=> `Hello ${man.name.split(' ')[0]}`)
expect(message[0]).toBe('Hello Andrew')
})
