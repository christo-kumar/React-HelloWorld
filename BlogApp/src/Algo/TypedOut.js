const TypeOutString = () => {
    let comparision = TypedOutStrBF("a#c", "ab##c");
    //console.log(comparision);
    //let comp1 = TypedOutStrOpt("ab##c", "a#c");
    console.log(comparision);
}

const TypedOutStrBF = (s, t) => {
    let result1 = getAjustedStr1(s);
    let result2 = getAjustedStr1(t);
    return result1 === result2;
}
// let charArray = [...s];

const getAjustedStr1 = (s) => {
    let copyArray = [];
    for (let index in s) {
        console.log(s[index]);
        if (s[index] === "#") {
            if (copyArray.length > 0) {
                copyArray.pop();
            }
        } else {
            copyArray.push(s[index]);
        }
    }
    return copyArray.join("");
}

const TypedOutStrOpt = (s, t) => {

    let p1 = s.length - 1;
    let p2 = t.length - 1;

    while (p1 >= 0 && p2 >= 0) {
        console.log("=======");
        if (s[p1] !== "#" && t[p2] !== "#") {
            if (s[p1] !== t[p2]) {
                console.log("=======");
                console.log(s[p1]);
                console.log(t[p2]);
                return false;
            }
            p1--;
            p2--;
            continue;
        }

        if (t[p2] === "#") {
            let tempP2 = p2 - 1;
            if (t[tempP2] !== "#") {
                if (p2 - 2 >= 0) {
                    p2 = p2 - 2;
                } else {
                    p2 = 0;
                }
            } else {
                p2--;
            }
        }

        if (s[p1] === "#") {
            let tempP1 = p1 - 1;
            if (s[tempP1] !== "#") {
                if (p1 - 2 >= 0) {
                    p1 = p1 - 2;
                } else {
                    p1 = 0;
                }
            } else {
                p1--;
            }
        }
        console.log(p1);
        console.log(p2);

    }

    return true;
}

export default TypeOutString;