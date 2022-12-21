function theatrePromotions(type, age) {
    let ticketPrice = 0;
    if (age >= 0 && age <= 18) {
        if (type === "Weekday") {
            ticketPrice = 12;
        } else if (type === "Weekend") {
            ticketPrice = 15;
        } else if (type === "Holiday") {
            ticketPrice = 5;
        }
    } else if (age > 18 && age <= 64) {
        if (type === "Weekday") {
            ticketPrice = 18;
        } else if (type === "Weekend") {
            ticketPrice = 20;
        } else if (type === "Holiday") {
            ticketPrice = 12;
        }
    } else if (age > 64 && age <= 122) {
        if (type === "Weekday") {
            ticketPrice = 12;
        } else if (type === "Weekend") {
            ticketPrice = 15;
        } else if (type === "Holiday") {
            ticketPrice = 10;
        }
    } else {
        console.log("Error!");
    }
    if (ticketPrice !== 0) {
        console.log(`${ticketPrice}$`);
    }
}

theatrePromotions('Weekday', 42);
theatrePromotions('Holiday', -12);
theatrePromotions('Holiday', 15);