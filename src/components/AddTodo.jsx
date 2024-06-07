import {useState} from 'react'
import {useDispatch} from 'react-redux'
import {addTodo} from '../feature/todo/todoSlice' 

function AddTodo() {

    const [input, setInput] = useState('')
    const dispatch = useDispatch()

    const addTodoHandler = (e) => {
        e.preventDefault()
        dispatch(addTodo(input))
        setInput('')
    }

  return (
    <form onSubmit={addTodoHandler} className="space-x-3 mt-12 flex items-center justify-center">
    <input
      type="text"
      className="bg-gray-800 rounded-lg border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-600 text-base outline-none text-white py-2 px-4 leading-8 transition-colors duration-200 ease-in-out w-full max-w-md"
      placeholder="Enter a Todo..."
      value={input}
      onChange={(e) => setInput(e.target.value)}
    />
    <button
      type="submit"
      className="ml-3 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-700 rounded-lg text-lg transition-all duration-200 ease-in-out"
    >
      Add Todo
    </button>
  </form>
  
  )
}

export default AddTodo