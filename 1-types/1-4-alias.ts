{
    /**
     * Type Aliases
     */
    type Text = string;
    const name: Text = 'sungmin';
    const address: Text = 'test';
    type Num = number;
    type Student = {
        name: string,
        age: number
    };
    const student: Student = {
        name: 'sungmin', 
        age: 26
    };

    /**
     * String Literal Types
     */
    type Name = 'name';
    let sungminName: Name;
    sungminName = 'name';
    // sungminName = 'test'; // error
}