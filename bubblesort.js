'use strict'
var test_array = [54,23,29,15,2,8,18,89];
function bubbleSort(array){
	var counter = 0;
	var temp;
	var swap;
	do{
		swap = false;
		while (counter < array.length-1){
			if (array[counter] > array[counter+1]){
				temp = array[counter + 1];
				array[counter + 1] = array[counter];
				array[counter] = temp;
				swap = true;
			}
			counter++;
		}
		counter = 0;
	}while( swap );
	return array;
}

console.log(bubbleSort(test_array));