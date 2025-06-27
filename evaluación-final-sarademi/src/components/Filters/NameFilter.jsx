function NameFilter({ filterName, handleFilterName }) {
  return (
    <form className="form">
      <label htmlFor="name">Buscar por nombre:</label>
      <input
        type="text"
        id="name"
        name="name"
        value={filterName}
        onChange={handleFilterName}
        placeholder="Ej. Hermione"
      />
    </form>
  );
}

export default NameFilter;