function charactersInRange(firstChar, secondChar) {
    let startChar = Math.min(firstChar.charCodeAt(0),secondChar.charCodeAt(0));
    let endChar = Math.max(firstChar.charCodeAt(0),secondChar.charCodeAt(0))
    let array = [];
   
    for(let i = startChar + 1; i < endChar; i++) {
        let curr = String.fromCharCode(i);
        array.push(curr);
    }
    console.log(array.join(" "));
}

charactersInRange('a',
'd');