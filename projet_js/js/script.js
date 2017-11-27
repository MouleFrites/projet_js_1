
  var presence = 0;
  var page = 0;

function testfinal(){
  if (page == 0) {
    var page1 = document.getElementById('contactinf').style.display='block';
    var page2 = document.getElementById('notthere').style.display ='none';
    var page3 = document.getElementById('there').style.display='none';
    var page4 = document.getElementById('nothanx').style.display ='none';
    var page5 = document.getElementById('playlist').style.display='none';
    var page6 = document.getElementById('thanx').style.display='none';
  } else if ( page == 1 ){
    page2 = 'block'
  }
}


function button1(){
  presence = 1;
  };
function button2(){
    if (presence == 1) {
      page = 1;
      testfinal();
    };
    };

function test3(){

  alert("bitch plz")
};

function test4(){
    page4 = 'block';
};

/*window.setInterval(function() {
console.log (presence);
}, 1000); */

/* var page1 = document.getElementById('contactinf').style.visibility='visible';
var page2 = document.getElementById('notthere').style.visibility='hidden';
var page3 = document.getElementById('there').style.visibility='hidden';
var page4 = document.getElementById('nothanx').style.visibility='hidden';
var page5 = document.getElementById('playlist').style.visibility='hidden';
var page6 = document.getElementById('thanx').style.visibility='hidden';*/
