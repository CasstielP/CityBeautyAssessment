import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import IntroPage from './components/introPage';
import Page1 from './components/quizPages/Page1';
import Page2 from './components/quizPages/page2';
import Page3 from './components/quizPages/page3';
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
    </Router>
  );
}

export default App;
