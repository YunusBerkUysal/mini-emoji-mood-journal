import MoodCard from './MoodCard';

function MoodList({ moods, onDeleteMood }) {
  
  if (moods.length === 0) {
    return (
      <div style={{ textAlign: 'center', padding: '30px', backgroundColor: 'var(--card-bg)', borderRadius: '12px', marginTop: '20px' }}>
        <h3 style={{ color: 'var(--text-muted)', margin: '0' }}>Henüz ruh hali kaydı yok.</h3>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Nasıl hissettiğini ekleyerek başlayabilirsin!</p>
      </div>
    );
  }

  return (
    <div style={{ marginTop: '20px' }}>
      <h3>Geçmiş Kayıtlar</h3>
      
      {moods.map((mood) => (
        <MoodCard 
          key={mood.id} 
          moodRecord={mood} 
          onDelete={onDeleteMood} 
        />
      ))}

    </div>
  );
}

export default MoodList;