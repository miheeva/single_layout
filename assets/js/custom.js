(function ($) {
    $(document).ready(function () {
        labelWidth();
        uploadMusic();
        playAudio();
        audioTimer();
        $(window).resize(function () {
            resizeCover();
            labelWidth();
        });
        $('#buy').click(function () {
            $('#buyModal').css('display','flex');
        });
        $(document).mouseup(function (e){
            var modal = $("#buyModal");
            if (modal.is(e.target)
                && modal.has(e.target).length === 0) {
                modal.hide();
            }
        });
        var loadFile = function(event) {
            var output = document.getElementById('output');
            output.src = URL.createObjectURL(event.target.files[0]);
        };
    });

    function labelWidth() {
        var label = $('.imgUpload');
        label.css('height',label.width());
    }
    function resizeCover() {
        var cover = $('.coverImg');
        if ($(window).height() < 685) {
            console.log($(window).height());
            cover.css('height',$(window).height() + 'px');
        }
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
        buttonPlay.html('<img class="imgPlay" src="assets/img/play.png" alt="">');
        buttonPlay.click(function () {
            if (audio.paused) {
                buttonPlay.html('<img class="imgPause" src="assets/img/play.png" alt="">');
                audio.play();
            } else {
                buttonPlay.html('<img src="assets/img/pause.png" alt="">');
                audio.pause();
            }
        });
    }
    function audioTimer() {
        var audio = document.getElementById('sound');
        if (audio) {
            var duration;
            audio.addEventListener('loadedmetadata', function () {
                duration = audio.duration;
                setInterval(function () {
                    var currTime = getMinutes(Math.floor(audio.currentTime));
                    var durr = getMinutes(Math.floor(duration));
                    audioTimer.text('(' + (currTime) + '/' + durr + ')');
                }, 1000)
            });
            if (audio)
                var audioTimer = $('.audioTimer');
        }
    }
    function getMinutes(seconds) {
        var minutes = seconds / 60;
        var sec = seconds % 60 < 10 ? '0' +  (seconds % 60) : seconds % 60;
        return (Math.floor(minutes) + ':' + sec);
    }
    // function pseudoValidateForm() {
    //     var nameSong = $('#nameSong'), lyricsSong = $('#textSong'), imageSong = $('#loadImg'),
    //         musicSong = $('#loadMusic'), iTunesLink = document.getElementById('siTunes'), googlePlayLink = $('#sGooglePlay');
    //     if (nameSong.length != 0 && nameSong.val() != ' ' && lyricsSong != 0 && lyricsSong.val() != ' ' && imageSong.val() != '' && musicSong.val != '') {
    //         $('#publishButton').removeAttr('disabled');
    //     } else {
    //         $('#publishButton').attr('disabled','disabled');
    //     }
    // }


    var loadImg = document.getElementById('loadImg');
    if (loadImg) {
        loadImg.addEventListener('change', function (event) {
            var previewImg = document.getElementById('previewImg');
            previewImg.src = URL.createObjectURL(event.target.files[0]);
            if (previewImg.val != '') {
                $('.imgUploadBtn').text('');
                $('.sizes').remove();
            }
            ;
        })
    }




})(jQuery);






