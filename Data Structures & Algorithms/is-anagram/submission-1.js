class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length !== t.length) {
            return false;
        }
        let mp1 = new Map();
        let mp2 = new Map();
        for (let char of s) {
            if (mp1.has(char)) {
                mp1.set(char, mp1.get(char) + 1)
            } else {
                mp1.set(char, 1);
            }
        }
        for (let newchar of t) {
            if (mp2.has(newchar)) {
                mp2.set(newchar, mp2.get(newchar) + 1)
            } else {
                mp2.set(newchar, 1);
            }
        }
        for (let [char, count] of mp1) {
            if (mp2.get(char) !== count) {
                return false;
            }
        }
        return true;
    }
}
