
/*Use an if-else statement to check the value of browserName:
o If it is "chrome", display "Launching Chrome browser...".
o Otherwise, display "Launching default browser..."*/

let browsername = "chrome";
 if(browsername=="chrome"){
    console.log("Launching Chrome browser...")
 }
 else {
    console.log("Launching default browser")
 }

/*Use a switch statement to handle testType:
o When testType is "smoke", display "Running Smoke Tests...".
o When testType is "sanity", display "Running Sanity Tests...".
o When testType is "regression", display "Running Regression Tests...".
o If none of these match, display "Running Default Smoke Tests..."
*/

let testtype = "Regression"

switch (testtype) {
    case "smoke":
        console.log("running smoke testcases")
        break;

    case "functional":
        console.log("Running functional testcases")
        break;

    case "sanity":
        console.log("running sanity testcases")
        break;

    case "Regression":
        console.log("running regression testcases")
        break;

    default:
        console.log("no testcases")
        break;
}

