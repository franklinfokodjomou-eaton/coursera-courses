// for, while, nested loops
for (var i = 0; i < 4; i++) {
  console.log(i)
}

var i = 0;

while (i < 4) {
  console.log(i);
  i++;
}

for (var i = 0; i <= 3; i++) {
    console.log("This is line ", i)
}


// nested loops
for (var i = 1; i <= 2; i++) {        // outer loop
    for (var j = 1; j <= 7; j++) {    // inner loop
        console.log("Week " + i + ", Day " + j);
    }
}

/*
Make use a nested loops to display the summer months over two years.
*/
for (var year = 2023; year < 2025; year++) {
    console.log(year);
    for (var month = 6; month < 9; month++) {
        console.log("----------" + month);
    }
}

// Multiple nested loops can cause performance issues. Be careful when using them.