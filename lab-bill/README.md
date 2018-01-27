This application creates a stack and a queue. 

In stack.js we utilize a stack constructor that begins with a top = null, a max size and a current size. The methods we have on this object are push: which adds a new node to the top of the stack. Pop: which removes a node form the top of the stack. And Peek: which allows us to inspect the top of the stack.

In queue.js we utilize a similar pattern, except we use enqueue: to add to the end of the queue. We use Dequeue to take something from the front of the queue.

We also have 2 test suites to check for proper usage of these functions as well as error handling on invalid inputs to the functions.  