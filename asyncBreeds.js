const fs = require('fs');

const breedDetailsFromFile = function (breed, callback) {
  console.log('breedDetailsFromFile: Calling readFile...');
  fs.readFile(`./data/${breed}.txt`, 'utf8', (error, data) => {
    // ISSUE: Returning from *inner* callback function, not breedDetailsFromFile
    
    //CHANGE: Pass data into callback instead of returning it directly
    console.log("In readFile's Callback: it has the data.");
    if (!error) callback(data);
  });
  //ISSUE: Attempting to return data out here will also not work.
  //  Currently not reuturing anything from here, so breedDetailsFromFile function returns undefined
};

//CHANGE 1: Moved the console.log into a new function
const printOutCatBreed = breed => {
  console.log(`Return Value: `, breed)
}

//we try to get the return value
breedDetailsFromFile('Bombay', printOutCatBreed);