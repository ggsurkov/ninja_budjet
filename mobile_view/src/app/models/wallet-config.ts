export interface WalletConfig {
    title: string;
    plannedBudgetValue: number;
    plannedBudgetExpireDay: string;
}

export function createNewWalletConfig(): any {
    return {title: 'New Wallet', plannedBudgetValue: null, plannedBudgetExpireDay: null};
}
