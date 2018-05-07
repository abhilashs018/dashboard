/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.dashboard.connection;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

/**
 *
 * @author Abhi
 */
public class ConnectionManager {

    private static String url = "jdbc:mysql://localhost/db_connect";
    private static String driverName = "com.mysql.jdbc.Driver";
    private static String username = "root";
    private static String password = "krishna";
    private static Connection con;

    public static Connection getConnection() {
        try {
            Class.forName(driverName);
            try {
                con = DriverManager.getConnection(url, username, password);
            } catch (SQLException exception) {
                // log an exception. fro example:
                System.out.println("Failed to create the database connection." + exception);
            }
        } catch (ClassNotFoundException exception) {
            // log an exception. for example:
            System.out.println("Driver not found." + exception);
        }
        return con;
    }
}
