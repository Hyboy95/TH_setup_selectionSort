export class SelectionSort {
    static list: number[] = [1,9,4.5,6.6,5.7,-4.5];
    static selectionSort(list: number[]) {
        for (let i = 0; i < list.length - 1; i++) {
            let min_index = i;
            for (let j = i + 1; j < list.length; j++) {
                if (list[j] < list[min_index]) {
                    min_index = j;
                }
            }
            let temp = list[i];
            list [i] = list[min_index];
            list [min_index] = temp;
        }
    }
}