{
    const numbers: number[] = [1, 2]; // 선호
    const numbers2: Array<number> = [1, 2, 3];

    function printArrau(fruits: readonly string[]): void{

    }
    // function printArrau(fruits: readonly Array<string>): void{ // 안댐
        
    // }
    
    // Tuple -> interface, typa alias, class로 쓸것
    let student: [string, number];
    student = ['name', 123];
}