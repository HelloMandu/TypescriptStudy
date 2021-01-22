{
    type CoffeeCup = {
        shots: number;
        hasMilk: boolean;
    }

    interface CoffeMaker {
        makeCoffee(shots: number): CoffeeCup;
    }

    class CoffeeMachine implements CoffeMaker {
        private static BEANS_GRAMM_PER_SHOT: number = 7;
        protected coffeeBeans: number;

        public constructor(coffeeBeans: number){
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

    class CaffeLatteMachine extends CoffeeMachine{
        constructor(beans: number, public readonly serialNumber: string){
            super(beans);
        }
        private steamMilk(): void{
            console.log('steaming some milk...');
        }
        makeCoffee(shots: number): CoffeeCup{
            this.steamMilk();
            const coffee = super.makeCoffee(shots);
            return{
                ...coffee,
                hasMilk: true
            }
        }
    }
    const machine = new CaffeLatteMachine(23, 'serialnumber');
   console.log(machine.makeCoffee(2));
   console.log(machine.serialNumber);
}