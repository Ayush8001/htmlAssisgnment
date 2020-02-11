import java.util.Scanner;
class magic
{
public static void main(String args[])
{
	Scanner sc=new Scanner(System.in);
	System.out.println("Enter the number");
	int n=sc.nextInt();
	int sum=0,num=n;
	while(num>0 || sum>9)
	{
		if(num ==0)
		{
			num = sum;
			sum = 0;
		}
	sum = sum + num %10;
	num /=10;
	}
if(s um==1)
{
	System.out.println(n +"is a magic number.");
}
else
{
	System.out.println(n+"is not a magic number");
	}
}
}
