export type UserType = {
    name: string,
    hair: number,
    address: { title: string, house: number }
}
export type LaptopType = {
    title: string
}
export type UserWithLaptopType = UserType & { laptop: LaptopType }
export type UserWithBookType = UserType & {
    books: Array<string>
}
export type withCompaniesType = {
    companies: Array<{ id: number, title: string }>
}

export function hairDresser(u: UserType, power: number) {
    const copy = {...u}
    copy.hair = u.hair / power
    return copy;
}

export function moveUser(u: UserWithLaptopType, city: string) {
    const copy = {...u, address: {...u.address, title: city}}
    // copy.address = {...copy.address, title: city}
    return copy;
}

export function upgradeUserLaptop(u: UserWithLaptopType, name: string) {
    return {...u, laptop: {...u.laptop, title: name}}
}

export function addNewBooksToUser(u: UserWithLaptopType & UserWithBookType, title: string) {
    return {...u, books: [...u.books, title]}

}

export function updateBook(u: UserWithLaptopType & UserWithBookType, a: string, b: string) {
// return {...u,books:a==='js'?[...u.books,u[2]=b]:u}
    return {...u, books: [...u.books.map(m => m === a ? b : m)]}
}

export function removeBook(u: UserWithLaptopType & UserWithBookType, book: string) {
    return {...u, books: u.books.filter(b => b !== book)}
}

export function addCompany(u: UserWithLaptopType & withCompaniesType, title: string) {
    const newCompany = {id: 3, title: title};
    return {...u, companies: [...u.companies, newCompany]}
}

export function updateCompanyName(
    companies: any,
    name: string,
    id: number,
    newCompany: string
) {
return {...companies,[name]:companies[name].map((m:any)=>m.id===id?{...m,title:newCompany}:m)}
}