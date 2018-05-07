/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.dashboard.authentication;

import com.opensymphony.xwork2.Action;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import org.apache.struts2.ServletActionContext;

/**
 *
 * @author Abhi
 */
public class LogoutAction implements Action{

    @Override
    public String execute() throws Exception {
        
        HttpServletRequest request = ServletActionContext.getRequest();        
        HttpServletResponse response = ServletActionContext.getResponse();
        HttpSession session = request.getSession();
        session.invalidate();
        response.sendRedirect("index.jsp");
        
        return SUCCESS;
    }
    
}
