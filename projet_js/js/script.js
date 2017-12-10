
  var presence = 0;
  var page = 0;
  var test1;
  var buttonform = 1;
  var nbform = 1;

function testfinal(){
  if (page == 0) {
    $('#btn').show();
    $('#contactinf').show();
    $('#notthere').hide();
    $('#there').hide();
    $('#nothanx').hide();
    $('.playlist').hide();
    $('#thanx').hide();
    $('#buttonfinalenvoi').hide();
  } else if ( page == 1 ){
    $('#btn').hide();
    $('#contactinf').hide();
    $('#notthere').hide();
    $('#there').show();
    $('#nothanx').hide();
    $('.playlist').hide();
    $('#thanx').hide();
    $('#buttonfinalenvoi').hide();

  } else if ( page == 2 ){
    $('#btn').hide();
    $('#contactinf').hide();
    $('#notthere').show();
    $('#there').hide();
    $('#nothanx').hide();
    $('.playlist').hide();
    $('#thanx').hide();
    $('#buttonfinalenvoi').hide();

  } else if ( page == 3 ){
    $('#btn').hide();
    $('#contactinf').hide();
    $('#notthere').hide();
    $('#there').hide();
    $('#nothanx').hide();
    $('.playlist').show();
    $('#thanx').hide();
    $('#buttonfinalenvoi').show();

  } else if ( page == 4 ){
    $('#btn').hide();
    $('#contactinf').hide();
    $('#notthere').hide();
    $('#there').hide();
    $('#nothanx').show();
    $('.playlist').hide();
    $('#thanx').hide();
    $('#buttonfinalenvoi').hide();

  } else if ( page == 5 ){
    $('#btn').hide();
    $('#contactinf').hide();
    $('#notthere').hide();
    $('#there').hide();
    $('#nothanx').hide();
    $('.playlist').hide();
    $('#thanx').show();
    $('#buttonfinalenvoi').hide();
    $('.formu2').hide();
  };
};

function button1(){
  presence = 1;
  };
function button2(){
  var nomform = document.getElementById("nomform").value;
  var prenomform = document.getElementById("prenomform").value;
    if (nomform == "" && prenomform == ""){
      alert("Entrez au moins votre nom ou pseudo");
    } else if (nomform =="" && prenomform !="") {
      alert("Avec votre nom ça serais vraiment mieux ");
    } else if (nomform !="") {
      var validate = 1;
    }
    if (presence == 1 && validate == 1) {
      page = 1;
      console.log(" " + nomform + " " + prenomform + " sera à la soirée")
      testfinal();
    } else if (presence == 0 && validate == 1) {
      page = 2;
      console.log(" " + nomform + " " + prenomform + "ne sera pas à la soirée")
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
  $('.aj2').remove();
  page = 5;
  testfinal();
  return false;
}

function button6() {
  $('#buttonfinalenvoi').before('<div class="playlist">\
    <form name"test">\
      <div class="formu">\
        <label> Artiste : </label>\
        <input type="textarea" id="formartiste"/>\
      </div>\
      <div class="formu">\
        <label> Titre : </label>\
        <input type="textarea" id="formtitre"/>\
      </div>\
      <div class="formu">\
        <label> </label>\
        Moment de la soirée :\
        <select name="moment" id="formmoment">\
          <option value="apéro"> Apéro </option>\
          <option value="repas"> Repas </option>\
          <option value="dessert"> Dessert </option>\
          <option value="après diner"> Après-diner </option>\
        </select>\
      </div>\
      <div class="formu">\
        <label> Heure de passage</label>\
        <input id="formtime" type="time"/>\
      </div>\
      <div class="formu">\
        <input class="aj" type="image" src="../ims/btn_ajouter.png" onClick="return button6()"/>\
        <input class="poub" type="image" src="../ims/btn_poubelle.jpg" onClick="return button7(this)"/>\
        <input class="save" type="image" src="../ims/Save-icon.png" onClick="return button8(this)"/>\
      </div>\
    </form>\
  </div>');
  nbform = nbform + 1;
  buttonform = buttonform + 1;
  compteur_form();
  return false;
}
function button7(e) {

  $(e).parent().parent().remove();
  nbform = nbform - 1;
  buttonform = buttonform - 1;
  compteur_form();

  return false;
}
 function button8(e) {
  var formartist = 0;
  var formtitr = 0;
  var formmomen = 0;
  var formtim = 0;

  formartist = document.getElementById("formartiste").value;
  formtitr = document.getElementById("formtitre").value;
  formmomen = document.getElementById("formmoment").value;
  formtim = document.getElementById("formtime").value;
    if (formartist == "") {
        alert("Veuillez renseigner l'artiste");
        test1 = 1;
    } else if (formtitr == "") {
        alert("Veuillez renseigner le titre de la musique");
        test1 = 1;
    } else if (formmomen == "" && formtim == ""){
        console.log("Artiste : " + formartist);
        console.log("Titre : " + formtitr);
        console.log("Aucune importance pour le moment et l'heure");
      test1 = 2;
    } else if (formmomen == "") {
        console.log("Artiste : " + formartist);
        console.log("Titre : " + formtitr);
        console.log("Aucune importance pour le moment");
        console.log("Heure de passage : " + formtim);
        test1 = 2;
    } else if (formtim == "") {
        console.log("Artiste : " + formartist);
        console.log("Titre : " + formtitr);
        console.log("Moment de la soirée : " + formmomen);
        console.log("Aucune importance pour l'heure");
        test1 = 2;
    } else {
        console.log("Artiste : " + formartist);
        console.log("Titre : " + formtitr);
        console.log("Moment de la soirée : " + formmomen);
        console.log("Heure de passage : " + formtim);
        test1 = 2;
    }
    if (test1 == 2) {
      $(e).parent().parent().remove();
      buttonform = buttonform - 1;
      nbform = nbform - 1;
    }
    compteur_form()
    return false;
}
function compteur_form() {

  if (buttonform == 0 && nbform == 0) {
    $('#dictonlatin').after('<div>\
      <input class="aj2" type="image" src="../ims/btn_ajouter.png" onClick="return button6()"/>\
      </div>');
  } else if (buttonform == 1 && nbform == 1) {
    $('.aj2').remove();
  } else if (buttonform > 1)
    $('.aj2').remove();
}
