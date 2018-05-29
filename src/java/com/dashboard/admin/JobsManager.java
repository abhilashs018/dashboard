/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.dashboard.admin;

/**
 *
 * @author Abhi
 */
import com.dashboard.connection.ConnectionManager;

import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;

public class JobsManager implements IJobsConstants {

    private Connection con = null;
    private Statement stmt = null;
    private ResultSet rs = null;

    public boolean createJob(Jobs jobs) throws SQLException {
        con = ConnectionManager.getConnection();
        stmt = con.createStatement();
        try {
            String query = "INSERT INTO " + JOBS
                    + " " + "SET"
                    + " " + JOBS_TITLE + "= " + "'" + jobs.getTitle() + "'" + ","
                    + " " + JOBS_DESCRIPTION + "= " + "'" + jobs.getDescription() + "'" + ","
                    + " " + START_DATE + "= " + "'" + jobs.getStartDate() + "'" + ","
                    + " " + END_DATE + "= " + "'" + jobs.getEndDate() + "'";
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
    
    public String getJobsDetails(Jobs jobs) throws SQLException {
        con = ConnectionManager.getConnection();
        stmt = con.createStatement();        
        //declare collection object to hold Task List
        String jobLists = "";
        int count = 0;
        //form the query with the given search criteria
        String query = jobs.getSearchQry();
        rs = stmt.executeQuery(query);

        try {
            while (rs.next()) {
                String joblists = "{\"title\" : \"" + rs.getString(JOBS_TITLE) + "\","
                        + "\"selNo\" : \"" + (count + 1) + "\","
                        + "\"description\" : \"" + rs.getString(JOBS_DESCRIPTION) + "\","
                        + "\"startDate\" : \"" + rs.getString(START_DATE) + "\","
                        + "\"endDate\" : \"" + rs.getString(END_DATE) + "\"},";
                //add transfer object to the collection object
                jobLists = jobLists + joblists;
                count++;
            }
            if (!(jobLists.equalsIgnoreCase(""))) {
                jobLists = jobLists.substring(0, jobLists.length() - 1);
            }
            return jobLists;
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


//    public String getJobsDetails(Jobs jobs) throws SQLException {
//        con = ConnectionManager.getConnection();
//        stmt = con.createStatement();
//        String query = null;
//        String jobLists = "";
//        int count = 0;
//        query = "SELECT " + JOBS_TITLE + ","
//                + " " + JOBS_DESCRIPTION + ","
//                + " " + START_DATE + ","
//                + " " + END_DATE
//                + " " + " FROM " + JOBS + "";
//        rs = stmt.executeQuery(query);
//
//        try {
//            while (rs.next()) {
//                String joblists = "{\"title\" : \"" + rs.getString(JOBS_TITLE) + "\","
//                        + "\"selNo\" : \"" + (count + 1) + "\","
//                        + "\"description\" : \"" + rs.getString(JOBS_DESCRIPTION) + "\","
//                        + "\"startDate\" : \"" + rs.getString(START_DATE) + "\","
//                        + "\"endDate\" : \"" + rs.getString(END_DATE) + "\"},";
//                //add transfer object to the collection object
//                jobLists = jobLists + joblists;
//                count++;
//            }
//            if (!(jobLists.equalsIgnoreCase(""))) {
//                jobLists = jobLists.substring(0, jobLists.length() - 1);
//            }
//            return jobLists;
//        } catch (Exception e) {
//            return null;
//        } finally {
//            if (con != null) {
//                try {
//                    con.close();
//                } catch (Exception e) {
//                }
//            }
//        }
//    }

}
