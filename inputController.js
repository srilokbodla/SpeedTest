
app.controller("InputController", function ($scope, $timeout) {
    $scope.disableValue = true;
    var runCounter;
    var countDown = 60;
    $scope.counterRunning = false;
    $scope.timeLeft = countDown;
    runCounter = function () {
        $scope.timeLeft = countDown;
        if (countDown == 0) {
            $scope.disableValue = "true";
            $scope.score = 0;
            $scope.score = $scope.text.length;
            $scope.counterRunning = false;
            return;
        }
        countDown--;
        $timeout(runCounter, 1000);
        return;
    };
    $scope.start = function () {
        document.inputform.inputArea.focus();
        $scope.disableValue = false;
        $scope.counterRunning = true;
        runCounter();
    };
    $scope.reset = function () {
        if (!$scope.counterRunning) {
            $scope.text = '';
            $scope.score = 0;
            $scope.timeLeft = countDown = 10;
        }
    }
});