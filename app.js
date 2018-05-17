var app = angular.module('QuizApp', []);

app.controller('QuizController', ["$scope","$timeout", function ($scope, $timeout) {
    $scope.fb = fb;
    $scope.quiz = {};

    $scope.fb.database().ref('quiz').on('value', function (snap) {
        $timeout(function () {
            $scope.quiz = snap.val();
        }, 0);
        
    });

}]);



function result() {
    var radios = document.getElementsByName('question{{question.id}}');

    for (var i = 0, length = radios.length; i < length; i++) {
        if (radios[i].checked) {
            var number = number + 10;
            alert(radios[i].value);
        }
    }
    alert("Your grade is: " + number);
}