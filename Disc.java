import java.util.Scanner;

class Disc
{
public static void main(String args[])
{
	double rate,quantity,price,f;	
	Scanner sc=new Scanner(System.in);

System.out.println("Enter rate");
rate=sc.nextInt();

System.out.println("Enter quantity");
quantity=sc.nextInt();

price=rate*quantity;

if(price<=1000)
{
	System.out.println("Discount=0");
		f=price;
}
else if((price>1000) && (price<=2000))
{
	System.out.println("Discount=15%");
	  	f=0.85*price;
}
else if((price>2000) && (price<=3000))
{
	System.out.println("Discount=20%");
		f=0.80*price;
}
else if((price>3000) && (price<=4000))
{
	System.out.println("Discount=35%");
		f=0.65*price;
}
	else
	{
		System.out.println("Discount=50%");
			f=0.50*price;
	}

System.out.println("final price after Discount=" +f);
	}
}


