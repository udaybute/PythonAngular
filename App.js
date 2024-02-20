
import './App.css';
import React from 'react';
import UserProvider from './components/UserProvider';
import Home from './components/Home';
import Nav from './components/Nav';
import Profile from './components/Profile';
import Education from './components/Education';
import Experience from './components/Experience';
import Skills from './components/Skills';
import StudentForm from './components/StudentForm';
import Resume from './components/Resume';

function App() {
  const getPathname = () => {
    const path = window.location.pathname;
    return path.startsWith('/') ? path : `/${path}`;
  };

  const getPageComponent = () => {
    const pathname = getPathname();

    switch (pathname) {
      case '/':
        return <Home />;
      case '/profile':
        return <Profile />;
      case '/education':
        return <Education />;
      case '/experience':
        return <Experience />;
      case '/skills':
        return <Skills />;
      case '/studentform':
        return <StudentForm />;
      case '/resume':
        return <Resume />;
      default:
        return null;
    }
  };

  const component = getPageComponent();

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
     

