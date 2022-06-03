import { Food } from "../models/food-model"

describe('Classes Food ',()=>{
    test('food class',()=>{
        const food = new Food('Pollo','Pollo frito',30)

        expect(food.getName()).toEqual('Pollo')
        expect(food.getDescription()).toEqual('Pollo frito')
        expect(food.getPrice()).toBe(30)
    })
})