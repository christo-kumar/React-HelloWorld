const SetPractice = () => {
    SetPracticeOpt();
}

const SetPracticeOpt = () => {
    //Create
    let array = [1, 2, 3];
    let set = new Set([...array]);

    //Update
    set.add(4);

    //Retrieve
    for (let num of set) {
        console.log(num)
    }

    /*Index are not available in set
    for (let index in set) {
        console.log(index);
    }*/
    //Delete
    set.delete(4);
    console.log(set);

}

export default SetPractice;