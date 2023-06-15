import React from 'react';

export default function SelectBox(props) {
  const { name, data, defaultValue, onChange } = props;
  const handleAddChange=props.handleAddChange
  const myView = data.map(dataItem => (
    <option key={dataItem.value} value={dataItem.value}>
      {dataItem.label}
    </option>
  ));

  const handleOnChange = event => {
    const value = event.target.value;
    onChange(value);
    if(handleAddChange)
      handleAddChange(event)
  };

  return (
    <select name={name} value={defaultValue} onChange={handleOnChange}>
      <option value={0}>........</option>
      {myView}
    </select>
  );
}