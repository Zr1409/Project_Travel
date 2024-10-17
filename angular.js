var app=angular.module("myapp",["ngRoute"]);
app.config(function($routeProvider){
    $routeProvider
    .when("/",{templateUrl: "trangchu.html",controller: "myCtrl"})
    .when("/trangchu",{templateUrl: "trangchu.html",controller: "myCtrl"})
    .when("/gioithieu",{templateUrl: "login.html",controller: "myCtrl"})
    .when("/lienhe",{templateUrl: "lienhe.html",controller: "myCtrl"})
    .when("/login",{templateUrl: "login.html",controller: "myCtrl"})
    .when("/dangky",{templateUrl: "dangky.html",controller: "myCtrl"})
    .when("/detail/:id",{templateUrl: "dulichtrongnuoc.html",controller: "myCtrl"},)
    .otherwise({templateUrl: "trangchu.html",controller: "myCtrl"})
})  
