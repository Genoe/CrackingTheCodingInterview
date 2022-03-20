/**
 * 2.1 RemoveDups Write code to remove duplicates from an unsorted linked list
 */
package LinkedLists;

import java.util.*;

public class RemoveDups {

    public static void SolveWithBuffer(LinkedList<String> unSortedList) {
        HashMap<String, Integer> uniqueVals = new HashMap<String, Integer>();

        for (String s : unSortedList) {

            if (uniqueVals.containsKey(s)) {
                uniqueVals.put(s, uniqueVals.get(s) + 1);
            } else {
                uniqueVals.put(s, 1);
            }
        }

        unSortedList.removeIf(x -> uniqueVals.get(x) > 1);

        System.out.println(unSortedList);
    }

    public static void SolveWithoutBuffer(LinkedList<String> unSortedList) {
        // Book says to use two pointers method and have N^2 runtime.
        // Probably because sort is going to use a buffer under the hood, so not a valid solution

        unSortedList.sort(null);

        for (int i = 0; i < unSortedList.size() - 1; i++) {
            if (unSortedList.get(i) == unSortedList.get(i + 1)) {
                i++;
                unSortedList.remove(i);
            }
        }

        System.out.println(unSortedList);
    }

    public static void SolveWithTwoPointers(LinkedList<String> unSortedList) {
        for (int i = 0; i < unSortedList.size() - 1; i++) {
            for (int j = i + 1; j < unSortedList.size(); j++) {
                if (unSortedList.get(i) == unSortedList.get(j)) {
                    unSortedList.remove(j);
                }
            }
        }

        System.out.println(unSortedList);
    }

    public static void main (String[] args) {
        LinkedList<String> unSortedList = new LinkedList<String>();

        unSortedList.add("String1");
        unSortedList.add("String2");
        unSortedList.add("String1");
        unSortedList.add("String3");
        unSortedList.add("String4");
        unSortedList.add("taco");
        unSortedList.add("String6");
        unSortedList.add("taco");

        SolveWithBuffer(unSortedList);
        SolveWithoutBuffer(unSortedList);
        SolveWithTwoPointers(unSortedList);
    }
}
