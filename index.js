//require libraries
const util = require("util");

// Variables to connect modules to application
const createEmployee = require("./utils/createEmployee");

function init () {
    //Prompt user for information. no need to add the other ones, bc this one will contiunue the process
 createEmployee.createManager(); 
}


init();

