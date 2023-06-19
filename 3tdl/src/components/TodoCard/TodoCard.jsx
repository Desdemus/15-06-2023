export const TodoCard = ({ data }) => {
    return (
        <ul>
            <li>{data.id}</li>
            <li>{data.title}</li>
            <li>{data.completed ? 'Completed' : 'Not completed'}</li>
        </ul>
    )
}

export default TodoCard 