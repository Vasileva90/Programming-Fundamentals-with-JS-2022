function printCertificate(grade, names) {
    if (pass(grade)) {
        printHeader();
        printName(names);
        formatGrade(grade);
    } else {
        console.log(`Student does not qualify`);
    }

    function printHeader() {
        console.log('~~~-   {@}   -~~~');
        console.log('~- Certificate -~');
        console.log('~~~-  ~---~  -~~~');
    }

    function printName(nameArr) {
        console.log(nameArr[0] + ' ' + nameArr[1]);
    }

    function formatGrade(grade) {
        if (grade < 3.00) {
            console.log("Fail (2)");
        } else if (grade < 3.50) {
            console.log(`Poor (${grade.toFixed(2)})`);
        } else if (grade < 4.50) {
            console.log(`Good (${grade.toFixed(2)})`);
        } else if (grade < 5.50) {
            console.log(`Very good (${grade.toFixed(2)})`);
        } else {
            console.log(`Excellent (${grade.toFixed(2)})`);
        }
    }

    function pass(grade) {
        return grade >= 3;
    }
}


printCertificate(5.25, ['John', 'Smith']);