//定义主模块并注入依赖
angular.module("SIIVApp", ["ngRoute"]);

//路由配置
angular.module("SIIVApp").config(["$routeProvider", function($routeProvider) {
    $routeProvider.when("/home",{
        templateUrl: "tmpl/home.html",
    }).otherwise({
            redirectTo: "/home"
        });
}]);