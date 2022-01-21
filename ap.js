var video = document.getElementById('myVideo'); 


playBtn.addEventListener('click',function play() {video.play();

})

pauseBtn.addEventListener('click',function pause() {video.pause();

})

p2Btn.addEventListener('click',function other() {
  if(windows.location.href=='index.html')
  {
  window.location.href = 'index1.html';
  }
  else 
         window.location.href = 'index.html';
})

// video.addEventListener('',function(){ video.play(); });

//video.play();


//video.addEventListener('',function(){ video.play(); });


