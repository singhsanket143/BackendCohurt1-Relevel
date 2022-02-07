class Stack {
    constructor() {
        this.top = 0;
        this.data = [];
    }

    push(element) {
        this.data[this.top] = element;
        this.top = this.top + 1;
    }

    isEmpty() {
        return this.top == 0;
    }

    pop() {
        if(this.isEmpty()) {
            console.log("Stack is empty");
            return undefined;
        }
        this.top = this.top - 1;
        return this.data.pop();
    }

    peek() {
        if(this.isEmpty()) {
            return undefined;
        }
        return this.data[this.top - 1];
    }   
}


function insertAtBottomIterative(st, element) {
    const secondary = new Stack();
    while(!st.isEmpty()) {
        secondary.push(st.pop());
    }
    st.push(element);
    while(!secondary.isEmpty()) {
        st.push(secondary.pop());
    }
}

function insertAtBottomRecursive(st, element) {
    if(st.isEmpty()) {
        st.push(element);
        return;
    }
    const topElement = st.pop();
    insertAtBottomRecursive(st, element);
    st.push(topElement);
}

function reverseStack(st) {
    if(st.isEmpty()) {
        return;
    }
    const topElement = st.pop();
    reverseStack(st);
    insertAtBottomRecursive(st, topElement);
}

const st = new Stack();
st.push(100);
st.push(200);
st.push(300);
st.push(400);
st.push(500);
st.push(600);

console.log(st.peek());

st.pop();
st.pop();

console.log(st.peek());

insertAtBottomIterative(st, 10);
console.log(st.peek());