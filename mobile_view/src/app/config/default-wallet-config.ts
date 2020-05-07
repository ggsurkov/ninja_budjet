import {createNewWalletConfig} from '../models/wallet-config';

const WalletConfigParamLabelMap = {
    plannedBudgetValue: 'Planned budget',
    plannedBudgetExpireDay: 'Planned expire date',
    name: 'Wallet name'
};

export enum WalletConfigParamEnum {
    plannedBudgetValue = 'plannedBudgetValue',
    plannedBudgetExpireDay = 'plannedBudgetExpireDay',
    name = 'name'
}

function walletConfigParamValue(key: string): any {
    let value: any;
    Object.getOwnPropertyNames(WalletConfigParamLabelMap);
    switch (key) {
        case WalletConfigParamEnum.name:
            value = 'New Wallet';
            break;
        case WalletConfigParamEnum.plannedBudgetValue:
            value = 0;
            break;
        case WalletConfigParamEnum.plannedBudgetExpireDay:
            value = new Date();
            break;
        default:
            value = null;
            break;
    }
    return value;
}

export interface WalletConfigKeyI {
    label: string;
    paramName: string;
    value: any;
}

export function getDefaultWalletConfigKeys(): WalletConfigKeyI[] {
    const newWalletConfig = createNewWalletConfig();
    const walletConfigKeys: WalletConfigKeyI[] = [];
    for (const key of Object.keys(newWalletConfig)) {
        walletConfigKeys.push(
            {
                label: WalletConfigParamLabelMap[key],
                paramName: key,
                value: walletConfigParamValue(key),
            }
        );
    }
    return walletConfigKeys;
}
