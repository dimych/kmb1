

(function() {
  
        function View () {
       
    }    

    
    Loader.prototype.load = function(){
        return {
            spotlightArtist: [],
            beats: [],
            adsBeats: []
        }
    }
    
   
    function Loader () {
       
    }    

    Loader.prototype.load = function(){
        return {
            spotlightArtist: [],
            beats: [],
            adsBeats: []
        }
    }
   
   
   
    function ChartPage (loader, view) {
        this.loader = loader;
        this.view = view;
    }    

    ChartPage.prototype.init = function(){
        var beats = this.loader.load();
        this.view.render(beats);

    }



       


     var settings = {
         url: 'https://beatmaker.tv/app/api/beats',
         type: 'POST',
         success: function (data) {
             var beats = data.items;
             for (i = 0; i < beats.length; i++) {
                 var beatsi = beats[i];
                 var container = {
                    number: i+1,
                    imgsrc: beatsi.images.thumbnail,
                    title: beatsi.beatmakerName,
                    name: beatsi.name,
                    genre: beatsi.style.name,
                    mood: beatsi.mood.name,
                    price: beatsi.price[2].price,
                    currency : beatsi.price[2].currency
                 };
                 var templateEditor = $.templates("#tmpEditor");
                 var tempContainerEditor = templateEditor.render(container);
                 $('.editors-choice-block').eq(i).append(tempContainerEditor);
                 
                 var tempSpotlight = $.templates("#tmpspotlight");
                 var tempContainerSpotlight = tempSpotlight.render(container);
                 $('.spotlight-icon').eq(i).append(tempContainerSpotlight);
                 
                 var templateTrack = $.templates("#tmptrackitem");
                 var tempContainerTrack = templateTrack.render(container);
                 $('.track-item-menu').eq(i).append(tempContainerTrack);

                 var templateTrack = $.templates("#tmpplayingtrack");
                 var tempPlaingTrack = templateTrack.render(container);
                 $('.player-track-ava').eq(i).append(tempPlaingTrack);

                 var templateActiveTrack = $.templates("#tmpactivetrack");
                 var tempActiveTrack = templateActiveTrack.render(container);
                 $('.active-track-ava').eq(i).append(tempActiveTrack);
             }

         }

     }
     $.ajax(settings);

})();


(function() {
var loader = new Loader();
var view = new View();
    var page = new ChartPage(loader, view);
    page.init();	
})();