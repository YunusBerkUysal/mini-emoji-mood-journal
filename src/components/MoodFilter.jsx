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
        <option value="Tümü">Tüm Kayıtlar</option>
        <option value="Mutlu">Mutlu</option>
        <option value="Normal">Normal</option>
        <option value="Üzgün">Üzgün</option>
        <option value="Kızgın">Kızgın</option>
        <option value="Yorgun">Yorgun</option>
        <option value="Stresli">Stresli</option>
      </select>
    </div>
  );
}

export default MoodFilter;