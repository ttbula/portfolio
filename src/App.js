import './App.css';
import Header from './components/header/Header';
import About from './components/about/About';
import Experience from './components/experience/Experience';
import Projects from './components/projects/Projects';

const App = () => {
  return (
    <div>
      <Header />
      <About />
      <Experience />
      <Projects />
    </div>
  );
}

export default App;
