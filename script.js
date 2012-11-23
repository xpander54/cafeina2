// JavaScript Document

$(document).ready(function() {

  var isiPad = navigator.userAgent.indexOf("iPad") != -1;

  var isiPod = navigator.userAgent.indexOf("iPhone") != -1;

  //checkDevice(isiPad, isiPod);

  getJson();



});


(function(d, s, id) 
{
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = "//connect.facebook.net/es_LA/all.js#xfbml=1&appId=184596621607783";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

function clicked(lnk)
{
  //window.open(lnk,'mywindow','width=400,height=200')
  $(".iframe1").html("<iframe src='"+lnk+"'></iframe>");
}

function getJson()
{


  $.getJSON('streamApi.php', function(data) {
    
    var streamMeta = [];
    $.each(data, function(key, val) {
      streamMeta.push(val);
    });
    
    $(".currentSong").html("Ahora suena: "+streamMeta[8]);
    $(".nextSong").html("A continuación: "+streamMeta[9]);

  });

  

  startTimer();


}

function startTimer()
{
	
	var timer = $.timer(function() {
            getJson();
    });

    timer.set({ time : 20000, autostart : true });
    
}

function checkDevice(isiPad, isiPod){
  //alert("no mames");
  if(isiPad)
  {
    // do nothing
    
  }
  else if(isiPod)
  {
    //alert("iPhone")
  }
  else
  {
    location.href="http://wfm.fm/dsk/";

  }
}