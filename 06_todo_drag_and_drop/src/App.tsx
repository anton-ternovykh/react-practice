import {FormEvent, useState} from 'react'
import './App.css'
import TaskModel from "./models/TaskModel.ts";
import {BucketType} from "./models/BucketType.enum.ts";
import {Bucket} from "./Bucket.tsx";

const App = () => {

    const [tasks, setTasks] = useState<TaskModel[]>([])
    const [newTask, setNewTask] = useState<string>('')
    const [dragOverBucketType, setDragOverBucketType] = useState<BucketType | null>(null)

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!newTask) {
            return;
        }

        setTasks([...tasks, new TaskModel(newTask, BucketType.ToDo)]);
        setNewTask('');
    }

    const handleDragOver = (bucketType: BucketType) => {
        if (!dragOverBucketType || dragOverBucketType !== bucketType) {
            setDragOverBucketType(bucketType);
        }
    }

    const handleDragEnd = (taskID: string) => {
        const newTasks = [...tasks];

        for (let i = 0; i < newTasks.length; i++) {
            if (newTasks[i].id === taskID) {
                newTasks[i].bucketType = dragOverBucketType;
            }
        }

        setDragOverBucketType(null);
        setTasks(newTasks);
    }

    const todoTasks = tasks.filter(t => t.bucketType === BucketType.ToDo);
    const inProgressTasks = tasks.filter(t => t.bucketType === BucketType.InProgress);
    const doneTasks = tasks.filter(t => t.bucketType === BucketType.Done);

    return (
        <>
            <div className="row mb-2 mt-2">
                <div className="col-12">
                    <form onSubmit={handleSubmit}>
                        <input className='form-control'
                               value={newTask}
                               placeholder='Add New Task...'
                               onChange={(e) => setNewTask(e.target.value)}/>
                    </form>
                </div>
            </div>
            <div className='row'>
                <Bucket title='To Do'
                        tasks={todoTasks}
                        bucketType={BucketType.ToDo}
                        onDragOver={handleDragOver}
                        onDragEnd={handleDragEnd}/>
                <Bucket title='In Progress'
                        tasks={inProgressTasks}
                        bucketType={BucketType.InProgress}
                        onDragOver={handleDragOver}
                        onDragEnd={handleDragEnd}/>
                <Bucket title='Done'
                        tasks={doneTasks}
                        bucketType={BucketType.Done}
                        onDragOver={handleDragOver}
                        onDragEnd={handleDragEnd}/>
            </div>
        </>
    )
}

export default App
