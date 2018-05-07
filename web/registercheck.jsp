<%-- 
    Document   : registercheck
    Created on : 4 May, 2018, 10:09:42 PM
    Author     : Abhi
--%>

<%@page import="com.dashboard.authentication.AuthenticationDto"%>
<%@page import="com.dashboard.dbmanager.DbManager"%>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>Register Check</title>
    </head>
    <%
    try {
        HttpSession httpSession = request.getSession();
        httpSession.invalidate();
        httpSession = request.getSession();  
        String email = null;
        String password = null;
        String firstName = null;
        String lastName = null;
        String mobile = null;
        String path = null;
        firstName = request.getParameter("firstName");
        lastName = request.getParameter("lastName");
        mobile = request.getParameter("mobile");
        email = request.getParameter("email");
        password = request.getParameter("password");
        AuthenticationDto register = new AuthenticationDto();
        register.setEmail(email);
        register.setFirstName(firstName);
        register.setLastName(lastName);
        register.setMobile(mobile);
        register.setPassword(password);
        boolean isRegistrationSuccess = new DbManager().registerUser(register);
        if(isRegistrationSuccess){
            path = "register.jsp";
            httpSession.setAttribute("SUCCESS_MSG", "Registration Successful");
        }else{
            path = "register.jsp";
            httpSession.setAttribute("ERROR_MSG", "Registration Failed");
        }
        response.sendRedirect(path);
    %>
    <body>
    </body>
    <%} catch (Exception e1) {
            }%>
</html>
