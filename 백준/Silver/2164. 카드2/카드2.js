const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const input = [];

rl.on('line', function(line) {
    input.push(line);
}).on('close', function(){

    const N = Number(input);

    class Node {
        constructor(value) {
            this.value = value;
            this.next = null;
            this.pres = null;
        }
    }

    class LinkedList {
        constructor() {
            this.head = null;
            this.tail = null;
            this.length = 0;
        }

        push(value) {
            const newNode = new Node(value);
            if (!this.head) {
                this.head = newNode;
            } else {
                this.tail.next = newNode;
                newNode.prev = this.tail;
            }
            this.tail = newNode;
            this.length ++;
            return newNode;
        }

        getHead() {
            return this.head.value;
        }

        removeHead() {
            this.head = this.head.next;
            this.head.prev = null;
            this.length --;
        }

        getSize() {
            return this.length;
        }
    }

    const list = new LinkedList();

    for (let i=1; i<=N; i++) {
        list.push(i);
    }

    for (;;) {
        if (list.getSize() <= 1) break;
        list.removeHead();
        list.push(list.getHead());
        list.removeHead()
    }

    console.log(list.getHead());

    rl.close();

    process.exit();
});