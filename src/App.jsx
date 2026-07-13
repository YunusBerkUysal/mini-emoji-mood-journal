import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MoodForm from './components/MoodForm'
import MoodList from './components/MoodList'
import MoodStats from './components/MoodStats'
import MoodFilter from './components/MoodFilter'
import Navbar from './components/Navbar'

function App() {
  const [moods, setMoods] = useState(() => {
    const savedMoods = localStorage.getItem('moodRecords');
    if (savedMoods) {
      return JSON.parse(savedMoods);
    }
    return [];
  });

  const [filter, setFilter] = useState('Tümü');

  const [isDarkMode, setIsDarkMode] = useState(() => {
    return localStorage.getItem('darkMode') === 'true';
  });

  useEffect(() => {
    localStorage.setItem('moodRecords', JSON.stringify(moods));
  }, [moods]); 

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
    localStorage.setItem('darkMode', isDarkMode);
  }, [isDarkMode]);

  const handleAddMood = (newRecord) => {
    setMoods([newRecord, ...moods]);
  };

  const handleDeleteMood = (idToDelete) => {
    const updatedMoods = moods.filter((mood) => mood.id !== idToDelete);
    setMoods(updatedMoods);
  };

  const filteredMoods = filter === 'Tümü' ? moods : moods.filter(mood => mood.mood === filter);

  return (
    <Router>
      <div className="container">
        <button 
          className="theme-toggle" 
          onClick={() => setIsDarkMode(!isDarkMode)}
          title={isDarkMode ? "Aydınlık Moda Geç" : "Karanlık Moda Geç"}
        >
          {isDarkMode ? "☀️" : "🌙"}
        </button>

        <h1 style={{ marginTop: '40px' }}>Mini Emoji Mood Journal</h1>
        
        <Navbar />

        <Routes>
          
          <Route path="/" element={
            <>
              <MoodStats moods={moods} />
              <MoodForm onAddMood={handleAddMood} />
            </>
          } />

          <Route path="/history" element={
            <>
              <MoodFilter currentFilter={filter} onFilterChange={setFilter} />
              <MoodList moods={filteredMoods} onDeleteMood={handleDeleteMood} />
            </>
          } />

        </Routes>
        
      </div>
    </Router>
  )
}

export default App