
function getRandom() {
    // return Promise.resolve(Math.random());
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            // reject('some error')
            resolve(Math.random())
        }, 2000)

    })

    return promise;
}

let a=1;



//
// getRandom().then(n => console.log(n))
// getRandom().then(n => console.log(n))

// let a = 0;
// let b = () => {
//     setInterval(() => {
//         while (a < 3) {
//             a++;
//             console.log(a)
//         }
//     }, 1000);
// }
// b();

function wait(ms:number){
    return new Promise<void>((res)=> {
        setTimeout(()=>{res()},ms)
    })
}

async function run(){
    await wait(1000)
    console.log(1)
    await wait(1000)
    console.log(2)
    await wait(1000)
    console.log(3)

}