function Filter({filter, onChange}) {

  const handleChange = (event) => {
    const name = event.currentTarget.name;
    const value = event.currentTarget.value;

    onChange(name, value)
  };

  return (
    <label>Find contacts by name
      <input
        value={filter}
        onChange={handleChange}
        name='filter'
      />
    </label>
  );
}

export default Filter;
