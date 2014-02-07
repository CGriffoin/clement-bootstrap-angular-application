'use strict';

var MENU = {
    HOME: {value: 0, name: "Home", id: "homeMenu"},
    ABOUT: {value: 1, name: "About", id: "aboutMenu"},
    CONTACT: {value: 2, name: "Contact", id: "contactMenu"}
};

myApp.controller('MainCtrl', function ($scope, AppService) {
    /*Mise à jour des onglets*/
    update(MENU.HOME);

    $scope.awesomeThings = [
        'HTML5 Boilerplate',
        'AngularJS',
        'Karma'
    ];
    AppService.fetch().success(function (resp) {
        $scope.names = resp.data;
    })
        .error(function (resp) {
            console.log(resp);
        });
});

myApp.controller('AboutCtrl', function ($scope, AppService) {
    /*Mise à jour des onglets*/
    update(MENU.ABOUT);
    /*Récupération des données 'about'*/
    AppService.fetch()
        .success(function (resp) {
            $scope.about = resp.about[0];
        })
        .error(function (resp) {
            console.log(resp);
        });
});

myApp.controller('ContactCtrl', function ($scope, AppService) {
    /*Mise à jour des onglets*/
    update(MENU.CONTACT);
    /*Récupération des données 'contacts'*/
    AppService.fetch()
        .success(function (resp) {
            $scope.contacts = resp.contacts;
        })
        .error(function (resp) {
            console.log(resp);
        });
});

function update(menu) {
    var EMPTY = "";
    var ACTIVE = "active";
    /*Initialisation des menus*/
    if(document.getElementById(MENU.HOME.id) !== null &&
       document.getElementById(MENU.ABOUT.id) !== null &&
       document.getElementById(MENU.CONTACT.id) !== null) {
        document.getElementById(MENU.HOME.id).className = EMPTY;
        document.getElementById(MENU.ABOUT.id).className = EMPTY;
        document.getElementById(MENU.CONTACT.id).className = EMPTY;
        /*Activation du menu sélectionné*/
        document.getElementById(menu.id).className = ACTIVE;
    }
};

