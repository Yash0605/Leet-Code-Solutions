/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} low
 * @param {number} high
 * @return {number}
 */

 var rangeSumBST = function(root, low, high) {
    let sum = 0;
    if(root == null) return sum;
    
    if(root.val > low){
        sum += rangeSumBST(root.left,low,high)
    }
    
    if(root.val<= high && root.val >= low){
        sum += root.val;
    }
    
    if(root.val < high) sum += rangeSumBST(root.right,low,high);

    return sum;
};

rangeSumBST([10,5,15,3,7,null,18], 7, 15);