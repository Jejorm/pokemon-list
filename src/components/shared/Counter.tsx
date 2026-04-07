import { createSignal } from 'solid-js'

export const Counter = () => {

  const [count, setCount] = createSignal(10)

  return (
    <>
      <h1 class='text-5xl my-4'>Counter: {count()}</h1>

      <button class='bg-blue-500 p-2 mr-2 rounded cursor-pointer' onClick={() => setCount(prev => ++prev)}>+1</button>
      <button class='bg-blue-500 p-2 mr-2 rounded cursor-pointer' onClick={() => setCount(prev => --prev)}>-1</button>
    </>
  )
}