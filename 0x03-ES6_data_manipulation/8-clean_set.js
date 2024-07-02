export default function cleanSet(set, startString) {
  if (startString === '') { return ''; }
  const res = [];
  set.forEach((item) => {
    if (item.startsWith(startString)) {
      const newItem = item.replace(startString, '');
      res.push(newItem);
    }
  });
  return res.join('-');
}
