import java.util.*;

public class D {

    static int processArray(int[] arr, int n) {
        int write = 0;
        int read = 0;

        while (read < n) {
            if (arr[read] >= 100) {
                int count = 0;

                while (read < n && arr[read] >= 100) {
                    count++;
                    read++;
                }

                if (count >= 2) {
                    arr[write++] = count;
                } else {
                    arr[write++] = arr[read - 1];
                }

            } else {
                arr[write++] = arr[read];
                read++;
            }
        }

        return write;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int[] arr = new int[1000];
        int n = 0;

        while (true) {
            int x = sc.nextInt();
            if (x < 0)
                break;
            arr[n++] = x;
        }

        int newLength = processArray(arr, n);

        for (int i = 0; i < newLength; i++) {
            System.out.println(arr[i]);
        }
    }
}