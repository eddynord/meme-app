import React from 'react';
import '../src/index.css';


export default App

function App() {

    const [count, setCount] = React.useState(0)
    /**
     * Note: if you ever need the old value of state
     * to help you determine the new value of state,
     * you should pass a callback function to your
     * state setter function instead of using
     * state directly. This callback function will
     * receive the old value of state as its parameter,
     * which you can then use to determine your new
     * value of state.
     */

//      1. You have 2 options for what you can pass in to a
//      state setter function (e.g. `setCount`). What are they?
     
//   a. New value of state (setCount(42))
//   b. Callback function - whatever the callback function 
//      returns === new value of state
  
  
//   2. When would you want to pass the first option (from answer
//      above) to the state setter function?
//   Whenever you don't need the previous value of state to determine
//   what the new value of state should be.
  
  
//   3. When would you want to pass the second option (from answer
//      above) to the state setter function?
//   Whenever you DO need the previous value to determine the new value
   

function increase() {
    setCount(prevCount => count + 1)
   }


    function decrease() {
        setCount(prevCount => count - 1)
    }   


    return (
        <div className="counter">
            <button className="counter--minus" onClick={decrease}>–</button>
            <div className="counter--count">
                <h1>{count}</h1>
            </div>
            <button className="counter--plus" onClick={increase}>+</button>
        </div>
    )




// const [isImportant, setIsImportant] = React.useState("Yes")


// function handleClick() {
//     setIsImportant("No")
// }
    

//     return (
//         <div className='state'>
//             <h1 className='state-title'>Is state important to know?</h1>
//             <div onClick={handleClick}  className='state-value'>
//                 <h1 >{isImportant}</h1>
//             </div>
//         </div>
//     )





    // const thingsArray = ["Thing 1", "Thing 2"]
    // const newThing = thingsArray.map(items => <p key = {items}>{items}</p>)

    // function addItem() {
    //     const addThing = `Thing ${thingsArray.length + 1}`
    //     thingsArray.push(addThing)

    //     console.log(thingsArray);
    // }

    
    


    

    //     return (
    //         <div>
    //             <button onClick={addItem}>Add Item</button>
    //             {newThing}
    //         </div>
    //     )




     

    }

    
    /**
     * Challenge: Map over the thingsArray to generate
     * a <p> element for each item and render them on the page
     * below the button
     */





