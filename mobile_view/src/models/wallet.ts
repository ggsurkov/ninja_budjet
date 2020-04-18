interface Wallet {
    walletValue: number;
    walletHistory: WalletHistory;
    walletExpiredDate: Date;
    walletInfo: WalletInfo;
    name: string;
    guid: string;
}
