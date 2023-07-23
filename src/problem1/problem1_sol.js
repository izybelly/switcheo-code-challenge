// For loop
var sum_to_n_a = function(n) {
    let sum = 0;

    for (let i = 1; i <= n; i++){
        sum += i;
    }

    return sum;
};

// While loop 
var sum_to_n_b = function(n) {
    let sum = 0;
    let i = 1;

    while (i <= n){
        sum += i; 
        i++;
    }

    return sum;
};



// Recursion
var sum_to_n_c = function(n) {
    if (n == 1){
        return 1;
    }
    else {
        return n + sum_to_n_b(n-1);
    }
};

console.log(sum_to_n_a(5));
console.log(sum_to_n_b(6));
console.log(sum_to_n_c(7));