//length first
//breath first
//dp
//sliding window
//two pointer
//map
//recursion

const DynamicProg = () => {
    let stairs = 8;
    console.log(waysToClimb(stairs));
    robTheHouse([1, 2, 3, 1])
    console.log(jumpGame([2, 3, 1, 1, 4]));
}

const LenthOfLiS = (nums) => {

    if (nums.length === 0) return 0;

    let dpSequence = new Array(nums.length).fill(1);
    let maxSoFar = 1;
    for (let j = 1; j < nums.length; j++) {
        for (let i = 0; i < j; i++) {
            if (nums[j] > nums[i]) {
                dpSequence[j] = Math.max(dpSequence[i] + 1, dpSequence[j]);
            }
        }

        maxSoFar = dpSequence[j] > maxSoFar ? dpSequence[j] : maxSoFar;
    }

}

const robTheHouse = (house) => {
    let maxLootAtIndex = [];
    if (house.length == 0) return 0;
    maxLootAtIndex.push(house[0]);
    maxLootAtIndex.push(Math.max(house[0], house[1]));
    console.log(maxLootAtIndex);
    for (let i = 2; i < house.length; i++) {
        maxLootAtIndex.push(Math.max(maxLootAtIndex[i - 1], house[i] + maxLootAtIndex[i - 2]));
    }
    console.log(house);
    console.log(maxLootAtIndex);
    return maxLootAtIndex.pop();
}

const jumpGame = (arr) => {
    console.log(arr);
    let p2 = arr.length - 1;
    let goal = arr.length - 1;
    while (p2 >= 0) {
        if (arr[p2 - 1] + (p2 - 1) >= p2) {
            goal--;
            console.log(goal);
        }
        p2--;
    }
    return goal == 0
}

const waysToClimb = (stairs) => {
    let noofWays = [0, 1, 2, 3];
    for (let i = 4; i <= stairs; i++) {
        noofWays.push(noofWays[i - 1] + noofWays[i - 2]);
    }
    return noofWays.pop();
}

export default DynamicProg;