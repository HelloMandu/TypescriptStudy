{
    type CoffeeCup = {
        shots: number;
        hasMilk: boolean;
    }
    // public
    // private
    // protected
    class CoffeeMaker {
        private static BEANS_GRAMM_PER_SHOT: number = 7;
        protected coffeeBeans: number;

        private constructor(coffeeBeans: number){
            this.coffeeBeans = coffeeBeans;
        }

        static makeMachine(coffeeBeans: number): CoffeeMaker{
            return new CoffeeMaker(coffeeBeans);
        }

        fillCoffeeBeans(beans: number){
            if(beans < 0){
                throw Error('value for beans should be greater than 0');
            }
            this.coffeeBeans += beans;
        }

        makeCoffee(shots: number): CoffeeCup {
            if (this.coffeeBeans < shots * CoffeeMaker.BEANS_GRAMM_PER_SHOT) {
                throw new Error('Not Enough coffee beans!');
            }
            this.coffeeBeans -= shots * CoffeeMaker.BEANS_GRAMM_PER_SHOT;
            return {
                shots,
                hasMilk: false
            }
        }
    }
    const maker = CoffeeMaker.makeMachine(32);
    console.log(maker);

    class User{
        private internalAge = 4;
        
        constructor(private firstName: string, private lastName: string){}

        set setAge(num: number){
            if(num < 0){
                throw new Error('value for age should be greater than 0');
            }
            this.internalAge = num;
        }

        get getAge(): number{
            return this.internalAge;
        }

        get fullName(): string{
           return `${this.firstName} ${this.lastName}`
        }
    }

    const user = new User('Sungmin', 'Jo');

}