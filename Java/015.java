// Java program: Runtime Modulus

package projectFolder;

import java.util.Scanner;

public class RuntimeModulus
{
    public static void main(String[] args)
    {
        Scanner scanner = new Scanner(System.in);

        System.out.print("Enter the first integer = ");
        int a = scanner.nextInt();

        System.out.print("Enter the second integer = ");
        int b = scanner.nextInt();

        int remainder = a % b;

        System.out.println("Modulus of the integers = " + a + " mod " + b + " = " + remainder);

        scanner.close();
    }
}
