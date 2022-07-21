
const MaxWater = () => {
    const result = maxWaterBT([7, 10, 2, 3, 11]);
    console.log(result);
    const optResult = maxWaterOPT([7, 10, 2, 3, 11]);
    console.log("==========");
    console.log(optResult);
}

const maxWaterBT = (arr) => {
    //p1, p2
    //lenght = min(arr[p1], arr[p2])
    //breadth = p2 - p1
    let maxArea = 0;
    for (let p1 = 0; p1 < arr.length - 1; p1++) {
        for (let p2 = p1 + 1; p2 < arr.length; p2++) {
            let length = arr[p1] < arr[p2] ? arr[p1] : arr[p2];
            let breadth = p2 - p1;
            let currentArea = length * breadth;
            console.log("Current Area = " + currentArea);
            maxArea = currentArea > maxArea ? currentArea : maxArea;
        }
    }
    return maxArea;
}

const maxWaterOPT = (arr) => {
    let maxArea = 0;
    let p1 = 0;
    let p2 = arr.length - 1;
    let index = 0;

    while (index < arr.length) {
        let length = 0;
        let breadth = 0;
        if (arr[p1] < arr[p2]) {
            length = arr[p1]
            breadth = p2 - p1;
            p1++;
        } else {
            length = arr[p2]
            breadth = p2 - p1;
            p2--;
        }
        let currentArea = length * breadth;
        console.log("Current Areaa = " + currentArea);
        maxArea = currentArea > maxArea ? currentArea : maxArea;
        index++;
    }
    return maxArea;
}

export default MaxWater;