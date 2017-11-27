
  var presence = 0;
  var page = 0;

function testfinal(){
  if (page == 0) {
    $('#contactinf').show();
    $('#notthere').hide();
    $('#there').hide();
    $('#nothanx').hide();
    $('#playlist').hide();
    $('#thanx').hide();
  } else if ( page == 1 ){
    $('#contactinf').show();
    $('#notthere').hide();
    $('#there').show();
    $('#nothanx').hide();
    $('#playlist').hide();
    $('#thanx').hide();

  } else if ( page == 2 ){
    $('#contactinf').show();
    $('#notthere').hide();
    $('#there').hide();
    $('#nothanx').hide();
    $('#playlist').hide();
    $('#thanx').hide();
  };
};

function button1(){
  presence = 1;
  };
function button2(){
    if (presence == 1) {
      page = 1;
      testfinal();
    } else {
      page = 2;
      testfinal();
    }
    return false;
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
