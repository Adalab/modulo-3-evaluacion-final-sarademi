import PropTypes from 'prop-types';

function NameFilter({ filterName, handleFilterName }) {
  return (
    <form className="form">
      <label htmlFor="name">¿A quién buscas?</label>
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

NameFilter.propTypes = {
  filterName: PropTypes.string.isRequired,
  handleFilterName: PropTypes.func.isRequired,
};

export default NameFilter;