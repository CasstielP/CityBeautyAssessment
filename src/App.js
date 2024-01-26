import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import IntroPage from './components/introPage';



function App() {
  return (
    <Router>
      <Routes>
        <Route path='/intro' element={<IntroPage />} />
      </Routes>
    </Router>
  );
}

export default App;
