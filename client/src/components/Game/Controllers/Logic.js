//Sets the value a position inside the array
let setValues = (arr,row,col) =>{
    arr[row][col] = !arr[row][col]
};


/*
 * Take in arr and positions and returns an Int
 * array arr
 * int row_pos
 * int col_pos
 * returns int
 */
const calculateNeighbors = (arr, row_pos, col_pos) =>{
    let row_limit = arr.length-1;
    let col_limit = arr[0].length-1;
    let neighbors = 0;

    //Check surrounding arrays for neighbors that doesn't go into the negative positions
    for(let x = Math.max(0, row_pos-1); x <= Math.min(row_pos+1, row_limit); x++) {
        for(let y = Math.max(0, col_pos-1); y <= Math.min(col_pos+1, col_limit); y++) {
            if(x !== row_pos || y !== col_pos) {
                if(arr[x][y])
                {
                    neighbors++;
                }
            }
        }
    }

    return neighbors;
};

/*
 * Takes in the should of numbers neighbors, current state, and r
 * int numberOfNeighbors
 * bol currentState
 * returns bol
 */
const shouldChange = (numberOfNeighbors,currentState) =>{

    if(currentState){
        //If alive
        if(numberOfNeighbors < 2){
            return true
        }else return numberOfNeighbors > 3;
    }else{
        //If dead
        return numberOfNeighbors === 3;

    }

};


const runChange = (arr) => {
    //Deep clone the array of objects structure
    let nextArr = JSON.parse(JSON.stringify(arr));

    //Loop through all rows and columns
    arr.forEach((row,row_pos) => {
        row.forEach((col,col_pos) => {
            let neighbors = calculateNeighbors(arr,row_pos,col_pos);
            let change = shouldChange(neighbors,arr[row_pos][col_pos]);
            if(change){
                setValues(nextArr,row_pos,col_pos);
            }

        });

    });

    return nextArr;

};

module.exports = {
    runChange,
};
