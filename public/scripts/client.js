var myApp=angular.module( 'myApp', []);

myApp.controller( 'createAssignment', ['$scope', '$http', function($scope, $http){

  $scope.addRecord = function(){
    var assignmentObject = {
      assignment_number: $scope.assignmentIn,
      student_name: $scope.studentNameIn,
      score: $scope.scoreIn,
      submission_date: Date
    };
    console.log("created assignment: " + assignmentObject.student_name);

  $http({
    method: 'POST',
    url: '/postAssignment',
    data: assignmentObject,

  }).then( function(){
    $http({
      method: 'GET',
      url: '/getAssignment'
    }).then(function(response){
      $scope.allTheAssignments = response;
    })
  });
  //clear input values
  $scope.assignmentIn = '';
  $scope.studentNameIn = '';
  $scope.scoreIn = '';
  };
}]);
