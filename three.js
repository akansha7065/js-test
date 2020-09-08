var numbers = [],
    i, j;
for (numbers = 1; numbers <= 101; numbers++)
    outer: for (i = 0; i < numbers.length - 1; i++) {
        for (j = i + 1; j < numbers.length; j++) {
            if (numbers[i] === numbers[j]) {
                console.log('found', numbers[i], 'at index', i, 'and', j);
                break outer;
            }
        }
    } 