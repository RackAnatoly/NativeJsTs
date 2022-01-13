import {StudentType} from "../02/02"
import {GovernmentBuildingType} from "../02/02_02";

export const sum = (a: number, b: number) => {
    return a + b;
}

export const addSkill = (student: StudentType, skill: string) => {
    student.technologies.push({
        id: new Date().getTime(),
        title: skill
    })
};

export function makeStudentAvtive(s: StudentType) {
    s.isActive = true;
}

export const doesTheStudentLiveInCity = (s: StudentType, cityName: string) => {
    return s.address.city.title === cityName;
}

export const addMoneyBudget = (Building: GovernmentBuildingType, budget: number) => {
    Building.budget += budget;
}