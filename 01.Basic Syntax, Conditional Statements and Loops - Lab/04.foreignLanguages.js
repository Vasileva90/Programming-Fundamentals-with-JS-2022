/*function foreignLanguages(country) {
     if(country === "England" || country === "USA") {
        console.log("English");
     } else if(country === "Spain" || country === "Argentina" || country === "Mexico") {
        console.log("Spanish");
     } else {
        console.log("unknown");
     }
}

foreignLanguages("USA");
foreignLanguages("Germany"); */

function foreignLanguages(country) {
    switch(country){
        case "England":
        case "USA": console.log("English"); break;
        case "Spain":
        case "Argentina":
        case "Mexico": console.log("Spanish"); break;
        default: console.log("unknown"); break;
    }
}

foreignLanguages("Argentina");
foreignLanguages("Germany");
foreignLanguages("Spain");
foreignLanguages("Mexico");