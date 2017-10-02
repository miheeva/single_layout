(function ($) {

    $(document).ready(function () {
        labelWidth();
        uploadMusic();
        playAudio();
        audioTimer();
        $(window).resize(function () {
            labelWidth()
        });

    });

    function labelWidth() {
        var label = $('.imgUpload');
        label.css('height',label.width());
    }
    function uploadMusic() {
        var input = $('#loadMusic');
        input.on('change', function (e) {
            var w = 0;
           var progress =  setInterval(function () {
                w += 1;
                increaseWidth(w);
               if (w == 100) {
                   clearTimeout(progress);
                   $('#loader').css('background-color','#69EF8B');
                   $('#loader').text('Complete');
               }
            }, 40);

        })
    }
    function increaseWidth(width) {
        $('#loader').css('width', width + '%');
    }
    function playAudio() {
        var audio = document.getElementById('sound');
        var buttonPlay = $('.playStop');
        buttonPlay.html('<img src="assets/img/play.png" alt="">');
        buttonPlay.click(function () {
            if (audio.paused) {
                buttonPlay.html('<img src="assets/img/play.png" alt="">');
                audio.play();
            } else {
                buttonPlay.html('<img src="assets/img/pause.png" alt="">');
                audio.pause();
            }
        });
    }
    function audioTimer() {
        var audio = document.getElementById('sound');
        var duration;
        audio.addEventListener('loadedmetadata', function() {
            duration = audio.duration;
            console.log(duration);
            setInterval(function() {
                var currTime = getMinutes(Math.floor(audio.currentTime));
                var durr = getMinutes(Math.floor(duration));
                audioTimer.text('(' + (currTime) + '/' + durr + ')');
            }, 1000)
        });
        if (audio)
        var audioTimer = $('.audioTimer');
    }
    function getMinutes(seconds) {
        var minutes = seconds / 60;
        var sec = seconds % 60 < 10 ? '0' +  (seconds % 60) : seconds % 60;
        return (Math.floor(minutes) + ':' + sec);
        console.log(seconds)
    }



})(jQuery);






