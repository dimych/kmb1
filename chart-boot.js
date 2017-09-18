(function() {
    // for (i=0;i<10;i++) {
    //     var newTrack= $('.chart-main').first().find('.track-item-menu').first().clone();
    //      $('.chart-main').first().append(newTrack);
    //  }
    //  for (i=0;i<10;i++) {
    //      var newTrack= $('.chart-main2').first().find('.track-item-menu').first().clone();
    //       $('.chart-main2').first().append(newTrack);
    //   }
    
      
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

                    //  price: beatsi.price,
                    //  currency : beatsi.price.currency
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
    

     //for
     //get template for each beat, put each beat to template,
     // render and append to html as we done in 16-20 rows

})();