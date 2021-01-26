{
    interface Stack<T> {
        readonly size: number
        isFull(): boolean;
        isEmpty(): boolean;
        push(value: T): void;
        pop(): T;
    }

    type Node<T> = {
        readonly value: T;
        readonly next?: Node<T>;
    }

    class StackImpl<T> implements Stack<T> {
        private _size: number = 0;
        private head?: Node<T>;

        constructor(private capacity: number){}

        get size() {
            return this._size;
        }

        isFull(): boolean{
            return this.size === this.capacity;
        }

        isEmpty(): boolean{
            return this.head == null || this._size === 0;
        }

        push(value: T) {
            if(this.isFull()){
                throw new Error('Stack is full');
            }
            const node = { value, next: this.head };
            this.head = node;
            this._size++;
        }

        pop(): T {
            if(!this.head){
                throw new Error('Stack is empty');
            }
            const node = this.head;
            this.head = node.next;
            this._size--;
            return node.value;
        }
    }

    const stack = new StackImpl(3);
    stack.push(1);
    stack.push("2");
    stack.push("345");
    while(stack.size !== 0){
        console.log(stack.pop());
    }

    const stack2 = new StackImpl<number>(3);
    stack2.push(1);
    stack2.push(2);
    stack2.push(345);
    while(stack2.size !== 0){
        console.log(stack2.pop());
    }
}