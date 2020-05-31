export interface User {
    name: string;
    familyToken: string;
    walletsGuids: string[];
    isAuthorized: boolean;
}


export function createNewUser() {
    return {
        name: 'Ivan',
        familyToken: null,
        walletsGuids: [],
        isAuthorized: false,
    };
}
