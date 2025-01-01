import {FormEvent, useState} from 'react'
import './App.css'
import TodoItem from "./todo-item.ts";
import useLocalStorageState from "./hooks/useLocalStorageState.ts";
import Todo from "./Todo.tsx";

function App() {
    const [todoItems, setTodoItems] = useLocalStorageState<TodoItem[]>('todo', [])

    const [input, setInput] = useState<string>('')

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const nextID = todoItems.length > 0
            ? Math.max(...todoItems.map(x => x.id)) + 1
            : 1;
        const newItem = new TodoItem(nextID, input);
        setTodoItems([...todoItems, newItem]);
        setInput('');
    }

    const handleTodoClick = (todoItem: TodoItem) => {
        const newTodoItems = [...todoItems].map(i => {
            if (i.id === todoItem.id) {
                i.done = !i.done;
            }

            return i;
        })
        setTodoItems(newTodoItems)
    }

    return (
        <>
            <div className="row">
                <div className="col">
                    <h1>Todo List</h1>
                </div>
            </div>
            <div className="row">
                <form onSubmit={handleSubmit}>
                    <div className="col">
                        <input value={input}
                               onChange={(event) => setInput(event.target.value)} className='form-control'
                               placeholder='Please enter a task'/>
                    </div>
                </form>
            </div>
            <div className="row">
                <div className="col">
                    <ul>
                        {todoItems.map((item) => <Todo key={item.id}
                                                       text={item.text}
                                                       done={item.done}
                                                       onClick={() => handleTodoClick(item)}/>)}
                    </ul>
                </div>
            </div>
        </>
    )
}

export default App
