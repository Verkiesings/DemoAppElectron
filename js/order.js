var app = angular.module("myApp",[])

app.controller('myCtrl', function($scope) {

$scope.items = [];

    $scope.makeOrder = function() {
        var meal = $scope.meal;
        var empname = $scope.empname;
        var orderFrom = $scope.orderFrom;
        var price = $scope.price;
        var orderDate = new Date();
        if ( meal.length == 0 && empname.length  == 0 && orderFrom.length  == 0 && orderDate.length != 0 ) {
              
                swal("You have not ordered anything");
                dialog.close();
          
        } else if ( meal.length != 0 && empname.length  != 0 && orderFrom.length  != 0 && orderDate.length != 0) {
            
            $scope.items.push({
                'meal': $scope.meal,
                'Date' : orderDate,
                'empname' : $scope.empname,
                'orderFrom': $scope.orderFrom,
                'price': $scope.price
            })
            swal({
                title: "Good job!",
                text: "Hey there " + $scope.empname + " you decided to order " + $scope.meal + " from " + $scope.orderFrom + 
                " Awesome your order has been push in",
                icon: "success",
              });
            dialog.close();
            $scope.meal = "";
            $scope.empname = "";
            $scope.orderFrom = "";
            $scope.price = "";
        }
      } // close make order function


})