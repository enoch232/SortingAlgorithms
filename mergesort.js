var test_array = [54,23,29,15,2,8,18,89];
function mergeSort(array){
    if (array.length < 2){
        return array
    }
    var middle = parseInt((array.length/2));
    var left = array.slice(0, middle);
    var right = array.slice(middle, array.length);
    return merge(mergeSort(left), mergeSort(right));
}
function merge(left, right){
    var new_array = [];
    while(left.length && right.length){
        if(left[0] <= right[0]){
            new_array.push(left[0]);
            left.shift();
        }else{
            new_array.push(right[0]);
            right.shift();
        }
    }
    while(left.length){
        new_array.push(left[0]);
        left.shift();
    }
    while(right.length){
        new_array.push(right[0]);
        right.shift();
    }
    return new_array;

}
console.log(mergeSort(test_array));
