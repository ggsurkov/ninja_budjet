export interface WalletConfig {
    title: string;
    plannedBudgetValue: number;
    plannedBudgetExpireDay: Date;
}

export function createNewWalletConfig(): any {
    return {title: 'New Wallet', plannedBudgetValue: 0, plannedBudgetExpireDay: new Date()};
}
