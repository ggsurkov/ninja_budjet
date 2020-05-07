export interface WalletConfig {
    name: string;
    plannedBudgetValue: number;
    plannedBudgetExpireDay: Date;
}

export function createNewWalletConfig(): any {
    return {name: 'New Wallet', plannedBudgetValue: 0, plannedBudgetExpireDay: new Date()};
}
