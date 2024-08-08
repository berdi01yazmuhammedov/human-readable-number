module.exports = function toReadable (number) {
    const ones = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    const teens = ['eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    const tens = ['ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

    if (number === 0) return 'zero';
    if (number < 10) return ones[number];
    if (number > 10 && number < 20) return teens[number - 11];
    if (number < 100) {
        const ten = Math.floor(number / 10);
        const unit = number % 10;
        return unit === 0 ? tens[ten - 1] : `${tens[ten - 1]} ${ones[unit]}`;
    }
    if (number < 1000) {
        const hundred = Math.floor(number / 100);
        const rest = number % 100;
        return rest === 0 ? `${ones[hundred]} hundred` : `${ones[hundred]} hundred ${toReadable(rest)}`;
    }
}
