function rightPlace(str, char, result) {
    let res = str.replace("_", char);
    console.log(res === result ? "Matched" : "Not Matched");
}

rightPlace('Str_ng', 'I', 'StrIng');