// Java program: Runtime Division

package projectFolder;

import java.util.Scanner;

public class RuntimeDivision
{
    public static void main(String[] args)
    {
        Scanner scanner = new Scanner(System.in);

        System.out.print("Enter the first integer = ");
        int a = scanner.nextInt();

        System.out.print("Enter the second integer = ");
        int b = scanner.nextInt();

        int quotient = a / b;

        System.out.println("Division of the integers = " + a + " ÷ " + b + " = " + quotient);

        scanner.close();
    }
}
