import TodoCard from "../TodoCard";

export const TodoList = ({ todos }) => {
    return (
        <div>
            {todos.map(todos => (<TodoCard data={todos} key={todos.id} />))}
        </div>
    )
}
export default TodoList