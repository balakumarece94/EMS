package test;

import java.sql.Statement;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;


public class LoginBean {
	static Statement st;
	static{
		try {
			String url="jdbc:mysql://localhost:3306/test";
			String uname="root";
			String psd="root";
			Class.forName("com.mysql.jdbc.Driver");
			Connection con=DriverManager.getConnection(url,uname,psd);
			st=con.createStatement();
		}catch(Exception e){
			e.printStackTrace();
			
		}
	}
	public void saveLogin(String name,String psd) throws SQLException {
		String qr="insert into employee(employee_id,name,password) values('102','"+name+"','"+psd+"')";
		st.executeUpdate(qr);
		System.out.println("values inserted successfully");
	}

}
