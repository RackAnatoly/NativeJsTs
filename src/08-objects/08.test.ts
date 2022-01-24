let users: any;

beforeEach(() => {
    let users = {
        '101': {id: 101, name: 'Dimych'},
        '323232': {id: 323232, name: 'Natasha'},
        '1212': {id: 1212, name: 'Valera'},
        '1': {id: 1, name: 'Katya'},
    }

})

test("", () => {
    users['1'].name = 'Tolya'

    expect(users['1'].name).toBe('Tolya');
})