import {DragEventHandler, useState} from "react";
import TaskModel from "./models/TaskModel.ts";

export const Task = ({task, onDragEnd}: {
    task: TaskModel,
    onDragEnd: (id: string) => void
}) => {

    const [dragging, setDragging] = useState(false);

    const handleDrag: DragEventHandler<HTMLLIElement> = (e) => {
        e.preventDefault();
        if (dragging) {
            return;
        }
        setDragging(true);
    }

    const handleDragStop: DragEventHandler<HTMLLIElement> = (event) => {
        event.preventDefault();
        if (!dragging) {
            return;
        }
        const id = event.target.dataset.taskId;
        onDragEnd(id)
        setDragging(false);
    }


    return (
        <>
            <li className='list-group-item'
                draggable={true}
                data-task-id={task.id}
                onDrag={handleDrag}
                onDragEnd={handleDragStop}
            ><span>{task.title}</span></li>
        </>
    )
}