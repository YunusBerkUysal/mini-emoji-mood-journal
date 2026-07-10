import { useState, useEffect } from 'react'
import MoodForm from './components/MoodForm'
import MoodList from './components/MoodList'
import MoodStats from './components/MoodStats'
import MoodFilter from './components/MoodFilter'

function App() {
  const [moods, setMoods] = useState(() => {
    const savedMoods = localStorage.getItem('moodRecords');
    if (savedMoods) {
      return JSON.parse(savedMoods);
    }
    return [];
  });

  const [filter, setFilter] = useState('All');

  useEffect(() => {
    localStorage.setItem('moodRecords', JSON.stringify(moods));
  }, [moods]); 

  const handleAddMood = (newRecord) => {
    setMoods([newRecord, ...moods]);
  };

  const handleDeleteMood = (idToDelete) => {
    const updatedMoods = moods.filter((mood) => mood.id !== idToDelete);
    setMoods(updatedMoods);
  };

  const filteredMoods = filter === 'All' ? moods : moods.filter(mood => mood.mood === filter);

  return (
    <div className="container">
      <h1>Mini Emoji Mood Journal</h1>

      <MoodStats moods={moods} />

      <MoodFilter currentFilter={filter} onFilterChange={setFilter} />

      <MoodForm onAddMood={handleAddMood} />

      <MoodList moods={filteredMoods} onDeleteMood={handleDeleteMood} />
      
    </div>
  )
}

export default App