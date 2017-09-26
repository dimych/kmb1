(function() {

function MyProfile(){
    this.loginTemplates = {
    };
};

MyProfile.prototype.logIn = function() {
};

MyProfile.prototype.logOut = function() {
};

MyProfile.prototype.searchInfo = function() {
};

MyProfile.prototype.downloadTracks = function() {
};

MyProfile.prototype.sumBuyTracks = function() {
};





for (i = 0; i < 3; i++) {
    var newTrack = $('.favorites').first().find('.song-menu').first().clone();
    $('.clon').first().append(newTrack);
}

//template for track
var track = {
    author: 'Dan Balan',
    name: 'Hold on Love',
    src: 'assets/images/MyProfileImages/Black.png',
    cost: 20.01,
    genre: 'POP',
    mood: 'SMOOTH',
    tags1: '#THEGAME',
    tags2: '#BESTALBOM',
    tags3: '#BESTTRACK'
};
var trackTemplate = $.templates('#track');
$('.clon').append(trackTemplate.render(track));

//template for user
var user = {
    name: 'Volodia',
    surname: 'Metall',
    email: 'vol.petro88@gmail.com',
    src: 'assets/images/MyProfileImages/mainLogo.png'
};
var userTemplate = $.templates('#user-info');
$('.user-about-info').append(userTemplate.render(user));


//cart cash sum function








    // $(documnt).on('click','.delete', listener)
    // <script id="Tmpl" type="text/template">
    // <label>Name:{{:name}}</label> 
    // <img src='{{:src}}'> 
    // </script>
})();