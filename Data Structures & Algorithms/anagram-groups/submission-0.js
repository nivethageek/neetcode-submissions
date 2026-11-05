class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
     let result = {}

     for(let s of strs){
          const count = new Array(26).fill(0);
        for(let key of s){
            count[key.charCodeAt(0) - 'a'.charCodeAt(0)] += 1;
        }
            const word = count.join(',');
            if(!result[word]){
                result[word] = []
            }
            result[word].push(s)
        }
             return Object.values(result)
     }

    }
