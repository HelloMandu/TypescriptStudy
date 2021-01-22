{
    /**
     * Type Inference
     */
    // 타입 추론이 가능하지만 자주 사용하지 말 것
    let text = 'hello';
    // text = 1; // error
    function print(message = 'hello'){
        console.log(message);
    }
    print('hello');

    function add(x: number, y: number){
        return x + y;
    }
    const result = add(1, 2);
}