class Addition
{
int a,b;

	public void getData()
	{
		a=10;
	b=20;
	}
	public void add()
	{
	System.out.println(a+b);
	}
}
class TestAddition
{
public static void main(String args[])
{
Addition obj=new Addition();
obj.getData();
obj.add();
}}
