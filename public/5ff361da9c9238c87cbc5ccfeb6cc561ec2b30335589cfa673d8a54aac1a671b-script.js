jQuery("#et-main-area").prepend(jQuery("#menu-menu-le-pilotage")); 
jQuery("#et-main-area").prepend(jQuery("#menu-menu-le-pilote")); 


jQuery("#et-main-area").prepend(jQuery("#menu-menu-le-poste-de-pilotage")); 
jQuery("#et-main-area").prepend(jQuery("#menu-menu-plan-de-reaction")); 

jQuery("#et-main-area").prepend(jQuery("#menu-menu-parachute-de-secours")); 
jQuery("#et-main-area").prepend(jQuery("#menu-turlulence-pilotage")); 

jQuery("#et-main-area").prepend(jQuery("#menu-menu-decrochage-asymetrique")); 


jQuery("#et-main-area").prepend(jQuery("#menu-menu-le-decrochage-et-la-marche-arriere")); 
jQuery("#et-main-area").prepend(jQuery("#menu-menu-pilotage-pendulaire")); 
jQuery("#et-main-area").prepend(jQuery("#menu-menu-wing-overs")); 
jQuery("#et-main-area").prepend(jQuery("#menu-menu-pilotage-cross")); 

jQuery("#et-main-area").prepend(jQuery("#menu-menu-autorotation")); 
jQuery("#et-main-area").prepend(jQuery("#menu-menu-vrille")); 
jQuery("#et-main-area").prepend(jQuery("#menu-menu-twist")); 
jQuery("#et-main-area").prepend(jQuery("#menu-menu-pilotage-parapente")); 
jQuery("#et-main-area").prepend(jQuery("#menu-menu-profils-pilotage")); 
jQuery("#et-main-area").prepend(jQuery("#menu-menu-turbulence-pilotage")); 
jQuery("#et-main-area").prepend(jQuery("#menu-menu-la-tempo-2")); 

jQuery("#et-main-area").prepend(jQuery("#menu-menu-360-engages"));
 
jQuery("#et-main-area").prepend(jQuery("#menu-menu-incidents-de-vols-2")); 
jQuery("#et-main-area").prepend(jQuery("#menu-menu-descendre")); 
jQuery("#et-main-area").prepend(jQuery("#menu-menu-pendulaire-intro")); 
jQuery("#et-main-area").prepend(jQuery("#menu-menu-pendulaire-tangage")); 
jQuery("#et-main-area").prepend(jQuery("#menu-menu-pendulaire-roulis")); 
jQuery("#et-main-area").prepend(jQuery("#menu-menu-virages-pendulaires"));
jQuery("#et-main-area").prepend(jQuery("#menu-menu-360-initiation"));  
jQuery("#et-main-area").prepend(jQuery("#menu-menu-voltige-intro"));  
jQuery("#et-main-area").prepend(jQuery("#menu-menu-voltige-SAT"));  
jQuery("#et-main-area").prepend(jQuery("#menu-menu-voltige-helicoptere"));  
jQuery("#et-main-area").prepend(jQuery("#menu-menu-voltige-360-asymetrique"));  
jQuery("#et-main-area").prepend(jQuery("#menu-menu-voltige-enchainements"));  
jQuery("#et-main-area").prepend(jQuery("#menu-menu-voltige-autres-manoeuvres")); 
jQuery("#et-main-area").prepend(jQuery("#menu-menu-voltige-sat"));  
jQuery("#et-main-area").prepend(jQuery("#menu-menu-voltige-360-asymetriques"));  
jQuery("#et-main-area").prepend(jQuery("#menu-menu-voltige-decrochage-dynamique"));
jQuery("#et-main-area").prepend(jQuery("#menu-menu-le-twist-2"));
jQuery("#et-main-area").prepend(jQuery("#menu-menu-bleu")); 
jQuery("#et-main-area").prepend(jQuery("#menu-menu-marron")); 

function highlightMenu(){
var cettePage = document.location.href;
//pour eviter les liens internes
if(cettePage.indexOf('#') != -1)
   cettePage = cettePage.substring(0,cettePage.indexOf('#'));

for(var i=0;i < document.links.length;i++){

    var lien = document.links[i].getAttribute('href');
	//IE retourne l'url total du lien tandis que NS retourne que l'attribut href
	//on contourne le probl�me en comparant les derniers caract�res
    if( cettePage.substring(cettePage.length-lien.length,cettePage.length) == lien ){
         document.links[i].className = 'menuselected';
    //cas de la homepage appel�e depuis la racine /
    }else if( (document.location.pathname == '/') && ( (lien.substring(0,6) == 'index.') || ( (cettePage + 'index.') == lien.substring(0,cettePage.length + 6) ))){
         document.links[i].className = 'menuselected';	
    }
}
}
highlightMenu();