function isPrime(number) {
    if (number == 1 || number == 2)
        return 1;
    return isPrime(number - 1) + isPrime(number - 2);
}
{
    var array = [1, 5, 9, 2, 6, 15, 19, 35, 51, 53];
    var sum = 0;
    for (var _i = 0, array_1 = array; _i < array_1.length; _i++) {
        var number = array_1[_i];
        if (isPrime(number) == 1) {
            sum += number;
        }
    }
    console.log("Tổng các số nguyên tố trong mảng trên là: " + sum);
}
