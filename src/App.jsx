import { useState, useEffect } from 'react'
import MoodForm from './components/MoodForm'
import MoodList from './components/MoodList'

function App() {
  const [moods, setMoods] = useState(() => {
    const savedMoods = localStorage.getItem('moodRecords');
    if (savedMoods) {
      return JSON.parse(savedMoods);
    }
    return [];
  });

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

  return (
    <div className="container">
      <h1>Mini Emoji Mood Journal</h1>

      <MoodForm onAddMood={handleAddMood} />

      <MoodList moods={moods} onDeleteMood={handleDeleteMood} />
      
    </div>
  )
}

export default App