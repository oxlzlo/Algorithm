const input = require('fs').readFileSync('/dev/stdin')
  .toString().trim().split('\n').map((v) => v.split(" ").map((v) => +v));

    const [[N, K], arr] = input;

    console.log(quickSort(arr, 0, arr.length-1)[K-1]);

    function quickSort(arr, left, right) {
        if (left >= right) {
            return;
        }
        const mid = Math.floor((left+right)/2);
        const pivot = arr[mid];
        const partition = divide(arr, left, right, pivot);

        quickSort(arr, left, partition-1);
        quickSort(arr, partition, right);

        return arr;
    }

    function divide(arr, left, right, pivot) {
        while (left <= right) {
            while (arr[left] < pivot) {
                left ++
            }
            while (arr[right] > pivot) {
                right --
            }

            if (left <= right) {
                let tmp = arr[left];
                arr[left] = arr[right];
                arr[right] = tmp;
                left ++;
                right --;
            }
        }
        return left;
    }
   