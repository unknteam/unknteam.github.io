define(["../../js/modules/view","../../js/lib/utils"],function(e,n){var t=n.extend(e());return t.injectScript=function(){document.querySelector(".js-play").addEventListener("click",function(e){e.preventDefault();var n=document.querySelector(".js-audio");n.paused?n.play():n.pause()})},function(){return t}});