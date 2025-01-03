export default function divideFunction(numerator, denominator) {
    try {
        // Code that might throw an error
        let r = numerator / denominator;
        return r;
    } catch (error) {
        // Code to handle the error
        console.error(error.message);
    }
}
console.log(divideFunction(8, 0));
