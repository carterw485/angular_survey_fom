myApp.config(function($routeProvider){
  $routeProvider
    .when('/',{
        templateUrl: '/partials/login.pt.html'
    })
    .when('/poll/:id',{
        templateUrl: '/partials/poll.pt.html'
    })
    .when('/dashboard',{
        templateUrl: '/partials/polls.pt.html'
    })
    .when('/create',{
        templateUrl: '/partials/newpoll.pt.html'
    })
    .otherwise({
        redirectTo: '/',
    })
});