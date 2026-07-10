function MoodStats({ moods }) {
  
  if (moods.length === 0) return null;

  const totalRecords = moods.length;

  const moodCounts = moods.reduce((acc, curr) => {
    acc[curr.mood] = (acc[curr.mood] || 0) + 1;
    return acc;
  }, {}); 

  let mostFrequentMood = "";
  let maxCount = 0;

  for (const [mood, count] of Object.entries(moodCounts)) {
    if (count > maxCount) {
      maxCount = count;
      mostFrequentMood = mood;
    }
  }

  return (
    <div className="card" style={{ display: 'flex', justifyContent: 'space-around', backgroundColor: '#e0e7ff', border: '1px solid #c7d2fe' }}>
      
      <div style={{ textAlign: 'center' }}>
        <h4 style={{ margin: '0 0 5px 0', color: 'var(--text-muted)' }}>Toplam Kayıt</h4>
        <span style={{ fontSize: '1.8rem', fontWeight: 'bold', color: 'var(--primary-color)' }}>
          {totalRecords}
        </span>
      </div>

      <div style={{ textAlign: 'center' }}>
        <h4 style={{ margin: '0 0 5px 0', color: 'var(--text-muted)' }}>En Sık Hissedilen</h4>
        <span style={{ fontSize: '1.8rem', fontWeight: 'bold', color: 'var(--primary-color)' }}>
          {mostFrequentMood}
        </span>
      </div>

    </div>
  );
}

export default MoodStats;