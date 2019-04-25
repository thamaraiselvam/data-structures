const LinkedList = require('./linked-list/single.linkedlist')

class BaseController {

    constructor(){
        this.init();
    }

    init(){
        this.singly_linkedlist();
    }

    singly_linkedlist() {
        const linkedList = new LinkedList();

        linkedList.add(10);
        linkedList.add(20);
        linkedList.add(30);
        linkedList.remove(20);
        console.log(linkedList.get('list'));
    }
}

new BaseController();
