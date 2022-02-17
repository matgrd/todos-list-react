import "./style.css";

const Tasks = ({ tasks, hideDoneTasks }) => (
  <ul className="listTasks">
    {tasks.map((task) => (
      <li
        key={task.key}
        className={`listTasks__item
          ${task.done && hideDoneTasks ? "listTasks__item--hidden" : ""}`}
      >
        <button className="list__button list__button--toggleDone">
          {task.done ? "✔" : ""}
        </button>
        <span
          className={`listTasks__content
            ${task.done ? "listTasks__content--done" : ""}`}
        >
          {task.content}
        </span>
        <button className="list__button list__button--remove">🗑</button>
      </li>
    ))}
  </ul>
);

export default Tasks;
