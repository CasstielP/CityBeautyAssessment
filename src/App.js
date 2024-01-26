import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import IntroPage from './components/introPage';
import Page1 from './components/quizPages/Page1';


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<IntroPage />} />
      </Routes>
      <Routes>
        <Route path='/quiz/1' element={<Page1/>} />
      </Routes>
    </Router>
  );
}

export default App;
