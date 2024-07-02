export default function hasValuesFromArray(set, arr) {
  const set2 = new Set(arr);
  return set2.isSubsetOf(set);
}
