{
    const obj = {
        name: 'sungmin'
    };
    console.log(obj.name);
    console.log(obj['name']);

    type Animal = {
        name: string;
        age: number;
        gender: 'male' | 'female';
    };

    type Name = Animal['name'];
    const text: Name = 'sungmin';

    type Gender = Animal['gender']; // 'male' | 'female'

    type Keys = keyof Animal; // 'name' | 'age' | 'gender'
    const key: Keys = 'gender';

    type Person = {
        name: string;
        gender: Animal['gender'];
    };

    const person: Person = {
        name: 'sungmin',
        gender: 'male'
    };
}