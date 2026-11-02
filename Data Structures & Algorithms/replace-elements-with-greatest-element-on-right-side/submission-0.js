class Solution {
    /**
     * @param {number[]} arr
     * @return {number[]}
     */
    replaceElements(arr) {
        let n= arr.length;
        let max_value = -1;
        for(let i= n-1; i>=0; i--){
            let current_val = arr[i];
            arr[i] = max_value;
            max_value = Math.max(max_value, current_val)
        }
        return arr;
    }
}
