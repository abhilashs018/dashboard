<%-- 
    Document   : index
    Created on : 4 May, 2018, 8:41:31 PM
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
        <script language="javascript" type="text/javascript"  src="angular/angular.min.js"></script>
        <script language="javascript" type="text/javascript"  src="angular/angular-route.min.js"></script>
        <script src="js/login.js" language="javascript" type="text/javascript"></script>
    </head>
    
    <% 
        HttpSession httpSession = request.getSession();
            String errorMsg = "";
            String userId = "";
            if (httpSession.getAttribute("MSG") != null) {
                errorMsg = (String) httpSession.getAttribute("MSG");
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
            <!-- header header  -->
<!--            <div class="header">
                <nav class="navbar top-navbar navbar-expand-md navbar-light">
                     Logo 
                    <div class="navbar-header">
                        <a class="navbar-brand">
                             Logo icon 
                            <b>DASHBOARD</b>
                            End Logo icon 
                             Logo text 
                            <span><img src="images/logo-text.png" alt="homepage" class="dark-logo" /></span>
                        </a>
                    </div>             
                </nav>
            </div>-->

            <!-- End header header -->
            <div class="unix-login">
                <div class="container-fluid">
                    <div class="row justify-content-center">
                        <div class="col-lg-4">
                            <div class="login-content card">
                                <div class="login-form">
                                    <h4>Login</h4>
                                    <form method="post" action="logcheck.jsp" autocomplete="off" name="loginForm" onsubmit="return validateLogin()">
                                        <div class="form-group">
                                            <input type="email" class="form-control" name="loginId" placeholder="Email">
                                        </div>
                                        <div class="form-group">
                                            <input type="password" class="form-control" name="password" placeholder="Password">
                                        </div>
                                        <!--<div class="checkbox">
                                            <label>
                                                <input type="checkbox"> Remember Me
                                            </label>
                                            <label class="pull-right">
                                                <a href="#">Forgotten Password?</a>
                                            </label>

                                        </div>-->
<!--                                        <div class="pull-left" id="dispLoginError" style="color:red;margin-bottom:10px;text-align:left;"></div>
                                        <div class="pull-left" id="dispAddSucess" style="color:green;text-align:left;"></div>-->
                                        <div class="text-center log-txt" style="color:red;text-align: left" id="msgId">
                                            <%=errorMsg%>                    
                                        </div>
                                        <!--<button type="button" class="btn btn-primary btn-flat m-b-30 m-t-30" ng-click="loginDetails();">Sign in</button>-->
                                        <input type="submit" class="btn btn-primary btn-flat m-b-30 m-t-30" value="Sign In"/>
                                        <!--<button type="submit"  class="btn btn-primary btn-flat m-b-30 m-t-30">Sign in</button>-->
                                        <div class="register-link m-t-15 text-center">
                                            <!--<p>Don't have account ? <a href="#"> Sign Up Here</a></p>-->
                                            <p>Don't have account ? <a href="register.jsp"> Sign Up Here</a></p>
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