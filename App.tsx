import { useState } from 'react'

/*function App() {       1 MINUTE 32 SECOND
  const [count,setcount] = useState(0)
  const increment = () => {
    setcount(count + 1)
  }
  const decrement = () => {
    setcount(count - 1)
  }
  const reset = () => {
    setcount(0)
  }
  return (
    <>
    <button onClick={increment}>+</button>
    <button onClick={decrement}>-</button>
    <button onClick={reset}>Reset</button>
    <h1>{count}</h1>
    </>
  )
}*/
/*function App() { // 1 Minute 30 Second
  const [count, setcount] = useState(0)

  const increment = () => {
    setcount(count + 1)
  }
  const decrement = () => {
    setcount(count - 1)
  }
  const reset = () => {
    setcount(0)
  }
  return (
  <>
  <button onClick={increment}>+</button>
  <button onClick={decrement}>-</button>
  <button onClick={reset}>Reset</button>
  <h1>{count}</h1>
  </>
  )
}*/

/*function App() { //1 Minute 22 Second
  const [count,setcount] = useState(0)
  const increment = () => {
    setcount(count+1)
  }
  const decrement = () => {
    setcount(count-1)
  }
  const reset = () => {
    setcount(0)
  }
  return (
    <>
    <button onClick={increment}>+</button>
    <button onClick={decrement}>-</button>
    <button onClick={reset}>reset</button>
    <h1>{count}</h1>
    </>
  )
} */
/*function App() { // 1 minute 24 second
  const [count,setcount] = useState(0)
  const increment = () => {
    setcount(count +1)
  }
  const decrement = () => {
    setcount(count -1)
  }
  const reset = () => {
    setcount(0)
  }

  return (
    <>
    <button onClick={increment}>+</button>
    <button onClick={decrement}>-</button>
    <button onClick={reset}>Reset</button>
    <h1>{count}</h1>
    </>
  )
}*/
function App() { // 1 Minute 25 seconds
  const [ count, setcount] = useState(0)
  const increment = () => {
    setcount(count + 1)
  }
  const decrement = () => {
    setcount(count - 1)
  }
  const reset = () => {
    setcount(0)
  }
  return (
  <>
  <button onClick={increment}>+</button>
  <button onClick={decrement}>-</button>
  <button onClick={reset}>reset</button>
  <h1>{count}</h1>
  </>
  )
}


export default App
