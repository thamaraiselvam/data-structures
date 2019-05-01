class Node {
    constructor(value, left, right) {
        this.value = value;
        this.left = left;
        this.right = right;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(key) {
        let newNode = new Node(key, null, null);

        if (!this.root) {
            this.root = newNode;
        } else {
            this.insertNode(this.root, newNode);
        }
    }

    traverse(){
        this.order = [];
        return this.inOrder(this.root);
    }

    inOrder(node){
        if(!node) return;
        this.inOrder(node.left);
        this.order.push(node.value);
        this.inOrder(node.right);
        return this.order;
    }

    breadthFirstSearch(){
        this.queue = [];
        this.order = [];
        this.queue.push(this.root);
        this.levelSearchBFS();
        return this.order;
    }

    DepthFirstSearch(){
        this.stack = [];
        this.order = [];
        this.stack.push(this.root);
        this.levelSearchDFS();
        return this.order;
    }

    levelSearchDFS(){
        if(!this.stack.length){
            return;
        }

        let node = this.stack.pop();
        this.order.push(node.value);

        if(node.right){
            this.stack.push(node.right);
        }

        if(node.left){
            this.stack.push(node.left);
        }

        this.levelSearchDFS();
    }

    levelSearchBFS(){
        if(!this.queue.length){
            return ;
        }

        let node = this.queue.shift();
        this.order.push(node.value);

        if(node.left){
            this.queue.push(node.left);
        }

        if(node.right){
            this.queue.push(node.right);
        }

        this.levelSearchBFS();
    }

    insertNode(node, newNode) {
        if (newNode.value < node.value) {
            if (!node.left) {
                node.left = newNode;
            } else {
                this.insertNode(node.left, newNode);
            }
        } else {
            if (!node.right) {
                node.right = newNode
            } else {
                this.insertNode(node.right, newNode);
            }
        }
    }

    get() {
        return this.root;
    }
}



module.exports = BinarySearchTree;