export type ManType={
    name:string
    age:number
}

const people:Array<ManType>=[
    {name:"Andrew Ivanov", age:33},
    {name:"Alexander Petrov", age:24},
    {name:"Dmitry Sidorod", age:18},
]

const message = people.map(man=> `Hello ${man.name.split(' ')[0]}.Welcome`)