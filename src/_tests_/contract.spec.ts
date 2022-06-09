import { ContractModel, ContractPrime } from "../models/contract-model"

describe('Class Contract Model', () => {
    test('Contract 12 month regular', () => {
        const contract = new ContractModel({
            id: '#001',
            date_init: new Date(2022),
            expiration_date: new Date(2023),
            month: 12,
            monthlyCost: 500
        })

        expect(contract.getId()).toBe('#001')
        expect(contract.getDateInit()).toEqual(new Date(2022))
        expect(contract.getExpirationDate()).toEqual(new Date(2023))
        expect(contract.getMonth()).toBe(12)
        expect(contract.getMonthlyCost()).toBe(500)
    })

    test('Monthly Descount contract prime 24 months',() => {
        const contractPrime = new ContractPrime({
                id: '#001',
                date_init: new Date(2022),
                expiration_date: new Date(2023),
                month: 12,
                monthlyCost: 300
        })
        expect(contractPrime.mounthlyDiscont()).toBe(30)
    })
})