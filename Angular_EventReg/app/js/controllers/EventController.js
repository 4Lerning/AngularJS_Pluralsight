'use strict';

eventsApp.controller('EventController', 
    function EventController($scope){

        $scope.event = {
            name: 'Bootcamp',
            date: '1/1/12',
            time: '23:00',
            location: {
                owner: 'BKK',
                organisation: 'KKF',
                rigthsReserved: 'All Rights Reserved'
            },
            imageURL: 'img/angularjs-logo.png',
        }

    });

    

