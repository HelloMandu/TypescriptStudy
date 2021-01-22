{
    /**
     * Type Assertions
     */
    // 자주 사용하지 않음
    function jsStrFunc(): any{
        return 'hello';
    }

    const result = jsStrFunc();
    console.log((result as string).length);
    console.log((<string>result).length);

    const wrong: any = 5;
    // console.log((wrong as Array<number>).push(1)); // error

    function findNumbers(): number[] | undefined{
        return undefined;
    }
    const numbers = findNumbers()!; // !를 붙이면 되지만 가능하면 안쓰는게 좋음 (필요한 경우가 있음)
    numbers.push(2);
}