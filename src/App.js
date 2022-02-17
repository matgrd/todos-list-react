import Form from "./Form";
import Tasks from "./Tasks";
import Buttons from "./Buttons";
import Section from "./Section";
import Header from "./Header";
import Container from "./Container";

let tasks = [
  {
    content: "wypić kawę",
    key: 1,
    done: true,
  },
  {
    content: "zasadzić drzewo",
    key: 2,
    done: false,
  },
];

let hideDoneTasks = false;

function App() {
  return (
    <Container>
      <Header title="Lista zadań" />
      <Section title="Dodaj nowe zadanie" body={<Form />} />
      <Section
        title="Lista zadań"
        body={<Tasks tasks={tasks} hideDoneTasks={hideDoneTasks} />}
        extraSectionContent={
          <Buttons tasks={tasks} hideDoneTasks={hideDoneTasks} />
        }
      />
    </Container>
  );
}

export default App;
