/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.dashboard.admin;

import com.opensymphony.xwork2.Action;

public class ManageAdminAction implements Action {

    private String pageMode;
    private String flag;
    private String sessionExist;
    private String title;
    private String description;
    private String startDate;
    private String endDate;
    private String jobList;

    public String execute() throws Exception {
        try {
            JobsManager jobsManager = new JobsManager();
            if ("CREATE_JOB".equalsIgnoreCase(getPageMode())) {
                Jobs jobs = new Jobs();
                jobs.setTitle(getTitle());
                jobs.setDescription(getDescription());
                jobs.setStartDate(getStartDate());
                jobs.setEndDate(getEndDate());
                if (new JobsManager().createJob(jobs)) {
                    setFlag("Y");
                } else {
                    setFlag("N");
                }
            }
            if ("LOAD_JOBS".equalsIgnoreCase(getPageMode())) {
                Jobs jobs = new Jobs();
                setJobList(jobsManager.getJobsDetails(jobs));
                return SUCCESS;
            }

        } catch (Exception e) {
            e.printStackTrace();
            //ServicesFactory.getLogger().error("Error in getting purhcase details" + e);
        }
        return SUCCESS;
    }

    /**
     * @return the pageMode
     */
    public String getPageMode() {
        return pageMode;
    }

    /**
     * @param pageMode the pageMode to set
     */
    public void setPageMode(String pageMode) {
        this.pageMode = pageMode;
    }

    /**
     * @return the flag
     */
    public String getFlag() {
        return flag;
    }

    /**
     * @param flag the flag to set
     */
    public void setFlag(String flag) {
        this.flag = flag;
    }

    /**
     * @return the sessionExist
     */
    public String getSessionExist() {
        return sessionExist;
    }

    /**
     * @param sessionExist the sessionExist to set
     */
    public void setSessionExist(String sessionExist) {
        this.sessionExist = sessionExist;
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
