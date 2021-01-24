{
    class Node{
        value: string;
        next: Node | null;
        constructor(value: string, next: Node | null){
            this.value = value;
            this.next = next;
        }
    }
    
    interface Stack{
        push(value: string): void;
        pop(): string | null;
    }

    class Stack implements Stack{
        private head: Node | null;
        size: number;

        constructor(){
            this.head = null;
            this.size = 0;
        }

        isEmpty(): boolean {
            return this.size === 0;
        }

        push(value: string): void{
            const newNode = new Node(value, this.head);
            this.head = newNode;
            this.size += 1;
        }

        peek(): string | null{
            if(!this.head){
                return null;
            }
            return this.head.value;
        }

        pop(): string | null {
            if(!this.head){
                return null;
            }
            const top = this.head.value;
            this.head = this.head.next;
            this.size -= 1;
            return top;
        }
    }
    
    const stack = new Stack();
    stack.push("1");
    stack.push("2");
    stack.push("3");
    console.log(stack.pop());
    console.log(stack.pop());
    console.log(stack.pop());
    console.log(stack.pop());
}

