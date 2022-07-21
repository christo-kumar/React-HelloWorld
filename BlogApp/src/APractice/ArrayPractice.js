const ArrayPractice = () => {
    ArrayPracticeOpt();
}

const ArrayPracticeOpt = () => {
    hocExample();
    iterationExample();
    crudExample();
    concatExample();
    typeConversion();
    generalFunction();
    arrayExtension();
}

const hocExample = () => {

    let person1 = { name: "Christo", age: 40 };
    let person2 = { name: "Abhinav", age: 45 };
    let persons = [person1, person2];

    //Map
    let personsWithInc = persons.map(person => {
        const { name, age } = person;
        return { name: name, age: age, income: age * 2 };
    });
    console.log(personsWithInc);

    //Filter
    let fltrArray = persons.filter(person => {
        return person.age > 40;
    });
    console.log(fltrArray);

    //Reduce
    let totalIncome = personsWithInc.reduce((acc, person) => {
        acc = acc + person.income;
        return acc;
    }, 0);
    console.log(totalIncome);

    //Sort
    personsWithInc.sort((person1, person2) => {
        return person2.income - person1.income;
    })
    console.log(personsWithInc);

    //Multi Array
    let multiArray = [[1, 2], [3, 4]];
    let flatArray = multiArray.flat(1);
    console.log(flatArray);
    let flatMapArray = multiArray.flatMap(pair => {
        return pair[0] + pair[1];
    });
    console.log(flatMapArray);
}

const iterationExample = () => {
    let fruits = ["Banana", "Orange", "Apple", "Mango"];
    //index based
    for (let index = 0; index < fruits.length; index++) {
        console.log(fruits[index]);
    }
    //With in
    for (let index in fruits) {
        console.log(fruits[index]);
    }
    //With of
    for (let fruit of fruits) {
        console.log(fruit);
    }
}

const crudExample = () => {
    //Create and Fill
    let array = new Array(10);
    array.fill(2, 0, 10);

    //Update - push pop shift unshift
    array.push(3);
    array.pop();
    array.push(4);
    array.shift();
    array.unshift(1);
    //Update - splice
    array.splice(1, 1, 5);
    array = array.slice(0, 5);
    console.log("-------");
    console.log(array);
    //subarray 
    let subArray = array.slice(0, 3);
    console.log(subArray);
    //update - concate
    let thirdArray = array.concat(subArray);
    console.log(thirdArray);
    //delete - splice, pop, shift
    array.pop();
    array.shift();
    console.log(array);

}

const concatExample = () => {
    let array1 = [11, 3, 5];
    array1[0] = 0;
    array1[11] = 100;
    console.log(array1[10]);
    array1.push(6);
    array1.push(7);
    let array2 = [18, 21, 2];

    //WAY-1
    let array3 = array1.concat(array2);
    console.log(array3);
    //WAY-2
    let array4 = [...array1, 18, 21, 2]
    console.log(array4);
}

const typeConversion = () => {
    //String to Array and vice versa
    let str = "Hello World";
    let charArray = Array.from(str);
    console.log(charArray);
    let charArray1 = [...str];
    console.log(charArray1);
    let str2 = charArray1.join("");
    console.log(str2);

    //string to int
    let numStr = "15";
    let num = parseInt(numStr, 10);
    let numStr1 = num.toString();
    console.log(numStr1);

}

const generalFunction = () => {

    const findFunc = (value) => {
        return value >= 1;
    }

    //Create
    //fill Demo
    let array = new Array(10);
    array.fill(1, 0, 10);

    //find same as some
    let result1 = array.find(findFunc);
    console.log(result1);
    //findIndex Demo
    let result2 = array.findIndex(findFunc);
    console.log(result2);

    //reverse
    let fruits = ["Banana", "Orange", "Apple", "Mango"];
    let revFruits = fruits.reverse();
    console.log(revFruits);
    //valueOf
    let rev = revFruits.valueOf();
    console.log("***");
    console.log(rev);
    //toString - returns string seperated by comma
    console.log(revFruits.toString());

}

const arrayExtension = () => {
    /*Array.prototype.myFill = function () {
        this.fill(0, this.length);
    }

    let arr = new Array(10);
    arr.myFill();
    console.log(arr);*/
}



export default ArrayPractice;