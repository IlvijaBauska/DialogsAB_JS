function count(start, end, type) {
  if (type === 'all') {
    for (let i = start; i <= end; i++) {
      console.log(i);
    }
  } else {
    console.log("Unsupported type. Please use 'all' to display all numbers.");
  }
}

count(1, 30, 'all');