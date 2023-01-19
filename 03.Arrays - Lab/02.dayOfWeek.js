function dayOfWeek(number) {
    let array = ["Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
    ];
    if (number < 1 || number > 7) {
        console.log("Invalid day!");
    } else {
        console.log(array[number - 1]);
    }
}

dayOfWeek(8);