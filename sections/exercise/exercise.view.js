define(["../../js/modules/view","../../js/lib/utils.js","../../js/lib/codemirror/lib/codemirror","../../js/lib/codemirror/mode/xml/xml","../../js/lib/codemirror/mode/css/css","../../js/lib/codemirror/mode/xml/xml"],function(e,t,r){var o=t.extend(e());return o.injectScript=function(){var e=["<!DOCTYPE html>","<html>","<head>",'  <meta charset="utf-8">',"  <title>Tytuł</title>","</head>","<body>","</body>","</html>"],t=document.querySelectorAll(".js-tab"),o=r(document.querySelector(".lines"),{mode:"text/html",tabMode:"indent",tabSize:2,lineWrapping:!0,lineNumbers:!0,viewportMargin:1/0,value:localStorage.getItem("text/html")||e.join("\n")});document.querySelector(".modal").classList.remove("modal--active");var a=function(e){var t=localStorage.getItem("progress");if(localStorage.getItem("progress")){if(t=JSON.parse(t),t.hasOwnProperty(this.id)&&t[this.id])return}else t={};var r=!0,o=localStorage.getItem("text/html").toLowerCase(),a=this.template.test.html,s=document.querySelector(".modal");s.innerHTML='<div class="modal">Coś poszło nie tak, sprawdź dokładnie!\n\rWykryte problemy:</div>';for(var l=0,i=a.length;i>l;l++)o.indexOf(a[l])<0&&(e.preventDefault(),s.textContent+="\n [HTML] "+a[l],r=!1);if(this.template.test.hasOwnProperty("css")){var c=localStorage.getItem("text/css")||"";c=c.toLowerCase();for(var n=this.template.test.css,l=0,i=n.length;i>l;l++)c.indexOf(n[l])<0&&(e.preventDefault(),s.textContent+=" \n [CSS] "+n[l],r=!1)}r?("object"!=typeof t&&(t=JSON.parse(t)),t[this.id]=!0,localStorage.setItem("progress",JSON.stringify(t))):s.classList.add("modal--active")}.bind(this),s=function(){var e=document.querySelector(".bar__tab--active"),t=e.dataset.mode;localStorage.setItem(t,o.getValue()),this.dataset.mode&&(e.classList.remove("bar__tab--active"),this.classList.add("bar__tab--active"),o.setValue(localStorage.getItem(this.dataset.mode)||""),o.setOption("mode",this.dataset.mode))},l=function(){var e=document.querySelector(".js-preview-container");e.classList.toggle("preview--active"),e.querySelector(".js-close").addEventListener("click",function(){e.classList.remove("preview--active")});var t=document.querySelector(".preview__frame").contentDocument,r=localStorage.getItem("text/html"),o=localStorage.getItem("text/css");r=r.replace("</head>","<style>\n"+o+"</style>\n</head>"),t.open(),t.write(r),t.close()};document.querySelector(".js-tab").classList.add("bar__tab--active"),document.querySelector(".progress__btn-next").addEventListener("click",function(e){s.call(this),a(e)}),document.querySelector(".js-preview").addEventListener("click",function(e){e.preventDefault(),s.call(this),l()});for(var i=0,c=t.length;c>i;i++)t[i].addEventListener("click",function(e){e.preventDefault(),s.call(this)})},function(){return o}});