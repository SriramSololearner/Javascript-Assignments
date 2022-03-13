function CanDrive(hasDrivingLiscence, isTired, isSober) {
    // Write you code here
    if(hasDrivingLiscence == true){
        if(isTired == false && isSober == true)
        {
            return "You can drive"
        }
        else if(isTired == true && isSober == false)
        {
            return "You shouldn't drive"
        }
        else{
            return "You shouldn't drive"
        }

    }
    else{
        return "You cannot drive"
    }
}

module.exports = CanDrive;


// Steps:
// 1. Read and understand
// 2. New test cases and predict the output
// 3. Algorithm
// 4. Code
// 5. Dry run
// 6. Actual execution