$(document).ready(function () {
    $(function () {
      $(".player").draggable();
    });

    $(".navbar-open").click(function () {
      $(".navbar").slideToggle();
    });
  });

  $("#iframe1").click(function () {
    document.getElementById('iframe').src = 'https://bandcamp.com/EmbeddedPlayer/album=837084838/size=large/bgcol=ffffff/linkcol=0687f5/transparent=true/';
    
  });
  


 var container = document.querySelector('.container');

 container.onclick = function(event) {
    target = event.target;
    //   switch(target.className) {
    //       case 'player-1':
    //       showPlayer('player1');
    //       break;
    //       case 'player-2':
    //       showPlayer('player2');
    //       break;
    //       case 'player-3':
    //       showPlayer('player3');
    //       break;
    //       case 'player-4':
    //       showPlayer('player4');
    //       break;
    //       case 'player-5':
    //       showPlayer('player5');
    //       break;
    //       case 'player-6':
    //       showPlayer('player6');
    //       break;
    //       case 'player-7':
    //       showPlayer('player7');
    //       break;
    //       case 'player-8':
    //       showPlayer('player8');
    //       break;
    //       case 'player-9':
    //       showPlayer('player9');
    //       break;
    //       case 'player-10':
    //       showPlayer('player10');
    //       break;
    //       case 'player-11':
    //       showPlayer('player11');
    //       break;
    //       case 'player-12':
    //       showPlayer('player12');
    //       break;
    //       case 'player-13':
    //       showPlayer('player13');
    //       break;
    //       case 'player-14':
    //       showPlayer('player14');
    //       break;
    //       case 'player-15':
    //       showPlayer('player15');
    //       break;
    //       case 'player-16':
    //       showPlayer('player16');
    //       break;
    //       case 'player-17':
    //       showPlayer('player17');
    //       break;
    //       case 'player-18':
    //       showPlayer('player18');
    //       break;
    //       case 'player-19':
    //       showPlayer('player19');
    //       break;
    //       case 'player-20':
    //       showPlayer('player20');
    //       break;
    //   }

      if (target.classList.contains('player-1')) {
        showPlayer('player1');
      }
      if (!target.classList.contains('player-1')) {
        removePlayer();
      }

      if (target.classList.contains('player-2')) {
        showPlayer('player2');
      } 
      if (target.classList.contains('player-3')) {
        showPlayer('player3');
      } 
      if (target.classList.contains('player-4')) {
        showPlayer('player4');
      }   
      if (target.classList.contains('player-5')) {
        showPlayer('player5');
      } 
      if (target.classList.contains('player-6')) {
        showPlayer('player6');
      }    
      if (target.classList.contains('player-7')) {
        showPlayer('player7');
      } 
      if (target.classList.contains('player-8')) {
        showPlayer('player8');
      } 
      if (target.classList.contains('player-9')) {
        showPlayer('player9');
      } 
      if (target.classList.contains('player-10')) {
        showPlayer('player10');
      } 
      if (target.classList.contains('player-11')) {
        showPlayer('player11');
      } 
      if (target.classList.contains('player-12')) {
        showPlayer('player12');
      } 
      if (target.classList.contains('player-13')) {
        showPlayer('player13');
      } 
      if (target.classList.contains('player-14')) {
        showPlayer('player14');
      }
      if (target.classList.contains('player-15')) {
        showPlayer('player15');
      } 
      if (target.classList.contains('player-16')) {
        showPlayer('player16');
      }
      if (target.classList.contains('player-17')) {
        showPlayer('player17');
      } 
      if (target.classList.contains('player-18')) {
        showPlayer('player18');
      }
      if (target.classList.contains('player-19')) {
        showPlayer('player19');
      } 
      if (target.classList.contains('player-20')) {
        showPlayer('player20');
      }       
    function removePlayer() {
        var player = document.getElementsByClassName('player');
        for (var i = 0; i < player.length; i++) {
            var players = player[i];
            players.classList.remove('show-player');
        }  
    }

    function showPlayer(pl) {
      var player = document.getElementById(pl);
      player.classList.toggle('show-player');
    }

}