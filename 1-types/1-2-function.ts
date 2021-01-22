{
    // function jsAdd(num1, num2){
    //     return num1 + num2;
    // }

    // function tsAdd(num1: number, num2: number): number{
    //     return num1 + num2;
    // }

    // function jsFetchNum(id){
    //     // todo
    //     return new Promise((resolve, reject) => resolve(100));
    // }

    // function tsFetchNum(id: string): Promise<number>{
    //     // todo
    //     return new Promise((resolve, reject) => resolve(100));
    // }

    function printName(firstName: string, lastName?: string){
        console.log(firstName);
        console.log(lastName);
    }
    printName('sungmin', 'jo');
    printName('sungmin');
    printName('sungmin', undefined);

    function printMessage(message: string = 'default message'){
        console.log(message);
    }
    printMessage();

    function addNumbers(...numbers: number[]): number{
        return numbers.reduce((prev, cur) => prev + cur);
    }
    console.log(addNumbers(1, 2));
    console.log(addNumbers(1, 2, 3));
    console.log(addNumbers(1, 2, 3, 4));
}