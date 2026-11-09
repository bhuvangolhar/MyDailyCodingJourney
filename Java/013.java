// Java program: Runtime Multiplication

package projectFolder;

import java.util.Scanner;

public class RuntimeMultiplication
{
    public static void main(String[] args)
    {
        Scanner scanner = new Scanner(System.in);

        System.out.print("Enter the first integer = ");
        int a = scanner.nextInt();

        System.out.print("Enter the second integer = ");
        int b = scanner.nextInt();

        int product = a * b;

        System.out.println("Multiplication of the integers = " + a + " x " + b + " = " + product);

        scanner.close();
    }
}
