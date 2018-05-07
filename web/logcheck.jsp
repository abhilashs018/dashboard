<%-- 
    Document   : logcheck
    Created on : 4 May, 2018, 8:58:02 PM
    Author     : Abhi
--%>
<%@page import="com.dashboard.authentication.AuthenticationDto"%>
<%@page import="com.dashboard.dbmanager.DbManager"%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>Log Check</title>
    </head>
    <%
    try {
        HttpSession httpSession = request.getSession();
        httpSession.invalidate();
        httpSession = request.getSession();  
        String loginId = null;
        String password = null;
        String path = null;
        loginId = request.getParameter("loginId");
        password = request.getParameter("password");
        boolean isLoginSuccess = new DbManager().checkLogin(loginId, password);
        if(isLoginSuccess){
            AuthenticationDto login = new DbManager().getLoginDetails(loginId, password);
            httpSession.setAttribute("loginId", loginId);                
            httpSession.setAttribute("FIRST_NAME", login.getFirstName());                
            httpSession.setAttribute("LAST_NAME", login.getLastName());                
            httpSession.setAttribute("MOBILE", login.getMobile());  
            path = new String("blank.jsp");
        }else{
            httpSession.setAttribute("MSG", "Invalid User Name or Password ");
            path = new String("index.jsp");
        }
        response.sendRedirect(path);
    %>
    <body>
    </body>
            
    <%} catch (Exception e1) {
            }%>
</html>
