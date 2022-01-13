import {CityType} from "../02/02_02";
import {addMoneyBudget} from "./03";
let city: CityType;

beforeEach(() => {
    city = {
        title: "New York",
        houses: [
            {
                buildedAt: 2012, repaired: false,
                address: {number: 100, street: {title: 'White street'}}
            },
            {
                buildedAt: 2008, repaired: false,
                address: {number: 100, street: {title: 'Happy street'}}
            },
            {
                buildedAt: 2020, repaired: false,
                address: {number: 101, street: {title: 'Happy street'}}
            }
        ],
        governmentBuildings: [{
            type: 'HOSPITAL', budget:200000, staffCount:20,
            address:{street:{title:"Central Str" }

            }
        },
            {
                type: 'FIRE-STATION', budget:500000, staffCount:1000,
                address:{street:{title:"South Str" }

                }
            },{
                type: 'HOSPITAL', budget:200000, staffCount:20,
                address:{street:{title:"Central Str" }

                }
            }
        ],
        citizensNumber: 1000000
    }
})

//01. создайте в отдельном файле функцию, чтобы тесты прошли
test('Budget should be changed for HOSPITAL', ()=>{
    addMoneyBudget(city.governmentBuildings[1], -100000);

    expect(city.governmentBuildings[0].budget).toBe(300000)

})

//01. Тесты должны пройти
test('Budget should be changed for FIRE-STATION', ()=>{
    addMoneyBudget(city.governmentBuildings[1], -100000)

    expect(city.governmentBuildings[1].budget).toBe(400000)

})