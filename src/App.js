import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import IntroPage from './components/introPage';
import Page1 from './components/quizPages/Page1';
import Page2 from './components/quizPages/page2';
import Page3 from './components/quizPages/page3';
import Page4 from './components/quizPages/page4';
import Page5 from './components/quizPages/page5';
import Page6 from './components/quizPages/page6';


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<IntroPage />} />
      </Routes>
      <Routes>
        <Route path='/quiz/1' element={<Page1/>} />
      </Routes>
      <Routes>
        <Route path='/quiz/2' element={<Page2/>} />
      </Routes>
      <Routes>
        <Route path='/quiz/3' element={<Page3/>} />
      </Routes>
      <Routes>
        <Route path='/quiz/4' element={<Page4/>} />
      </Routes>
      <Routes>
        <Route path='/quiz/5' element={<Page5/>} />
      </Routes>
      <Routes>
        <Route path='/quiz/6' element={<Page6/>} />
      </Routes>
    </Router>
  );
}

export default App;
