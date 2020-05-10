import {Guid} from 'guid-typescript';

export interface Payment {
    guid: string;
    value: number;
    payDate: string;
    payTime: string;
    category?: PaymentCategory;
    note?: string;
}

export function createNewPayment(value: number, note?: string, category?: PaymentCategory): Payment {
    return {
        guid: Guid.create().toString(),
        value: value,
        payDate: new Date().toLocaleDateString(),
        payTime: new Date().toLocaleTimeString(),
    };
}
