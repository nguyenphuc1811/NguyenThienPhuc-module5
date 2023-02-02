{
    function isFibonacci(number: number): number {
        if (number < 2){return number}
        return isFibonacci(number - 1) + isFibonacci(number - 2);
    }
    let sum = 0;
    let a:number = 7;
    for (let i = 0; i < a ; i++) {
        console.log(isFibonacci(i));
        sum += isFibonacci(i);
    }
    console.log('Tổng số fibonacci là: ' + sum);
}