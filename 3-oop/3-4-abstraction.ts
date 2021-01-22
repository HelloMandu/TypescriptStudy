{
    type CoffeeCup = {
        shots: number;
        hasMilk: boolean;
    }

    interface CoffeMaker {
        makeCoffee(shots: number): CoffeeCup;
    }

    interface CommercialCoffeMaker {
        makeCoffee(shots: number): CoffeeCup;
        fillCoffeeBeans(beans: number): void;
        clean(): void;
    }

    class CoffeeMachine implements CoffeMaker, CommercialCoffeMaker {
        private static BEANS_GRAMM_PER_SHOT: number = 7;
        protected coffeeBeans: number;

        private constructor(coffeeBeans: number){
            this.coffeeBeans = coffeeBeans;
        }

        static makeMachine(coffeeBeans: number): CoffeeMachine{
            return new CoffeeMachine(coffeeBeans);
        }

        fillCoffeeBeans(beans: number){
            if(beans < 0){
                throw Error('value for beans should be greater than 0');
            }
            this.coffeeBeans += beans;
        }

        clean(){
            console.log('cleaning machine');
        }

        private grindBeans(shots: number){
            console.log(`grinding beans for ${shots}`);
            if (this.coffeeBeans < shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT) {
                throw new Error('Not Enough coffee beans!');
            }
            this.coffeeBeans -= shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT;
        }

        private preheat(){
            console.log('heating....')
        }

        private extract(shots: number): CoffeeCup{
            console.log(`Pulling ${shots} shots...`);
            return{
                shots,
                hasMilk: false
            }
        }

        makeCoffee(shots: number): CoffeeCup {
            this.grindBeans(shots);
            this.preheat();
            return this.extract(shots);
        }
    }

    class AmateurUser{
        constructor(private machine: CoffeeMachine){}
        makeCoffee(){
            const coffee = this.machine.makeCoffee(2);
            console.log(coffee);
        }
    }

    class ProBarista{
        constructor(private machine: CommercialCoffeMaker){}
        makeCoffee(){
            const coffee = this.machine.makeCoffee(2);
            console.log(coffee);
            this.machine.fillCoffeeBeans(45);
            this.machine.clean();
        }
    }
    const maker: CoffeeMachine = CoffeeMachine.makeMachine(32);
    const amateur = new AmateurUser(maker);
    const pro = new ProBarista(maker);
    pro.makeCoffee();
}