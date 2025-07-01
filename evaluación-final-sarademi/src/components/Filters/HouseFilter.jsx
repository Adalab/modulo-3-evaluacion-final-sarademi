import PropTypes from 'prop-types';

function HouseFilter({ filterHouse, handleFilterHouse }) {
  return (
    <form className="form">
      <label htmlFor="house">¿A qué casa pertenece?</label>
      <select
        id="house"
        name="house"
        value={filterHouse}
        onChange={handleFilterHouse}
      >
        <option value="">Todas</option>
        <option value="Gryffindor">Gryffindor</option>
        <option value="Slytherin">Slytherin</option>
        <option value="Hufflepuff">Hufflepuff</option>
        <option value="Ravenclaw">Ravenclaw</option>
      </select>
    </form>
  );
}

HouseFilter.propTypes = {
  filterHouse: PropTypes.string.isRequired,
  handleFilterHouse: PropTypes.func.isRequired,
};

export default HouseFilter;