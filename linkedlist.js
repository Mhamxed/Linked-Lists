class node {
    constructor () {
        this.value = null
        this.nextNode = null
    }
}

class LinkedList {
    constructor () {
        this.head = null
    }

    append(value) {
        let p = new node()
        p = this.head
        if (this.head === null) {
            this.prepend(value)
        } else {
            while (p.nextNode) {
                p = p.nextNode
            }
            const tail = new node()
            tail.value = value
            tail.nextNode = null
            p.nextNode = tail
        }
    }

    prepend(value) {
        if (this.head === null) {
            const newHead = new node()
            newHead.value = value
            newHead.nextNode = null
            this.head = newHead
        } else {
            const tmp = new node()
            tmp = this.head
            const newHead = new node()
            newHead.value = value
            newHead.nextNode = tmp.nextNode
            this.head = newHead
        }
        return this.head
    }

    size() {
        let p = this.head
        let ans = 0
        while(p) {
            p = p.nextNode
            ans++
        }
        return ans
    }

    gethead() {
        return this.head
    }

    tail() {
        let p = this.head
        while (p.nextNode) {
            p = p.nextNode
        }
        return p
    }

    at(index) {
        let p = this.head
        let i = 0
        while (i < index) {
            p = p.nextNode
            i++
        }
        return p
    }

    pop() {
        let p = this.head
        while (p.nextNode.nextNode) {
            p = p.nextNode
        }
        p.nextNode = null
    }

    contains(value) {
        let p = this.head
        while (p.nextNode) {
            if (p.value === value) {
                return true
            }
            p = p.nextNode
        }
        return false
    }

    find(value) {
        let p = new node()
        let i = 0
        p = this.head
        while (p.nextNode) {
            if (p.value === value) {
                return i
            }
            i++
            p = p.nextNode
        }
        return null
    }

    toString() {
        let p = new node()
        let ans = ''
        p = this.head
        while (p) {
            ans += `( ${p.value} ) -> `
            p = p.nextNode
        }
        ans += 'null'
        return ans
    }
}


module.exports = LinkedList;


