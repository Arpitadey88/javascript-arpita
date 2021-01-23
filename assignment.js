// repo-link-https://github.com/Arpitadey88/javascript-arpita

// No 1 Problem(kilometerToMeter)

function kilometerToMeter(kilometer){
    var meter = kilometer * 1000;
    return meter;
}
// This output only for demo purpose.
// var totalMeter = kilometerToMeter(8);
// console.log(totalMeter);

// No 2 problem(budgetCalculator)
function budgetCalculator(watch, phone, laptop) {
    if (watch < 1 || phone < 1 || laptop < 1) {
        return 'Products value always positive'
    } else {
        var Watch = watch * 90;
        var Phone = phone * 250;
        var Laptop = laptop * 950;
        var Total = Watch + Phone + Laptop;
        return Total;
    }
}
// var totalCost = budgetCalculator(10, 5, 3);
// console.log(totalCost);

// No 3 problem(Hotel cost)
function hotelCost(night) {
    if (night > 0 && typeof night == 'number') {
        var nightCost = 0;
        if (night <= 10) {
            nightCost = night * 100;
        } else if (night <= 20) {
            var first10Nights = 10 * 100;
            var remaining = night - 10;
            var second10Nights = remaining * 80;
            nightCost = first10Nights + second10Nights;
        } else {
            var first10Nights = 10 * 100;
            var second10Nights = 10 * 80;
            var remaining = night - 20;
            var after20Nights = remaining * 50;
            nightCost = first10Nights + second10Nights + after20Nights;
        }
        return nightCost;
    } else {
        return 'Cost will be always positive';
    }
}
// var total = hotelCost(50);
// console.log(total);

// No 4 problem(Mega Friends)

function megaFriend(name) {
    if (name.length > 0 && Array.isArray(name)) {
        var largestName = name[0];
        var largestNameLength = largestName.length;

        for (var i = 1; i < name.length; i++) {
            var currentLength = name[i].length;
            if (currentLength > largestNameLength) {
                largestName = name[i];
                largestNameLength = currentLength;
            }
        }
        return largestName;
    } else {
        return 'string'
    }
}