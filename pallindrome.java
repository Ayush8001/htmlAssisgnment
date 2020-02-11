import java.util.Scanner;
class pallindrome
{
	public static void main(String args[])
{
	int r,rev=0,temp,n;
	Scanner sc=new Scanner(System.in);
	n=sc.nextInt();

	temp=n;
	while(n>0)
	{
		r=n%10;
		rev = ((rev*10) + r);
		n=n/10;
	}
if(temp==rev)
System.out.println("Pallindrome number");
else

System.out.println("not Pallindrome number");
}}

