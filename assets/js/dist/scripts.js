!function(t){function e(){var e=t(".imgUpload");e.css("height",e.width())}function n(){var e=t(".coverImg");t(window).height()<685&&e.css("max-height",t(window).height()+"px")}function a(){t("#loadMusic").on("change",function(e){var n=0,a=setInterval(function(){o(n+=1),100==n&&(clearTimeout(a),t("#loader").css("background-color","#69EF8B"),t("#loader").text("Complete"))},40)})}function o(e){t("#loader").css("width",e+"%")}function i(){var e=document.getElementById("sound"),n=t(".playStop");n.html('<img class="imgPlay" src="assets/img/play.png" alt="">'),n.click(function(){e.paused?(n.html('<img class="imgPause" src="assets/img/play.png" alt="">'),e.play()):(n.html('<img src="assets/img/pause.png" alt="">'),e.pause())})}function c(){var e=document.getElementById("sound");if(e){var n;if(e.addEventListener("loadedmetadata",function(){n=e.duration,setInterval(function(){var t=s(Math.floor(e.currentTime)),o=s(Math.floor(n));a.text("("+t+"/"+o+")")},1e3)}),e)var a=t(".audioTimer")}}function s(t){var e=t/60,n=t%60<10?"0"+t%60:t%60;return Math.floor(e)+":"+n}t(document).ready(function(){e(),a(),i(),c(),t(window).resize(function(){n(),e()}),t("#buy").click(function(){t("#buyModal").css("display","flex")}),t(document).mouseup(function(e){var n=t("#buyModal");n.is(e.target)&&0===n.has(e.target).length&&n.hide()});var o=document.getElementById("loadImg");o&&o.addEventListener("change",function(e){var n=document.getElementById("previewImg");n.src=URL.createObjectURL(e.target.files[0]),""!=n.val&&(t(".imgUploadBtn").text(""),t(".sizes").remove())})})}(jQuery);