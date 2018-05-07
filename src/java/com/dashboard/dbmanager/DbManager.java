/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.dashboard.dbmanager;

import com.dashboard.authentication.IAuthenticationConstants;
import com.dashboard.authentication.AuthenticationDto;
import com.dashboard.connection.ConnectionManager;
import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;

/**
 *
 * @author Abhi
 */
public class DbManager implements IAuthenticationConstants {

    private Connection con = null;
    private Statement stmt = null;
    private ResultSet rs = null;

    public boolean checkLogin(String loginId, String password) throws SQLException {
        con = ConnectionManager.getConnection();
        stmt = con.createStatement();
        try {
            String query = "SELECT " + EMAIL + ","
                    + " " + PASSWORD
                    + " " + " FROM " + LOGIN
                    + " " + " WHERE " + EMAIL + " = " + "'" + loginId + "'"
                    + " " + " AND " + PASSWORD + " = " + "'" + password + "'";
            System.out.println(query);
            rs = stmt.executeQuery(query);
            if (rs.next()) {
                return true;
            }
            return false;

        }//if any exception occurs, return false
        catch (Exception e) {
            return false;
        } finally {
            if (con != null) {
                try {
                    con.close();
                } catch (Exception e) {
                }
            }
        }
    }

    public AuthenticationDto getLoginDetails(String loginId, String password) throws SQLException {
        con = ConnectionManager.getConnection();
        stmt = con.createStatement();
        AuthenticationDto login = new AuthenticationDto();
        String query = null;
        try {
            query = "SELECT " + FIRST_NAME + ","
                    + " " + LAST_NAME + ","
                    + " " + MOBILE
                    + " " + " FROM " + LOGIN
                    + " " + " WHERE " + EMAIL + " = " + "'" + loginId + "'"
                    + " " + " AND " + PASSWORD + " = " + "'" + password + "'";
            rs = stmt.executeQuery(query);
            if (rs.next()) {
                login.setFirstName(rs.getString(FIRST_NAME));
                login.setLastName(rs.getString(LAST_NAME));
                login.setMobile(rs.getString(MOBILE));
            }

            return login;
        } catch (Exception e) {
            return null;
        } finally {
            if (con != null) {
                try {
                    con.close();
                } catch (Exception e) {
                }
            }
        }
    }

    public boolean registerUser(AuthenticationDto register) throws SQLException {
        con = ConnectionManager.getConnection();
        stmt = con.createStatement();
        try {
            String query = "INSERT INTO " + LOGIN
                    + " " + "SET"
                    + " " + FIRST_NAME + "= " + "'" + register.getFirstName() + "'" + ","
                    + " " + LAST_NAME + "= " + "'" + register.getLastName() + "'" + ","
                    + " " + MOBILE + "= " + "'" + register.getMobile() + "'" + ","
                    + " " + EMAIL + "= " + "'" + register.getEmail() + "'" + ","
                    + " " + PASSWORD + "= " + "'" + register.getPassword() + "'";
            System.out.println(query);
            int result = stmt.executeUpdate(query);
            if (result > 0) {
                return true;
            } else {
                return false;
            }
        }//if any exception occurs, return false
        catch (Exception e) {
            return false;
        } finally {
            if (con != null) {
                try {
                    con.close();
                } catch (Exception e) {
                }
            }
        }
    }

}
