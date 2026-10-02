class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
      let mp = new Map();
      for(let i = 0; i<nums.length;i++){
        let difference = target - nums[i];
        if(mp.has(difference)){
          return [mp.get(difference), i];
        }
        mp.set(nums[i], i);
      }
          return [];
    }
}
