import { createSignal, type JSX } from 'solid-js'

interface Props {
  initValue?: number
  children?: JSX.Element
}

export const Counter = ({ initValue = 10, children }: Props) => {

  const [count, setCount] = createSignal(initValue)

  return (
    <>
      {/* <h1 class='text-5xl my-4'>Counter: {count()}</h1>
       */}
      {children}

      <button
        class="bg-blue-500 p-2 mr-2 rounded cursor-pointer"
        onClick={() => setCount((prev) => ++prev)}
      >
        +1
      </button>
      <button
        class="bg-blue-500 p-2 mr-2 rounded cursor-pointer"
        onClick={() => setCount((prev) => --prev)}
      >
        -1
      </button>
    </>
  )
}