
const RainWater = () => {
    RainWaterOPT([0, 1, 0, 2, 1, 0, 3, 1, 0, 1, 2]);
}

const RainWaterOPT = (arr) => {
    let totatWater = 0;
    let p1 = 0;
    let p2 = arr.length - 1;
    let index = 0;
    let minLeft = arr[0];
    let minRight = arr[(arr.length - 1)];
    let minBound = 0;
    while (index < arr.length) {
        if (arr[p1] <= arr[p2]) { //Action is taken at left
            if (arr[p1] > minLeft) {
                //update the lower left edge
                minLeft = arr[p1];
            } else {
                //water is accumulated with minLeft
                let CurrentWater = minLeft - arr[p1];
                console.log("Current Index = " + index + " Water Acc = " + CurrentWater);
                totatWater = totatWater + CurrentWater;
            }
            p1++;
        } else { //Action is taken on right
            if (arr[p2] > minRight) {
                //update the lower right edge
                minRight = arr[p2];
            } else {
                //water is accumulated on right
                let CurrentWater = minRight - arr[p2];
                console.log("Current Index = " + index + " Water Acc = " + CurrentWater);
                totatWater = totatWater + CurrentWater;
            }
            p2--;
        }
        index++;
    }

    console.log("Total Water = " + totatWater);

}

export default RainWater;