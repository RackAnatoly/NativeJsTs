function isncreaseAge(u: UserType) {
    u.age++
}

type UserType = {
    name: string,
    age: number
}


test('big test', () => {

    let user: any = [
        {
            name: 'Anatoli',
            age: 32,
        },
        {
            name: 'Tatsi',
            age: 28,
        }
    ]

    let admins = user

    admins.push({
        name: 'Anatoli',
        age: 32
    })


    expect(user[2]).toBe({
        name: 'Anatol',
        age: 32
    })

})