import React from "react";
import Form from "./Form";
import Tasks from "./Tasks";
import Buttons from "./Buttons";
import Section from "./Section";
import Header from "./Header";
import Container from "./Container";

function App() {
  const [hideDone, setHideDone] = React.useState(false);
  const [tasks, setTasks] = React.useState([
    { content: "wypić kawę", id: 1, done: true },
    { content: "zasadzić drzewo", id: 2, done: false },
  ]);

  const toggleHideDone = () => {
    setHideDone((hideDone) => !hideDone);
  };

  const removeTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const toggleTaskDone = (id) => {
    setTasks(
      tasks.map((task) => {
        if (task.id === id) {
          return { ...task, done: !task.done };
        }

        return task;
      })
    );
  };

  const setAllDone = () => {
    setTasks(
      tasks.map((task) => ({
        ...task,
        done: true,
      }))
    );
  };

  return (
    <Container>
      <Header title="Lista zadań" />
      <Section title="Dodaj nowe zadanie" body={<Form />} />
      <Section
        title="Lista zadań"
        body={
          <Tasks
            tasks={tasks}
            hideDone={hideDone}
            removeTask={removeTask}
            toggleTaskDone={toggleTaskDone}
          />
        }
        extraSectionContent={
          <Buttons
            tasks={tasks}
            hideDone={hideDone}
            toggleHideDone={toggleHideDone}
            setAllDone={setAllDone}
          />
        }
      />
    </Container>
  );
}

export default App;
