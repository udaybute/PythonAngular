
import './App.css';
import Education from './components/Education';
import Experience from './components/Experience';
import Home from './components/Home';
import Nav from './components/Nav';
import Profile from './components/Profile';
import Resume from './components/Resume';
import Skills from './components/Skills';
import StudentForm from './components/StudentForm';
import UserProvider from './components/UserProvider';

function App() {
  let component = null;
  switch (window.location.pathname) {
    case "/":
      component = <Home />
      break
    case "/profile":
      component = <Profile />
      break
    case "/education":
      component = <Education />
      break
    case "/experience":
      component = <Experience />
      break
    case "/skills":
      component = <Skills />
      break
    case "/studentform":
      component = <StudentForm />
      break
      case "/resume":
      component = <Resume />
      break

  }
  return (
    <UserProvider>
      <div className="App">
        <Nav />
        {component}
      </div>
    </UserProvider>
  );
}

export default App;
