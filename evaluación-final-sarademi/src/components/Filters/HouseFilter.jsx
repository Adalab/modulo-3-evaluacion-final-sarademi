function HouseFilter({ filterHouse, handleFilterHouse }) {
  return (
    <form className="form">
      <label htmlFor="house">Filtrar por casa:</label>
      <select id="house" value={filterHouse} onChange={handleFilterHouse}>
        <option value="">Todas</option>
        <option value="Gryffindor">Gryffindor</option>
        <option value="Slytherin">Slytherin</option>
        <option value="Hufflepuff">Hufflepuff</option>
        <option value="Ravenclaw">Ravenclaw</option>
      </select>
    </form>
  );
}

export default HouseFilter;