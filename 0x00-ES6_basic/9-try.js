function divideFunction(numerator, denominator) {
    if(denominator === 0){
        throw new Error('zero denominator');
    }
    try {
        // Code that might throw an error
        let r = numerator / denominator;
        return r;
    } catch (error) {
        // Code to handle the error
        console.error(`error`);
    }
}
 function guardrail(mathFunction){
    let queue = []
    try {
        queue.push(mathFunction())
    }
    catch(error){
        queue.push(error.message)
    }
    queue.push(`Guardrail was processed`)

    return queue
}

console.log(guardrail(() => { return divideFunction(10, 2)}));
console.log(guardrail(() => { return divideFunction(10, 0)}));
