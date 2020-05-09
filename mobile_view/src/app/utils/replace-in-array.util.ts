export function replaceInArrayByParam(array: any[], target: any, param: any): any[] {
    array.forEach((element, index) => {
        if (element[param] === target[param]) {
            array[index] = target;
        }
    });
    return array;
}
