var maxArea = function (height) {
    let result = 0;
    let right = height.length - 1
    let left = 0;

    while (left < right) {
        let smallestSide = Math.min(height[left], height[right])
        let area = smallestSide * (right - left)

        if (area > result) {
            result = area
        }

        if (height[left] < height[right]) {
            left++;
        } else right--;
    }

    return result
}