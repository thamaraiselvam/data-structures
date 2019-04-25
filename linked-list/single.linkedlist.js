class Node {
    constructor(element) {
        this.element = element;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    add(element) {
        //create new node
        let node = new Node(element);

        let current = null;

        //If head is empty then insert at first item
        if (this.head == null) {
            this.head = node;
        } else {
            current = this.head;

            //iterate to end of list
            while (current.next) {
                current = current.next;
            }


            //Finally add new node
            current.next = node;
        }

        this.size++;
    }

    remove(element) {
        if (this.head === null) {
            throw Error ('List is empty');
        }

        let current = this.head;
        let prev = null;

        //Iterate over the list
        while (current != null) {

            if (current.element === element) {
                //If prev node is null then first node is required element
                if (prev === null) {
                    this.head = current.next;
                } else {
                    //if prev node found then unset current node
                    prev.next = current.next;
                }
                this.size--;
                return current.element;
            }

            prev = current;

            //check next node
            current = current.next;
        }
        return 'Element not found';
    }

    get(type = 'list') {
        switch(type){
            case 'list':
                return this.head;
            case 'size':
                return this.size;
        }
    }
}

module.exports = SinglyLinkedList;