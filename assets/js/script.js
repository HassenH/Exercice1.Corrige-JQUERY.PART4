$(document).ready(function() {
  var victory = 0;
  var defeat = 0;
  var even = 0;
  // Je lance ma fonction quand je click sur le bouton
  $('#shiFuMi').click(function(){
    // Je stock dans une variable un tableau(Array)
    var choices = ['Feuille','Ciseaux','Pierre'];
    //Je génère le choix de l'ordinateur
    var computerChoice = Math.floor(Math.random()*3);
    // Choix de l'utilisateur
    var userChoice = $('#userChoice option:selected').val();
    //Si le choix de l'ordinateur et le même choix que celui de l'utilisateur alors :
    if(computerChoice == userChoice){
    //une boite d'alerte ce gènere (Egalité).
      alert('égalité');
      even++;
    // Autrement si l'utilisateur gagner contre l'ordinateur exemple(Pierre > Ciseaux) alors :
    }else if ((choices[userChoice] == 'Pierre' && choices[computerChoice] == 'Ciseaux') || (choices[userChoice] == 'Ciseaux' && choices[computerChoice] == 'Feuille') || (choices[userChoice] == 'Feuille' && choices[computerChoice] == 'Pierre')) {
    // L'utilisateur gagne.
      alert('Youpi, tu as gagné');
      victory++;
    //Sinon :
    }else{
    // L'ordinateur Gagne
      alert('Youpi, tu as perdu');
      defeat++;
    }
    var victoryPercentage = (victory/(victory + defeat + even))*100;
    $('#result').html('<p class="resultVictory">Nombre de victoire : ' + victory + '(' + victoryPercentage +  '%)</p><p class="resultDefeat">Nombre de défaite : ' + defeat + '</p>');
  });
});


  // $(document).ready(function() {
  //   //j'initialise la variable (win) à 0.
  //   var win = 0;
  //   // j'initialise la variable(loose) à 0.
  //   var loose = 0;
  //
  //   // Je lance ma fonction quand je click sur ( rock, papers, scissors).
  //   $('#rock, #paper, #scissors ').click(function() {
  //     // Au lancement de ma fonction je récupère l'id.
  //     // This permet de sélectionner le bouton que j'ai clické.
  //     // attr = Fonction qui permet de récupérer un attribut (ici l'id).
  //     var me = $(this).attr('id');
  //     // Je crée un Array (Tableau).
  //     var choice = ['rock', 'paper', 'scissors'];
  //     // Je déclare une variable de nombre entier aléatoire.
  //     // L'ordinateur récupère dans le tableau un objet qui correspond à la variable aléatoire qu'on viens de créer.
  //     var computerChoice = choice[Math.floor(Math.random() * 3)];
  //     // On va stocker la variable me dans la balise dont l'id est (humanResult).
  //     var pourcentage = Math.round(win/(win+loose)*100);
  //     console.log(pourcentage);
  //     $('#humanResult').text(me);
  //     // On va stocker la variable computerChoice dans la balise dont l'id est(computerChoice).
  //     $('#computerResult').text(computerChoice);
  //     // Si on perd:
  //     if ((me == 'rock' && computerChoice == 'paper') || (me == 'paper' && computerChoice == 'scissors') || (me == 'scissors' && computerChoice == 'rock')) {
  //       //on affiche un texte(tu perd) dans la balise dont l'id est(Result) et:
  //       $('#result').text('You loose,');
  //       // on ajoute +1 à la variable (lose).
  //       loose++;
  //       //si on gagne:
  //     } else if ((me == 'rock' && computerChoice == 'scissors') || (me == 'paper' && computerChoice == 'rock') || (me == 'scissors' && computerChoice == 'paper')) {
  //       //on affiche un texte(tu gagne) dans la balise dont l'id est (result).
  //       $('#result').text('You Win Congratz');
  //       // on ajoute +1 à la variable(win).
  //       win++;
  //       // dans tout les autres cas y'a égalité.
  //     } else {
  //       // on affiche dans un texte(égalité).
  //       $('#result').text('Draw');
  //     }$f
  //     //on affiche la variable(win) dans la balise dont l'id est (humanScore)
  //     $('#humanScore').text(win);
  //     //on affiche la variable(loose) dans la balise dont l'id est(computerScore)
  //     $('#computerScore').text(loose);
  //     $('#scorePourcentage').text(pourcentage + '%');
  //   });
  // });
