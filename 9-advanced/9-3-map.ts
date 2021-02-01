{
    type Video = {
        title: string;
        author: string;
    };

    type Optional<T> = {
        [P in keyof T]?: T[P] // for...in
    };

    type ReadOnly<T> = {
        readonly [P in keyof T]: T[P] // for...in
    }

    type VideoOptional = Optional<Video>;

    type Animal = {
        name: string;
        age: number;
    }
    const animal: Optional<Animal> = {
        name: 'dog'
    };
    animal.name = 'sungmin';

    const video: ReadOnly<Video> = {
        title: 'hi',
        author: 'sungmin'
    }

    // video.title = 'test' //error

    // type VideoOptional = {
    //     title?: string;
    //     author?: string;
    // }

    // type VideoReadOnly = {
    //     readonly title: string;
    //     readonly author: string;
    // }

    type Nullable<T> = {
        [P in keyof T]: T[P] | null // for...in
    };

    const obj2: Nullable<Video> = {
        title: 'hi',
        author: null
    }

    type Proxy<T> = {
        get(): T;
        set(value: T): void;
    }

    type Proxify<T> = {
        [P in keyof T]: Proxy<T[P]>// for...in
    }
}