// Java program: Runtime Addition

package projectFolder;

import java.util.Scanner;

public class RuntimeAddition
{
    public static void main(String[] args)
    {
        Scanner scanner = new Scanner(System.in);

        System.out.print("Enter the first integer = ");
        int a = scanner.nextInt();

        System.out.print("Enter the second integer = ");
        int b = scanner.nextInt();

        int summation = a + b;

        System.out.println("Addition of the integers = " + a + " + " + b + " = " + summation);

        scanner.close();
    }
}
