function MoodFilter({ currentFilter, onFilterChange }) {
  return (
    <div className="card" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '15px 20px' }}>
      <label htmlFor="filter" style={{ fontWeight: 'bold', margin: 0 }}>Kayıtları Filtrele:</label>
      
      <select
        id="filter"
        className="form-control"
        style={{ width: 'auto', minWidth: '200px', margin: 0 }}
        value={currentFilter}
        onChange={(e) => onFilterChange(e.target.value)}
      >
        <option value="All">Tüm Kayıtlar</option>
        <option value="Happy">Mutlu (Happy)</option>
        <option value="Normal">Normal</option>
        <option value="Sad">Üzgün (Sad)</option>
        <option value="Angry">Kızgın (Angry)</option>
        <option value="Tired">Yorgun (Tired)</option>
        <option value="Stressed">Stresli (Stressed)</option>
      </select>
    </div>
  );
}

export default MoodFilter;