// let matrixA;

document.querySelector('.submit_textarea1and2').addEventListener('click', function () {
  const input1 = document.querySelector('.textarea1').value;
  const input2 = document.querySelector('.textarea2').value;
  const matrixA = stringToGrid(input1);
  const matrixB = stringToGrid(input2);
  if (matrixA[0].length == matrixB.length && isMatrixValid(matrixA) && isMatrixValid(matrixB)) {
    // console.log(matrixA);
    // console.log(matrixB);
    let result = matrixMultiplication(matrixA, matrixB);
    // console.log(result);
    result = gridToString(result)
    // console.log(result);
    document.querySelector('.textarea3').value = result;

  } else {
    alert('Please Enter Valid Matrix');
  }

})

function isMatrixValid(matrix) {
  let rowLength = matrix[0].length;
  for (let i = 0; i < matrix.length; i++) {
    if (matrix[i].length !== rowLength) {
      return false;
    }
  }
  return true;
}

function stringToGrid(input) {
  let grid = input.split('\n')
  // console.log(grid)
  for (let i = 0; i < grid.length; i++) {
    // console.log(grid[i])
    // console.log(grid[i].trim());
    grid[i] = grid[i].trim().split(',')
    for (let p = 0; p < grid[i].length; p++) {
      grid[i][p] = Number(grid[i][p]);
    }
  }
  // console.log(grid);
  return grid;
}

function gridToString(result) {
  for (let i = 0; i < result.length; i++) {
    result[i] = result[i].join('\t')
  }
  result = result.join('\n');
  return result;
}




function matrixMultiplication(A, B) {
  let x;
  let j;
  let y;
  let box1Value = 0;
  let splitValue;
  let arr = [];
  for (x = 0; x < A.length; x++) {
    for (j = 0; j < B[x].length; j++) {
      for (y = 0; y < B.length; y++) {
        splitValue = A[x][y] * B[y][j];
        box1Value = box1Value + splitValue;
      }
      arr.push(box1Value)
      box1Value = 0;
    }
  }
  console.log(arr);
  const grid = creatematrix1(arr, A.length, B[0].length)
  return grid;
}

// let A = [
//   [1, 2, 5, 4],
//   [1, 1, 5, 2],
//   [1, 2, 5, 4]
// ];

// let B = [
//   [3, 4, 5],
//   [2, 3, 4],
//   [3, 9, 0],
//   [4, 3, 2]
// ]
// matrixMultiplication(A, B);



// let array1 = [38, 67, 21, 28, 58, 13, 38, 67, 21, 4, 32, 15]

function creatematrix1(array1, row, col) {
  let mainarray = [];
  let i = 0;
  let row1 = 0;
  let count = 0;
  for (i = 0; i < row; i++) {
    mainarray.push([]);
  }
  for (j = 0; j < array1.length; j++) {
    mainarray[row1].push(array1[j])
    count++;
    if (count == col) {
      row1++;
      count = 0;
    }
  }
  return mainarray;
}

// creatematrix1(array1, 3, 4);


// function creatematrix2(array1, rows, column) {
//   let row1 = 0;
//   let mainarray = []
//   for (let i = 0; i < rows; i++) {
//     mainarray.push([])
//   }
//   for (let j = 0; j < array1.length; j++) {
//     row1 = Math.floor(j / column);
//     mainarray[row1].push(array1[j])
//   }
//   console.log(mainarray);
// }
// creatematrix2(array1, 3, 4)