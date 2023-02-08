function convertToJSON(name, lastName, hairColor) {
    let object = {
        name,
        lastName,
        hairColor
    };
    let objectToJson = JSON.stringify(object);
    console.log(objectToJson);
}

convertToJSON('George', 'Jones', 'Brown');