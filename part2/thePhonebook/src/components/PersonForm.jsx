import React from 'react';

const PersonForm = ({
  onSubmit,
  onChangeName,
  onChangeNumber,
  nameValue,
  numberValue,
}) => {
  return (
    <>
      <form onSubmit={onSubmit}>
        <h2>Add a new</h2>
        <div>
          <label htmlFor="">name:</label>
          <input value={nameValue} type="text" onChange={onChangeName} />
          <label htmlFor="">number:</label>
          <input value={numberValue} type="text" onChange={onChangeNumber} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    </>
  );
};

export default PersonForm;
