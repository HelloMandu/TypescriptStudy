{
    interface Employee{
        pay(): void;
    }

    class FullTimeEmployee implements Employee{
        pay(){
            console.log('full time');
        }
        workFullTime(){

        }
    }
    class PartTimeEmployee implements Employee{
        pay(){
            console.log('part time');
        }
        workPartTime(){
            
        }
    }

    // 세부적인 타입을 인자로 받아서 추상적인 타입으로 다시 리턴하는 함수는 좋지 않다
    function payBad(employee: Employee): Employee{
        employee.pay();
        return employee;
    }

    function pay<T extends Employee>(employee: T): T{
        employee.pay();
        return employee;
    }

    const sungmin = new FullTimeEmployee();
    const sungmin2 = new PartTimeEmployee();
    sungmin.workFullTime();
    sungmin2.workPartTime();
    const sungminAfterPay = pay(sungmin); //FullTimeEmployee -> Employee
    const sungmin2AfterPay = pay(sungmin2);

    function getValue<T, K extends keyof T>(obj: T, key: K): T[K]{
        return obj[key];
    }

    const obj = {
        name: 'sungmin',
        age: 26
    };
    const obj2 = {
        animal: 'dog',
    };
    console.log(getValue(obj, 'name'));
    console.log(getValue(obj, 'age'));
    console.log(getValue(obj2, 'animal'));
    // console.log(getValue(obj2, 'age')); // error
    
}