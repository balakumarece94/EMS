package test;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletConfig;
import javax.servlet.ServletContext;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * Servlet implementation class FirstServlet
 */
@WebServlet("/FirstServlet")
public class FirstServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public FirstServlet() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		response.setContentType("text/html");
		String name=request.getParameter("uname");
		String psd=request.getParameter("psd");
		PrintWriter writer=response.getWriter();
		ServletConfig config=this.getServletConfig();
		writer.println(config.getInitParameter("aaa"));
		writer.println(config.getInitParameter("bbb"));
		ServletContext context=config.getServletContext();
		writer.println(context.getInitParameter("uname"));
		writer.println(context.getInitParameter("password"));
	
			//writer.print("<a href='http://facebook.com'>click fb</a>");
			/*
			response.setStatus(HttpServletResponse.SC_MOVED_PERMANENTLY);
			response.setHeader("location", "http://www.google.com");
			
			response.sendRedirect("http://fb.com");
		}else {
			response.sendError(404, "error can't load");
		}
		
		  /*writer.print("<html><body>");
		writer.print("<h1>testing</h1>");
		writer.print("<p>this is parag</p>");
		writer.print("<p>User name is "+name+"</p>");
		writer.print("<p>password name is "+psd+"</p>");
		writer.print("</body></html>");
		
		LoginBean lb=new  LoginBean();
		try {
			lb.saveLogin(name,psd);
		} catch (Exception e) {
			e.printStackTrace();
		}*/
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);
	}

}
