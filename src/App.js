import './App.css';
import Card from './UI/Card';
import Container from './UI/Container';
import StudentProfile from './StudentProfile';

function App() {
  var array = [
    {
      id: 0,
      name: "Alireza",
      age: 20,
      height: 187
    },
    {
      id: 1,
      name: "Amir",
      age: 22,
      height: 185
    },
    {
      id: 2,
      name: "Zahra",
      age: 17,
      height: 168
    },
    {
      id: 3,
      name: "Narges",
      age: 21,
      height: 170
    },
  ];


  return (
    <div className="app">
      <Container>
        <Card>
          <h1 className="list-topic">Students List</h1>
          <StudentProfile meStudent={array[0]} />
          <StudentProfile meStudent={array[1]} />
          <StudentProfile meStudent={array[2]} />
          <StudentProfile meStudent={array[3]} />
        </Card>
      </Container>
    </div>
  );
}

export default App;
