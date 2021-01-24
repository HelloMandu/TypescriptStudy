{
    type CoffeeCup = {
        shots: number;
        hasMilk?: boolean;
        hasSugar?: boolean;
    }

    interface CoffeMaker {
        makeCoffee(shots: number): CoffeeCup;
    }

    class CoffeeMachine implements CoffeMaker {
        private static BEANS_GRAMM_PER_SHOT: number = 7;
        protected coffeeBeans: number;

        public constructor(coffeeBeans: number, private milk: MilkFrother, private sugar: SugarProvider) {
            this.coffeeBeans = coffeeBeans;
        }

        fillCoffeeBeans(beans: number) {
            if (beans < 0) {
                throw Error('value for beans should be greater than 0');
            }
            this.coffeeBeans += beans;
        }

        clean() {
            console.log('cleaning machine');
        }

        private grindBeans(shots: number) {
            console.log(`grinding beans for ${shots}`);
            if (this.coffeeBeans < shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT) {
                throw new Error('Not Enough coffee beans!');
            }
            this.coffeeBeans -= shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT;
        }

        private preheat() {
            console.log('heating....')
        }

        private extract(shots: number): CoffeeCup {
            console.log(`Pulling ${shots} shots...`);
            return {
                shots,
                hasMilk: false
            }
        }

        makeCoffee(shots: number): CoffeeCup {
            this.grindBeans(shots);
            this.preheat();
            const coffee = this.extract(shots);
            const sugarAdded = this.sugar.addSugar(coffee);
            return this.milk.makeMilk(sugarAdded);
        }
    }

    // milk
    interface MilkFrother {
        makeMilk(cup: CoffeeCup): CoffeeCup
    }

    class ChealMilkSteamer implements MilkFrother{
        private steamMilk(): void {
            console.log('steaming some milk...');
        }
        makeMilk(cup: CoffeeCup): CoffeeCup {
            this.steamMilk();
            return {
                ...cup,
                hasMilk: true
            }
        }
    }

    class FancyMilkSteamer implements MilkFrother{
        private steamMilk(): void {
            console.log('steaming some milk...');
        }
        makeMilk(cup: CoffeeCup): CoffeeCup {
            this.steamMilk();
            return {
                ...cup,
                hasMilk: true
            }
        }
    }

    class ColdMilkSteamer implements MilkFrother{
        private steamMilk(): void {
            console.log('steaming some milk...');
        }
        makeMilk(cup: CoffeeCup): CoffeeCup {
            this.steamMilk();
            return {
                ...cup,
                hasMilk: true
            }
        }
    }

    class NoMilk implements MilkFrother{
        makeMilk(cup: CoffeeCup): CoffeeCup{
            return cup;
        }
    }

    // sugar
    interface SugarProvider {
        addSugar(cup: CoffeeCup): CoffeeCup
    }

    class CandySugalMixer implements SugarProvider{
        private getSugar() {
            console.log('Getting some sugar from candy');
            return true;
        }
        addSugar(cup: CoffeeCup): CoffeeCup {
            const sugar = this.getSugar();
            return {
                ...cup,
                hasSugar: sugar
            }
        }
    }

    class SugalMixer implements SugarProvider{
        private getSugar() {
            console.log('Getting some sugar from jar');
            return true;
        }
        addSugar(cup: CoffeeCup): CoffeeCup {
            const sugar = this.getSugar();
            return {
                ...cup,
                hasSugar: sugar
            }
        }
    }

    class NoSugar implements SugarProvider{
        addSugar(cup: CoffeeCup): CoffeeCup{
            return cup;
        }
    }


    //milk
    const cheapMilkMaker = new ChealMilkSteamer();
    const fancyMilkMaker = new FancyMilkSteamer();
    const coldMilkMaker = new ColdMilkSteamer();
    const noMilk = new NoMilk();

    // candy
    const candySugar = new CandySugalMixer();
    const sugar = new SugalMixer();
    const noSugar = new NoSugar();


    const sweetCandyMachine = new CoffeeMachine(12, noMilk, candySugar);
    const sweetMachine = new CoffeeMachine(12, noMilk, sugar);

    const latteMachine = new CoffeeMachine(12, cheapMilkMaker, noSugar);
    const coldLatteMachine = new CoffeeMachine(12, coldMilkMaker, noSugar);
    const sweetLatteMachine = new CoffeeMachine(12, cheapMilkMaker, candySugar);
}