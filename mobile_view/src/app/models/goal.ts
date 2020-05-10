export interface Goal {
    name: string;
    wonValue: number;
    currentValue: number;
    expireDate?: Date;
    info?: string;
}

export function createDefaultGoal(): Goal {
    return {
        name: '',
        wonValue: null,
        currentValue: 0,
        expireDate: null,
        info: '',
    };
}
