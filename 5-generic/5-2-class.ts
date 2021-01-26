{
    interface Either<L, R>{
        left: () => L;
        right: () => R;
    }

    class SimpleEither<L, R> implements Either<L, R>{
        constructor(private leftValue: L, private rightValue: R){}
        left(): L{
            return this.leftValue;
        }
        right(): R{
            return this.rightValue;
        }
    }
    const either: Either<number, number> = new SimpleEither(4, 5);
    console.log(either.left());
    console.log(either.right());
    const best = new SimpleEither({name: 'sungmin'}, 'hello');
    console.log(best.left());
    console.log(best.right());
}