import TaskModel from "./models/TaskModel.ts";
import {BucketType} from "./models/BucketType.enum.ts";
import {DragEventHandler, useState} from "react";
import classNames from "classnames";
import {Task} from "./Task.tsx";

export const Bucket = ({title, tasks, bucketType, onDragEnd, onDragOver}: {
    title: string,
    tasks: TaskModel[],
    bucketType: BucketType,
    onDragEnd: (id: string) => void,
    onDragOver: (bucketType: BucketType) => void,
}) => {

    const [dragOver, setDragOver] = useState(false);

    const handleOnDragOver: DragEventHandler<HTMLDivElement> = (e) => {
        onDragOver(bucketType);
        if (!dragOver) {
            setDragOver(true);
        }
    }

    const handleDragEnd = (taskID: string) => {
        onDragEnd(taskID);
    }

    const handleDragLeave: DragEventHandler<HTMLDivElement> = () => {
        setDragOver(false);
    }

    const cardClassName = classNames({
        'card': true,
        'drag-over': dragOver
    })

    return (
        <div className='col-4'>
            <div className={cardClassName} onDragOver={handleOnDragOver} onDragLeave={handleDragLeave}>
                <div className="card-header">
                    {title}
                </div>
                <ul className="list-group list-group-flush">
                    {tasks.map((task: TaskModel) => <Task key={task.id} task={task} onDragEnd={handleDragEnd}/>)}
                </ul>
            </div>
        </div>
    )
}