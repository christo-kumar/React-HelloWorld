const MapPractice = () => {
    MapPracticeOpt();
}

const MapPracticeOpt = () => {
    //Create
    let map = new Map([["apple", 500], ["banana", 100]]);
    //Update
    map.set("Cherry", 600);
    //Retrieve
    console.log(map.get("Cherry"));
    for (let key of map.keys()) {
        console.log(map.get(key));
    }
    //Delete
    map.delete("banana");
    console.log(map);
}

export default MapPractice;