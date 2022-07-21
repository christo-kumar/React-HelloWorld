const TwoSum = () => {
    console.log("======= Fun Begins ========");
    let result1 = twoSumBT([2, 7, 11, 15], 9);
    console.log(result1);
    let result2 = twoSumOpt([2, 7, 11, 15], 9);
    console.log(result2);
}

const twoSumBT = (arr, target) => {
    console.log("======= Two Sum Brute Force ========");
    for (let p1 = 0; p1 < arr.length - 1; p1++) {
        for (let p2 = p1 + 1; p2 < arr.length; p2++) {
            let sum = arr[p1] + arr[p2];
            if (sum === target) {
                return [p1, p2];
            }
        }
    }
    return null;
}

const twoSumOpt = (arr, target) => {
    console.log("======= Two Sum Optmised ========");
    const numsMap = {};
    for (let p1 = 0; p1 < arr.length; p1++) {
        const delta = target - arr[p1]; //9, 7, 11, 
        const numAvailable = numsMap[arr[p1]];
        if (numAvailable !== undefined) {
            return [numAvailable, p1];
        } else {
            numsMap[delta] = p1;
        }


    }
}

export default TwoSum;