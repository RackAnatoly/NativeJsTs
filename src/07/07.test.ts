// test("", ()=>{
//     const props={
//         name:'Dimych',
//         age:32,
//         lessons:[{title:'1'},{title:'2'}],
//         address: {
//             street:{
//                 title:'Kachana street'
//             }
//         }
//     }
//     // const age=props.age
//     // const lessons=props.lessons
//     const {age,lessons}=props
//
//     expect(age).toBe(32)
//     expect(lessons.length).toBe(2)
//
// })

const props={
    name:'Dimych',
    age:32,
    lessons:[{title:'1'},{title:'2'},{title:'2'}],
    address: {
        street:{
            title:'Kachana street'
        }
    }}
test("", ()=>{
const [ls1,...restLessons]=props.lessons;

expect(restLessons.length).toBe(2)

})
