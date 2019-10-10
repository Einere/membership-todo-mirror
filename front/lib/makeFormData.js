function makeFormData(obj) {
  return Object.entries(obj).reduce((acc, val) => {
    acc.append(val[0], val[1].toString());
    return acc;
  }, new FormData());
}

export {makeFormData};
