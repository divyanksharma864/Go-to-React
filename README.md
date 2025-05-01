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


✅ Props VS State

Props refers to property being passed into a component in order for it to work correctly, similarly to how a function receives parameters. So props contains information that has to be feeded to the function(component) to work.
A component receiving props is not allowed to modify those props (props are immutable).

function addTwoNumbers(a, b) {
    // DON'T DO THIS
    a = 42
    return a + b
}

console.log(addTwoNumbers(1, 2))
