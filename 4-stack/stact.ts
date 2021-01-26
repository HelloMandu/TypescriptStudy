{
    interface Stack {
        readonly size: number
        isFull(): boolean;
        isEmpty(): boolean;
        push(value: string): void;
        pop(): string;
    }

    type Node = {
        readonly value: string;
        readonly next?: Node;
    }

    class StackImpl implements Stack {
        private _size: number = 0;
        private head?: Node;

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

        push(value: string) {
            if(this.isFull()){
                throw new Error('Stack is full');
            }
            const node: Node = { value, next: this.head };
            this.head = node;
            this._size++;
        }

        pop(): string { // null == undefined : true, null === undefined : false
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
    stack.push("1");
    stack.push("2");
    stack.push("3");
    while(stack.size !== 0){
        console.log(stack.pop());
    }
}