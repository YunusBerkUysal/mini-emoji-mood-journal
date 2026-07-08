import { useState, useEffect } from 'react'

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
      <p>Veri katmanı ve mimari altyapı başarıyla kuruldu!</p>
    </div>
  )
}

export default App