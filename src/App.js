import Form from "./Form";
import Tasks from "./Tasks";
import Buttons from "./Buttons";
import Section from "./Section";
import Header from "./Header";
import Container from "./Container";

let tasks = [
  {
    content: "wypić kawę",
    id: 1,
    done: true,
  },
  {
    content: "zasadzić drzewo",
    id: 2,
    done: false,
  },
];

let hideDone = false;

function App() {
  return (
    <Container>
      <Header title="Lista zadań" />
      <Section title="Dodaj nowe zadanie" body={<Form />} />
      <Section
        title="Lista zadań"
        body={<Tasks tasks={tasks} hideDone={hideDone} />}
        extraSectionContent={<Buttons tasks={tasks} hideDone={hideDone} />}
      />
    </Container>
  );
}

export default App;
