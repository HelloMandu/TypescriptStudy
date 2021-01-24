{
    type CoffeeCup = {
        shots: number;
        hasMilk?: boolean;
        hasSugar?: boolean;
    }

    interface CoffeMaker {
        makeCoffee(shots: number): CoffeeCup;
    }

    abstract class CoffeeMachine implements CoffeMaker {
        private static BEANS_GRAMM_PER_SHOT: number = 7;
        protected coffeeBeans: number;

        public constructor(coffeeBeans: number){
            this.coffeeBeans = coffeeBeans;
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

        protected abstract extract(shots: number): CoffeeCup;

        makeCoffee(shots: number): CoffeeCup {
            this.grindBeans(shots);
            this.preheat();
            return this.extract(shots);
        }
    }

    class CaffeLatteMachine extends CoffeeMachine{
        constructor(beans: number, public readonly serialNumber: string){
            super(beans);
        }
        private steamMilk(): void{
            console.log('steaming some milk...');
        }

        protected extract(shots: number): CoffeeCup{
            this.steamMilk();
            return{
                shots,
                hasMilk: true
            }
        }
    }
    
    class SweetCoffeeMaker extends CoffeeMachine{
        protected extract(shots: number): CoffeeCup{
            return{
                shots,
                hasSugar: true
            }
        }
    }

    const machines: CoffeMaker[] = [
        new CaffeLatteMachine(16, '1'),
        new SweetCoffeeMaker(16),
        new CaffeLatteMachine(16, '1'),
        new SweetCoffeeMaker(16),
    ]
    machines.forEach(machine => {
        console.log('-----------------');
        console.log(machine.makeCoffee(1));
    })
}