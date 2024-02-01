function foo() {
    var arr = Array.prototype.slice.call(arguments);
    arr.push(5)
    console.log(arr)
}

foo(1,2)