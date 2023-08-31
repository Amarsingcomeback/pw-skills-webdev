let deliver = "standard";

switch (deliver){
    case "standard":
        console.log("might take 3-5 days");
        break;
    case "express" :
        console.log("1-2 days");
        break;
    case "overnight" :
        console.log("delivered the next day")
        break;
    default:
        console.log("you can't chose standard , express, overnight")
}
