function Message () {
    let todoList = ["asd"]
    return (
        <ul className="list-group">
            {
            todoList.map((item) => (
                <li className="list-group-item">{item}</li>
            ))}

        </ul>
    )
}
export default Message;