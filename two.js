var findMaxConsecutiveOnes = function (num) {
    let largestCount = 0;
    let currentCount = 0;
    for (let i = 0; i < nums.length; i++) {
        if (num[i] === 0) {
            currentCount = 0;
        } else {
            currentCount++;
        };
        if (currentCount > largestCount) largestCount = currentCount;
    };
    return largestCount;
};