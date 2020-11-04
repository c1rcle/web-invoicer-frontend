export const filterProperties = (oldData, newData) => {
  const filteredKeys = Object.keys(newData).filter(key => newData[key] !== oldData[key]);

  if (filteredKeys.length === 0) return;

  return filteredKeys.reduce((prev, key) => ({ ...prev, [key]: newData[key] }), {});
};

export const getColumnCellStyle = width => {
  return {
    cellStyle: {
      minWidth: width,
      maxWidth: width
    },
    headerStyle: {
      minWidth: width,
      maxWidth: width
    }
  };
};
