import * as moment from 'moment';

export class WalletConfig {
    name: string;
    plannedBudgetValue: number;
    plannedBudgetExpireDay: Date;

    constructor(name: string, plannedBudgetValue: number, plannedBudgetExpireDay: Date) {
    }
}

export function createNewWalletConfig(): any {
    return new WalletConfig('New Wallet', 0, moment().toDate());
}
