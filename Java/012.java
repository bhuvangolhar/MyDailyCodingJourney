// Java program: Runtime Subtraction

package projectFolder;

import java.util.Scanner;

public class RuntimeSubtraction
{
    public static void main(String[] args)
    {
        Scanner scanner = new Scanner(System.in);

        System.out.print("Enter the first integer = ");
        int a = scanner.nextInt();

        System.out.print("Enter the second integer = ");
        int b = scanner.nextInt();

        int difference = a - b;

        System.out.println("Subtraction of the integers = " + a + " - " + b + " = " + difference);

        scanner.close();
    }
}
