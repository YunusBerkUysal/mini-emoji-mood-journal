function MoodCard({ moodRecord, onDelete }) {

  const formattedDate = moodRecord.date.split('-').reverse().join('/');
  
  return (
    <div className="card" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
      
      <div>
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
          <span style={{ fontSize: '2rem', marginRight: '10px' }}>{moodRecord.emoji}</span>
          <strong style={{ fontSize: '1.2rem', marginRight: '10px' }}>{moodRecord.mood}</strong>
          <span style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>{formattedDate}</span>
        </div>
        
        {moodRecord.note && (
          <p style={{ margin: '0', color: 'var(--text-muted)', fontStyle: 'italic' }}>"{moodRecord.note}"</p>
        )}
      </div>

      <button 
        onClick={() => onDelete(moodRecord.id)}
        style={{ 
          backgroundColor: '#ef4444', 
          color: 'white', 
          border: 'none', 
          padding: '8px 12px', 
          borderRadius: '6px', 
          cursor: 'pointer',
          fontWeight: 'bold'
        }}
      >
        Sil
      </button>

    </div>
  );
}

export default MoodCard;