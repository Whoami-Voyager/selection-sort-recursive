function selectionSortRecursive(arr) {
  if (arr.length <= 1){
    return arr
  }
  const smol = Math.min(...arr)
  const index = arr.indexOf(smol)
  arr.splice(index, 1)
  return [smol, ...selectionSortRecursive(arr)]
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: [-1, 2, 3, 5]");
  console.log("=>", selectionSortRecursive([3, -1, 5, 2]));

  console.log("");
}

module.exports = selectionSortRecursive;

// Please add your pseudocode to this file
// And a written explanation of your solution

// recursively calls the function in the return being inside an array
// slices the array every time it's called
