<%-- 
    Document   : register
    Created on : 1 May, 2018, 2:23:26 PM
    Author     : Abhi
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="en">

    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <!-- Tell the browser to be responsive to screen width -->
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="description" content="">
        <meta name="author" content="">
        <!-- Favicon icon -->
        <link rel="icon" type="image/png" sizes="16x16" href="images/favicon.png">
        <title>Dashboard</title>
        <!-- Bootstrap Core CSS -->
        <link href="css/lib/bootstrap/bootstrap.min.css" rel="stylesheet">
        <!-- Custom CSS -->
        <link href="css/helper.css" rel="stylesheet">
        <link href="css/style.css" rel="stylesheet">
        <link href="css/custom.css" rel="stylesheet">
        <script src="js/register.js" language="javascript" type="text/javascript"></script>
    </head>
   <% 
        HttpSession httpSession = request.getSession();
            String errorMsg = "";
            String successMsg = "";
            if (httpSession.getAttribute("ERROR_MSG") != null) {
                errorMsg = (String) httpSession.getAttribute("ERROR_MSG");
            }            
            if (httpSession.getAttribute("SUCCESS_MSG") != null) {
                successMsg = (String) httpSession.getAttribute("SUCCESS_MSG");
            }            
            httpSession.invalidate();
    %>
    <body class="fix-header fix-sidebar" onload="focusOn();">
        <!-- Preloader - style you can find in spinners.css -->
        <div class="preloader">
            <svg class="circular" viewBox="25 25 50 50">
            <circle class="path" cx="50" cy="50" r="20" fill="none" stroke-width="2" stroke-miterlimit="10" /> </svg>
        </div>
        <!-- Main wrapper  -->
        <div id="main-wrapper">

            <div class="unix-login">
                <div class="container-fluid">
                    <div class="row justify-content-center">
                        <div class="col-lg-4">
                            <div class="login-content card">
                                <div class="login-form">
                                    <h4>Register</h4>
                                    <form method="post" action="registercheck.jsp" autocomplete="off" name="registerForm" onsubmit="return validateRegistration()">
                                        <div class="form-group">
                                            <input type="text" class="form-control" name="firstName" placeholder="First Name">
                                        </div>
                                        <div class="form-group">
                                            <input type="text" class="form-control" name="lastName" placeholder="Last Name">
                                        </div>
                                        <div class="form-group">
                                            <input type="text" class="form-control bfh-phone" name="mobile" placeholder="Mobile">
                                        </div>
                                        <div class="form-group">
                                            <input type="email" class="form-control" name="email" placeholder="Email">
                                        </div>
                                        <div class="form-group">
                                            <input type="password" class="form-control" name="password" placeholder="Password">
                                        </div>
                                        <div class="text-center log-txt" style="color:red;text-align: left" id="msgId">
                                            <%=errorMsg%>                    
                                        </div>
                                        <div class="text-center log-txt" style="color:green;text-align: left">
                                            <%=successMsg%>                    
                                        </div>
                                        <input type="submit" class="btn btn-primary btn-flat m-b-30 m-t-30" value="Register"/>
                                        <div class="register-link m-t-15 text-center">
                                            <p>Already have account ? <a href="index.jsp"> Sign in</a></p>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
        <!-- End Wrapper -->
        <!-- All Jquery -->
        <script src="js/lib/jquery/jquery.min.js"></script>
        <!-- Bootstrap tether Core JavaScript -->
        <script src="js/lib/bootstrap/js/popper.min.js"></script>
        <script src="js/lib/bootstrap/js/bootstrap.min.js"></script>
        <!-- slimscrollbar scrollbar JavaScript -->
        <script src="js/jquery.slimscroll.js"></script>
        <!--Menu sidebar -->
        <script src="js/sidebarmenu.js"></script>
        <!--stickey kit -->
        <script src="js/lib/sticky-kit-master/dist/sticky-kit.min.js"></script>
        <!--Custom JavaScript -->
        <script src="js/custom.min.js"></script>

    </body>

</html>
