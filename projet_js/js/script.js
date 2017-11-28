
  var presence = 0;
  var page = 0;

function testfinal(){
  if (page == 0) {
    $('#btn').show();
    $('#contactinf').show();
    $('#notthere').hide();
    $('#there').hide();
    $('#nothanx').hide();
    $('#playlist').hide();
    $('#thanx').hide();
    $('#buttonfinalenvoi').hide();
  } else if ( page == 1 ){
    $('#btn').hide();
    $('#contactinf').hide();
    $('#notthere').hide();
    $('#there').show();
    $('#nothanx').hide();
    $('#playlist').hide();
    $('#thanx').hide();
    $('#buttonfinalenvoi').hide();

  } else if ( page == 2 ){
    $('#btn').hide();
    $('#contactinf').hide();
    $('#notthere').show();
    $('#there').hide();
    $('#nothanx').hide();
    $('#playlist').hide();
    $('#thanx').hide();
    $('#buttonfinalenvoi').hide();

  } else if ( page == 3 ){
    $('#btn').hide();
    $('#contactinf').hide();
    $('#notthere').hide();
    $('#there').hide();
    $('#nothanx').hide();
    $('#playlist').show();
    $('#thanx').hide();
    $('#buttonfinalenvoi').show();

  } else if ( page == 4 ){
    $('#btn').hide();
    $('#contactinf').hide();
    $('#notthere').hide();
    $('#there').hide();
    $('#nothanx').show();
    $('#playlist').hide();
    $('#thanx').hide();
    $('#buttonfinalenvoi').hide();

  } else if ( page == 5 ){
    $('#btn').hide();
    $('#contactinf').hide();
    $('#notthere').hide();
    $('#there').hide();
    $('#nothanx').hide();
    $('#playlist').hide();
    $('#thanx').show();
    $('#buttonfinalenvoi').hide();
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

function button3(){
  page = 3;
  testfinal();
  return false;
};

function button4(){
  page = 4;
  testfinal();
  return false;
};

function button5() {
  page = 5;
  testfinal();
  return false;
}

function button6() {

  $('#buttonfinalenvoi').before('<div id="playlist"><form><div class="formu"><label> Artiste : </label><input type="textarea"/></div><div class="formu"><label> Titre : </label><input type="textarea"/></div><div class="formu"><label> </label>Moment de la soirée :<select name="moment"><option value="apéro"> apéro </option><option value="repas"> repas </option><option value="dessert"> dessert </option><option value="après diner"> après diner </option></select></div><div class="formu"><label> Heure de passage</label><input id="time" type="time"/></div><div class="formu"><input id="aj" type="image" src="../ims/btn_ajouter.png" onClick="return button6()"/><input id="poub" type="image" src="../ims/btn_poubelle.jpg"/><input id="save" type="image" src="../ims/Save-icon.png"/></div></form></div>');
  return false;
}

/*window.setInterval(function() {
console.log (presence);
}, 1000); */

/* var page1 = document.getElementById('contactinf').style.visibility='visible';
var page2 = document.getElementById('notthere').style.visibility='hidden';
var page3 = document.getElementById('there').style.visibility='hidden';
var page4 = document.getElementById('nothanx').style.visibility='hidden';
var page5 = document.getElementById('playlist').style.visibility='hidden';
var page6 = document.getElementById('thanx').style.visibility='hidden';*/
