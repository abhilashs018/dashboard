var angularApp = angular.module('proApp', []);
angularApp.controller('proCtrl', function ($scope, $http) {
 
    $scope.pageLoad = function () {
        var pageMode = "LOAD_JOBS";
        var data = $.param({
            pageMode: pageMode
        });
        var config = {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8;'
            }
        }
        $http.post('ManageAdminAction.action', data, config)
            .success(function (data, status, headers, config) {
                $scope.result = data;
                $scope.jobList = JSON.parse("[" + data.jobList + "]");
            })
            .error(function (data, status, header, config) {
            });

    };
    
    $scope.createJob = function () {
        var pageMode = "CREATE_JOB";
        if ($scope.title == null || $scope.title == "") {
            $("#dispCreateError").html("Please enter the Title");
            return false;
        }
        if ($scope.description == null || $scope.description == "") {
            $("#dispCreateError").html("Please enter the Description");
            return false;
        }
        if (document.createJobForm.startDate.value == null || document.createJobForm.startDate.value == "") {
            $("#dispCreateError").html("Please enter the Startdate");
            return false;
        }
        if (document.createJobForm.endDate.value == null || document.createJobForm.endDate.value == "") {
            $("#dispCreateError").html("Please select the Enddate");
            return false;
        }
        var data = $.param({
            title: $scope.title,
            description: $scope.description,
            startDate: document.createJobForm.startDate.value,
            endDate: document.createJobForm.endDate.value,
            pageMode: pageMode
        });
        var config = {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8;'
            }
        }
        $http.post('ManageAdminAction.action', data, config)
            .success(function (data, status, headers, config) {
                $scope.result = data;
                $scope.flag = $scope.result.flag;
                if ($scope.flag === "Y") {
                    document.getElementById("dispCreateError").style.color = "green";
                    $("#dispCreateError").html("Job Created Successfully");
                    $scope.clearJobDetails();
                    $scope.pageLoad();
                } else if ($scope.flag === "F") {
                    document.getElementById("dispCreateError").style.color = "red";
                    $("#dispCreateError").html("Failed to create the job details");
                }

            })
            .error(function (data, status, header, config) {
            });

    };

    $scope.clearJobDetails = function () {
        $scope.title = "";
        $scope.description = "";
        $scope.startDate = "";
        $scope.endDate = "";
    }

   

});