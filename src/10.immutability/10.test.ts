import {
    addCompany,
    addNewBooksToUser,
    hairDresser,
    moveUser, removeBook, updateBook, updateCompanyName,
    upgradeUserLaptop,
    UserType,
    UserWithBookType,
    UserWithLaptopType, withCompaniesType
} from "./10";
import {Simulate} from "react-dom/test-utils";


test('reference type test', () => {
    let user: UserType = {
        name: 'Anatoli',
        hair: 32,
        address: {
            title: 'Minsk',
            house: 12
        }
    }

    let awesomeUser = hairDresser(user, 2)

    expect(awesomeUser.hair).toBe(16)
    expect(user.hair).toBe(32)
    expect(awesomeUser.address).toBe(user.address)
})

test('move user', () => {
    let user: UserWithLaptopType = {
        name: 'Anatoli',
        hair: 32,
        address: {
            title: 'Minsk',
            house: 12
        },
        laptop: {
            title: 'ZenBook'
        }
    }

    let movedUser = moveUser(user, 'Kiev')

    expect(user).not.toBe(movedUser)
    expect(user.address).not.toBe(movedUser.address)
    expect(movedUser.address.title).toBe('Kiev')
    expect(user.laptop).toBe(user.laptop)
})

test('upgrade laptope to mackBook', () => {
    let user: UserWithLaptopType = {
        name: 'Anatoli',
        hair: 32,
        address: {
            title: 'Minsk',
            house: 12
        },
        laptop: {
            title: 'ZenBook'
        }
    }

    let UserWithNewLaptop = upgradeUserLaptop(user, 'MacBook')

    expect(user).not.toBe(UserWithNewLaptop)
    expect(user.laptop).not.toBe(UserWithNewLaptop.laptop)
    expect(user.address).toBe(UserWithNewLaptop.address)
    expect(UserWithNewLaptop.laptop.title).toBe('MacBook')
    expect(user.laptop.title).toBe('ZenBook')
})

test('add new books to user', () => {
    let user: UserWithLaptopType & UserWithBookType = {
        name: 'Anatoli',
        hair: 32,
        address: {
            title: 'Minsk',
            house: 12
        },
        laptop: {
            title: 'ZenBook'
        },
        books: ['css', 'html', 'js', 'react']

    }

    let copyUser = addNewBooksToUser(user, 'ts')

    expect(user).not.toBe(copyUser)
    expect(user.laptop).toBe(copyUser.laptop)
    expect(user.address).toBe(copyUser.address)
    expect(user.books).not.toBe(copyUser.books)
    expect(copyUser.books[4]).toBe('ts')

})

test('change js to ts', () => {
    let user: UserWithLaptopType & UserWithBookType = {
        name: 'Anatoli',
        hair: 32,
        address: {
            title: 'Minsk',
            house: 12
        },
        laptop: {
            title: 'ZenBook'
        },
        books: ['css', 'html', 'js', 'react']

    }

    let copyUser = updateBook(user, 'js', 'ts')

    expect(user).not.toBe(copyUser)
    expect(user.laptop).toBe(copyUser.laptop)
    expect(user.address).toBe(copyUser.address)
    expect(user.books).not.toBe(copyUser.books)
    expect(copyUser.books[2]).toBe('ts')

})

test('remove js book', () => {
    let user: UserWithLaptopType & UserWithBookType = {
        name: 'Anatoli',
        hair: 32,
        address: {
            title: 'Minsk',
            house: 12
        },
        laptop: {
            title: 'ZenBook'
        },
        books: ['css', 'html', 'js', 'react']

    }

    let copyUser = removeBook(user, 'js')

    expect(user).not.toBe(copyUser)
    expect(user.laptop).toBe(copyUser.laptop)
    expect(user.address).toBe(copyUser.address)
    expect(user.books).not.toBe(copyUser.books)
    expect(copyUser.books[2]).toBe('react')

})

test('companies', () => {
    let user: UserWithLaptopType & withCompaniesType = {
        name: 'Anatoli',
        hair: 32,
        address: {
            title: 'Minsk',
            house: 12
        },
        laptop: {
            title: 'ZenBook'
        },
        companies: [
            {id: 1, title: 'EPAM'},
            {id: 2, title: 'IT-INCUBATOR'},
        ]

    }

    let comp = addCompany(user, 'GOOGLE')
    expect(comp.companies[2].title).toBe('GOOGLE')
})

test('companies', () => {

    let companies={
        'Dimych':[{id:1,title:'Епам'},{id:2,title:'IT-INCUBATOR'}],
        'Artem':[{id:1,title:'IT-INCUBATOR'}]
    }
    const copy=updateCompanyName(companies,'Dimych',1,'one')
    expect(copy["Dimych"][0].title).toBe('one')
})