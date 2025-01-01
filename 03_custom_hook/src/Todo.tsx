const Todo = ({text, done, onClick}: {
    text: string,
    done: boolean,
    onClick: () => void
}) => {
    return (
        <li><input type={"checkbox"}
                   checked={done}
                   onChange={() => onClick()}/>{text}</li>
    )
}

export default Todo;