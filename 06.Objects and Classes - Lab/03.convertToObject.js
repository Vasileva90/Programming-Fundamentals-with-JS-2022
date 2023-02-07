function convertToObject(jsonString) {
    let res = JSON.parse(jsonString);
    for(let key of Object.keys(res)) {
        console.log(`${key}: ${res[key]}`);
    }
}

convertToObject('{"name": "George", "age": 40, "town": "Sofia"}');