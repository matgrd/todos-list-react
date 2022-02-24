import "./style.css";

const Tasks = ({ tasks, hideDone, removeTask, toggleTaskDone }) => (
  <ul className="listTasks">
    {tasks.map((task) => (
      <li
        key={task.id}
        className={`listTasks__item
          ${task.done && hideDone ? "listTasks__item--hidden" : ""}`}
      >
        <button
          className="list__button list__button--toggleDone"
          onClick={() => toggleTaskDone(task.id)}
        >
          {task.done ? "✔" : ""}
        </button>
        <span
          className={`listTasks__content
            ${task.done ? "listTasks__content--done" : ""}`}
        >
          {task.content}
        </span>
        <button
          className="list__button list__button--remove"
          onClick={() => removeTask(task.id)}
        >
          🗑
        </button>
      </li>
    ))}
  </ul>
);

export default Tasks;
