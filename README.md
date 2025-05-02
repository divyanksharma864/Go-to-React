# Go-to-React

Notes - React

#) Custom components: Custom components are functions that contains reusable piece of code. Or simple A function that returns React elements.

Custom components is a function which contain the code we will/want to reuse. 
Example: 
function Greeting() {
  return <h1>Hello, React!</h1>;
}

Here, Greeting is a functional component in React because it's a JavaScript function that returns JSX (the React version of HTML).
Greeting is a component that renders an <h1> element with the text "Hello, React!".
It’s a functional component because it’s a simple function that returns JSX.


Instead of calling it like we call function in other languages with (), though it will work with () also but this is not the practice. Here we call it in angular brackets < />
Example:-

import { createRoot } from "react-dom/client"
const root = createRoot(document.getElementById("root"))

root.render(
    <TemporaryName />
)

function TemporaryName() {
    return (
        <main>
            <img src="react-logo.png" width="40px" alt="React logo" />
            <h1>Fun facts about React!</h1>
            <ul>
                <li>Was first release in 2013</li>
                <li>Was originally created by Jordan Walke</li>
                <li>Has well over 200K stars on GitHub</li>
                <li>Is maintained by Meta</li>
                <li>Powers thousands of enterprise apps, including mobile apps</li>
            </ul>
        </main>
    )
}

#) <Page /> and it’s written like <Page></Page> is same.

#) To decorate the bullets in <ol> or <ul> use marker in css. Example: .facts-list > li::marker {
    color: #61DAFB;
    font-size: 1.5rem;
}

#)  How to write Javascript logic or variables inside JSX:-

import ReactDOM from 'react-dom/client';

function App() {
  const firstName = "Joe"
  const lastName = "Schmoe"
  
  /**
   * Challenge: finish off the h1 below so it says "Hello Joe Schmoe"
   */
  
  return (
    <h1>Hello {firstName} {lastName}</h1>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);

2nd code:- import ReactDOM from 'react-dom/client';

function App() {
  
  return (
    <h1>It is currently {new Date().getHours() % 12}</h1>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);

#) Components are types of methods we saw in 1st point.

#) const jsx = <h1>Donatello</h1>
 What does it mean?  ANS] const jsx = <h1>Donatello</h1> is same as const jsx = React.createElement("h1", null, "Donatello");

const jsx = {
  type: "h1",
  props: {
    children: "Donatello"
  }
}

#) entry ={entry} And {…entry} both are just same they are different in syntax

#) How form works? 
    function handleSubmit(event) {
        event.preventDefault()
        console.log("Form submitted!")
        const formData = new FormData(event.currentTarget)
        const newIngredient = formData.get("ingredient")
        console.log()
    }


 <form onSubmit={handleSubmit} className="add-ingredient-form">
                <input 
                    type="text"
                    placeholder="e.g. oregano"
                    aria-label="Add ingredient"
                    name="ingredient"
                />
                <button>Add ingredient</button>
            </form>


EXPLANATION:-

event is not a function — it's an object created by the browser.
It contains all the information about the thing that just happened (like submitting a form, clicking a button, moving the mouse, etc.).
It's an instance of the Event class.
What’s inside the event object?

function handleSubmit(event) {
  console.log(event);
}

You’ll see stuff like:
* type: the type of event ("submit", "click", etc.)
* target: the element that triggered the event (like a form)
* preventDefault(): a method to stop the default action
* timestamp: when the event happened
* and many more useful details

What is the Event class?
The Event class is built into JavaScript.
Whenever something happens on a webpage (like clicking, typing, submitting a form, moving the mouse), the browser creates an object from the Event class.
That object contains information about:
* What event happened
* When it happened
* Where it happened (which element)
* And it gives you methods like preventDefault() to control it


event.preventDefault()
says: “Hey browser, don’t reload the page!”
✅ This is very important when working with React or any single-page app.

 const formData = new FormData(event.currentTarget)
We are making an object = formData which is an object of class FormData(which reads whole form).

formData is an object (or instance) of the built-in FormData class.
We can now use methods on it like:
* .get("name")
* .has("name")
* .entries()
* .append(...), etc.


event.currentTarget

🔹 event.currentTarget refers to the element on which the event listener is actually attached.
🔹 It’s different from event.target, which refers to the actual element that triggered the event (where the event originated).

Example: Let’s say you have this HTML:
<div id="container">
    <button>Click Me</button>
</div>

JS:-
document.getElementById("container").addEventListener("click", function(event) {
    console.log("currentTarget:", event.currentTarget)
    console.log("target:", event.target)
})

🧾 Now if you click on the <button>:
* event.target will be the <button>
* event.currentTarget will be the <div id="container">
✅ Because:
* The click started from the button → event.target
* The event listener is attached to the container → event.currentTarget


const newIngredient = formData.get("ingredient")
* This says: "Get the value of the input field that has name="ingredient"."
* It stores that value in a variable called newIngredient.


✅ #)  Props VS State

Props refers to property being passed into a component in order for it to work correctly, similarly to how a function receives parameters. So props contains information that has to be feeded to the function(component) to work.
A component receiving props is not allowed to modify those props (props are immutable).

function addTwoNumbers(a, b) {
    // DON'T DO THIS
    a = 42
    return a + b
}

console.log(addTwoNumbers(1, 2))

✅  view as a function of state: (In React, what you see on the screen (the View) is determined by the state. When the state changes, React re-runs the component and updates the screen automatically.)

1) render- React runs your function and displays whatever gets returned. The function will only be run again if 1) it receives new props from above or 2) its internal state values change.
function App() {
  return <h1>Hello!</h1>
}

This function returns a JSX element (<h1>Hello!</h1>), and React displays it on the screen.

But when does React re-run this function?
React will only re-run (re-render) the function if:
1. Props change (data passed from a parent).
2. State changes (data managed within the component).
React watches the component's props and state. If either changes, it runs the component function again to “see” what should now be shown.



2) setState - changing a local, non-state variable does not cause react to re-render the component. Changing state with a built-in 'setState' function does. 
Changing local variable ≠ Changing state

let count = 0
count = count + 1

This is a normal variable. React does not know it changed.
So it won’t re-render the component.

Local variables change = nothing happens in React (Simply changing a local variable is not going to make React re-run our component)
State changes using setState = React re-runs the function, and screen updates


3) view = function(state)- Thus, when state changes and React re-runs(re-renders) your component something new gets returned and replaces what used to be on the page.

Every time the state changes, React does this:
1. Re-runs the component with the new state
2. Returns new JSX
3. Compares with the old JSX (diffing)
4. Updates the screen (DOM) efficiently


✅ How to make a local variable a state variable? 
1st -> import use state from React library or import the entire React library
Import { useState } from “react” or import React from “React”

2nd -> 
import React from "react"

export default function App() {
    const result = React.useState("Yes")
    // const result = "Yes" (This is how to do it with local variable)
    
    return (
        <main>
            <h1 className="title">Is state important to know?</h1>
            <button className="value">{result[0]}</button>
        </main>
    )
}


✅ Array destructuring for State:- 

import React from "react"

export default function App() {
    let [isImportant, setIsImportant] = React.useState("Yes")
    
    function handleClick() {
        setIsImportant("Heck yes")
    }
    
    return (
        <main>
            <h1 className="title">Is state important to know?</h1>
            <button onClick={handleClick} className="value">{isImportant}</button>
        </main>
    )
}

IsImportant is the variable that contains the value “Yes”. setIsImportant is the function which changes the value inside isImportant variable when a button or event is done. So setIsImportant is a function that is used to change the state.

✅ Practicing State:-

import React from "react"

export default function App() {
    /**
     * Challenge: 
     * Create state to track our count value (initial value is 0)
     * Don't forget to replace the hard-coded "0" with your new state
     */
    const [counter, setCounter] = React.useState(0)
    function handleMinus(){
        setCounter(counter-1)
    }
    function handlePlus(){
        setCounter(counter+1)
    }
    return (
        <main className="container">
            <h1>How many times will Bob say "state" in this section?</h1>
            <div className="counter">
                <button onClick={handleMinus}className="minus" aria-label="Decrease count">–</button>
                <h2 className="count">{counter}</h2>
                <button onClick={handlePlus} className="plus" aria-label="Increase count">+</button>
            </div>
        </main>
    )
}

✅Updating State with a Callback function :-
A callback function is just a function that you pass as an argument to another function, and then that outer function calls it at the right time.

How React's setCount works
There are two ways to use setCount:
1. 🔹 Normal way (pass a value):

setCount(count + 1)

2. 🔸 Functional (callback) way — preferred when the new value depends on the previous value:

setCount(function(prevCount) {
  return prevCount + 1;
})

React’s state updates are asynchronous (they don't happen immediately), so if you try this:

setCount(count + 1)
setCount(count + 1)

You might expect count to increase by 2, but it only increases by 1! Because both lines read the same value of count.

👉 To fix that, React gives us the callback version:

setCount(function(prevCount) {
  return prevCount + 1
})

Or

setCount( prevCount => prevCount + 1)


FULL CODE:  import React from "react"

export default function App() {
    const [count, setCount] = React.useState(0)

    function add() {
        setCount(prevCount=> prevCount + 1)
    }
    
    function subtract() {
        setCount(prevCount => prevCount - 1)
    }

    return (
        <main className="container">
            <h1>How many times will Bob say "state" in this section?</h1>
            <div className="counter">
                <button className="minus" onClick={subtract} aria-label="Decrease count">–</button>
                <h2 className="count">{count}</h2>
                <button className="plus" onClick={add} aria-label="Increase count">+</button>
            </div>
        </main>
    )
}

When you click the + button, add() is called:
1. This passes a callback function to setCount
2. React internally runs this function and passes the current value of count as prevCount
3. Then it uses the return value (prevCount + 1) as the new value of count

