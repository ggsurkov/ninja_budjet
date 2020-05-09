export interface User {
    name: string;
    familyToken: string;
    walletsGuids: string[];
}


export function createNewUser() {
    return {
        name: 'Ivan',
        familyToken: null,
        walletsGuids: []
    };
}
