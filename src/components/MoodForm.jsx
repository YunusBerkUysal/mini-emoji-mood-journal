import { useState } from 'react';

function MoodForm() {
  const [date, setDate] = useState('');
  const [mood, setMood] = useState('');
  const [emoji, setEmoji] = useState('');
  const [note, setNote] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    console.log("Yeni Kayıt:", { date, mood, emoji, note });
  };

  return (
    <form className="card" onSubmit={handleSubmit}>
      <h2>Nasıl Hissediyorsun?</h2>

      <div className="form-group">
        <label htmlFor="date">Tarih</label>
        <input 
          type="date" 
          id="date"
          className="form-control"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </div>

      <div className="form-group">
        <label htmlFor="mood">Ruh Hali</label>
        <select 
          id="mood" 
          className="form-control"
          value={mood}
          onChange={(e) => setMood(e.target.value)}
        >
          <option value="">Seçiniz...</option>
          <option value="Happy">Mutlu (Happy)</option>
          <option value="Normal">Normal</option>
          <option value="Sad">Üzgün (Sad)</option>
          <option value="Angry">Kızgın (Angry)</option>
          <option value="Tired">Yorgun (Tired)</option>
          <option value="Stressed">Stresli (Stressed)</option>
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="emoji">Emoji</label>
        <select 
          id="emoji" 
          className="form-control"
          value={emoji}
          onChange={(e) => setEmoji(e.target.value)}
        >
          <option value="">Seçiniz...</option>
          <option value="😊">😊 (Mutlu)</option>
          <option value="😐">😐 (Normal)</option>
          <option value="😢">😢 (Üzgün)</option>
          <option value="😠">😠 (Kızgın)</option>
          <option value="🥱">🥱 (Yorgun)</option>
          <option value="🤯">🤯 (Stresli)</option>
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="note">Not (İsteğe bağlı)</label>
        <textarea 
          id="note" 
          className="form-control" 
          rows="3"
          placeholder="Bugün neler oldu?"
          value={note}
          onChange={(e) => setNote(e.target.value)}
        ></textarea>
      </div>

      <button type="submit" className="btn-primary">Kaydet</button>
    </form>
  );
}

export default MoodForm;