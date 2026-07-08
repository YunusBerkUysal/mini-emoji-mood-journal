import { useState, useEffect } from 'react'
import MoodForm from './components/MoodForm'

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

  return (
    <div className="container">
      <h1>Mini Emoji Mood Journal</h1>

      <MoodForm />
      
    </div>
  )
}

export default App