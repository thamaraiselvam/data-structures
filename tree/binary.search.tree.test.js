const {assert, expect, should } = require('chai');

describe('Binary Search Tree', () => {
    const BinarySearchTree = require('./binary.search.tree');
    let bst = new BinarySearchTree();
    it('Should add root node', () => {
        bst.insert(10);
        expect(bst.get()).to.deep.equal({ value: 10, left: null, right: null });
    })

    it("should add node on left", () => {
        bst.insert(5);
        expect(bst.get()).to.deep.equal({ value: 10, left: {value: 5, left: null, right: null}, right: null })
    })

    it("should add node on right", () => {
        bst.insert(15);
        expect(bst.get()).to.deep.equal({ value: 10, left: {value: 5, left: null, right: null}, right: {value: 15, left: null, right: null} })
    })

    it("should add multiple nodes", () => {
        bst.insert(4);
        bst.insert(16);
        expect(bst.get()).to.deep.equal({ value: 10, left: {value: 5, left: {value: 4, left: null, right: null}, right: null}, right: {value: 15, left: null, right: {value: 16, left: null, right: null}} });
    })

    it("should search in inorder", () => {
        expect(bst.traverse()).to.be.eql([4, 5, 10, 15, 16]);
    })

    it("should search in BFS", () => {
        expect(bst.breadthFirstSearch()).to.be.eql([10,5, 15, 4 ,16]);
    })

    it("should search in DFS", () => {
        expect(bst.DepthFirstSearch()).to.be.eql([10, 5, 4, 15, 16]);
    })
})
