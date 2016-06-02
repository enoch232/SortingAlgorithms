'use strict';
var test_array = [13,5,7,9,1,4,6];
var merge_sort = function(array, start, end){
	if (start = end){
		return;
	}
	var middle = (start+end)/2;
	var left = merge_sort(array, start, middle);
	var right = merge_sort(array, middle+1, end);
	return merge(array, left, right);
}
var merge = function(array, start, end){
	var merged_array = [];
	var left_array_counter = 0;
	var right_array_counter = 0;
	var counter = 0;
	while(){
		if (array[left_array_counter] > array[right_array_counter]){
			merged_array[counter] = array[right_array_counter];
		}else{
			merged_array[counter] = array[left_array_counter];
		}
	}
}

merge_sort(test_array,1,7);