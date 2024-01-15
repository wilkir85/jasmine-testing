function calculateTaxes(income) {
    if (!Number.isFinite(income)) {
        throw new Error('Invalid incom!')
    }

    if (!Number.isFinite(income)) {
        throw new Error('BAD INCOME');
    }
    if (income > 30000) {
        return income * 0.25;
    }
    else {
        return income * 0.15;
    }
}
//allows to pass in a string
function removeDupes(values){
        const arr = [...new Set(values)];
        if(typeof values === 'string') return arr.join('')
        return arr;
}

function remove(arr,val) {
    return arr.filter((el) => {
       return el !== val
    })
}

function append(arr, val) {
    arr.push(val);
}

function appendPure(arr, val) {
    return [...arr, val]
}

// Test clean up
let usernames = [];

let input = document.getElementById('username');

function submitForm() {
    usernames.push(input.value);
}

// non pure
function append(arr, val) {
    arr,push(val);
}