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
public class Jobs implements IJobsConstants{

    private String isCount;
    private String title;
    private String description;
    private String startDate;
    private String endDate;
    private String jobList;
    
    protected String getSearchQry() {
        String strSelect = "";
            strSelect = "SELECT " + JOBS_TITLE + ","
                + " " + JOBS_DESCRIPTION + ","
                + " " + START_DATE + ","
                + " " + END_DATE
                + " " + " FROM " + JOBS + "";
        String strWhere = " " + "WHERE 1=1 ";
        String strQuery = getConditionString();
        strQuery = strSelect + strWhere + strQuery + " ORDER BY " + START_DATE + " DESC";
        return strQuery;     
    }
    public String getConditionString() {
        String strQuery = "";
//        if (getRequestGroupId() !=0) {
//            strQuery = strQuery + " " + "AND " + VIEW_REQUEST_DETAILS + "." + SERVICE_GROUP_ID + " = " + getRequestGroupId();
//        }       
        return strQuery;
    }
    
    /**
     * @return the title
     */
    public String getTitle() {
        return title;
    }

    /**
     * @param title the title to set
     */
    public void setTitle(String title) {
        this.title = title;
    }

    /**
     * @return the description
     */
    public String getDescription() {
        return description;
    }

    /**
     * @param description the description to set
     */
    public void setDescription(String description) {
        this.description = description;
    }

    /**
     * @return the startDate
     */
    public String getStartDate() {
        return startDate;
    }

    /**
     * @param startDate the startDate to set
     */
    public void setStartDate(String startDate) {
        this.startDate = startDate;
    }

    /**
     * @return the endDate
     */
    public String getEndDate() {
        return endDate;
    }

    /**
     * @param endDate the endDate to set
     */
    public void setEndDate(String endDate) {
        this.endDate = endDate;
    }

    /**
     * @return the isCount
     */
    public String getIsCount() {
        return isCount;
    }

    /**
     * @param isCount the isCount to set
     */
    public void setIsCount(String isCount) {
        this.isCount = isCount;
    }

    /**
     * @return the jobList
     */
    public String getJobList() {
        return jobList;
    }

    /**
     * @param jobList the jobList to set
     */
    public void setJobList(String jobList) {
        this.jobList = jobList;
    }

}
