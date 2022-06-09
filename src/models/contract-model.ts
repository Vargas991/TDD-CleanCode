import { IContract } from "../interfaces/IContract";

export class ContractModel {
    constructor( public iContract: IContract){
        Object.assign(this,iContract)
    }

    getId (): string {
        return this.iContract.id
    }
    getDateInit (): Date {
        return this.iContract.date_init
    }

    getExpirationDate (): Date {
        return this.iContract.expiration_date
    }
    getMonth () : number {
        return this.iContract.month
    }
    getMonthlyCost () : number {
        return this.iContract.monthlyCost
    }
}

export class ContractPrime extends ContractModel {
    mounthlyDiscont(): number {
        return  this.getMonthlyCost() * 0.10
    }
}