import {createNewWalletConfig} from '../models/wallet-config';
import * as moment from 'moment';

enum walletConfigParamLabelEnum {
    plannedBudgetValue = 'Planned budget',
    plannedBudgetExpireDay = 'Planned expire date',
    name = 'Wallet name'
}

function walletConfigParamValue(key: string): any {
    let value: any;
    switch (key) {
        case walletConfigParamLabelEnum.name:
            value = 'Wallet Name';
            break;
        case walletConfigParamLabelEnum.plannedBudgetValue:
            value = 0;
            break;
        case walletConfigParamLabelEnum.plannedBudgetExpireDay:
            value = moment().toDate();
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
        walletConfigKeys.push({label: walletConfigParamLabelEnum[key], paramName: key, value: walletConfigParamValue(key)});
    }
    return walletConfigKeys;
}
