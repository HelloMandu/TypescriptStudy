{
    type PositionType = {
        x: number;
        y: number;
    }
    interface PositionInterface {
        x: number;
        y: number;
    }

    // declare
    const obj1: PositionType = {
        x: 1,
        y: 1
    }

    const obj2: PositionInterface = {
        x: 1,
        y: 1,
        z: 1
    }

    // implements
    class Pos1 implements PositionType {
        x: number;
        y: number;
    }

    class Pos2 implements PositionInterface {
        x: number;
        y: number;
        z: number;
    }

    // 상속
    interface ZPositionInterface extends PositionInterface {
        z: number;
    }
    type ZPositionType = PositionType & { z: number }

    interface PositionInterface {
        z: number;
    }

    // type PositionType{

    // }

    // Type aliases can use computed properties
    type Person = {
        name: string,
        age: number
    }

    type Name = Person['name']; // string

    type NumberType = number;
    type Direction = 'left' | 'right';
}