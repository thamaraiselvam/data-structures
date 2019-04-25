var assert = require('assert');
const SinglyLinkedList = require('./single.linkedlist');

describe('Singly Linked List', () =>{

    const linkedList = new SinglyLinkedList();

    it('Should add an element', () =>{
        linkedList.add(10);
        let result = linkedList.get('list');
        assert.equal(JSON.stringify(result), '{"element":10,"next":null}')
    })

    it('Should add two element', () =>{
        linkedList.add(20);
        linkedList.add(30);
        let result = linkedList.get('list');
        assert.equal(JSON.stringify(result), '{"element":10,"next":{"element":20,"next":{"element":30,"next":null}}}')
    })

    it('Should remove an element', () =>{
        linkedList.remove(20);
        let result = linkedList.get('list');
        assert.equal(JSON.stringify(result), '{"element":10,"next":{"element":30,"next":null}}')
    })
})