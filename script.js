//Nombre de messages
var msgNumber = $(".msg").length;


//Actualisation du compteur
$("#num").text(msgNumber); 

//Click sur poubelle = supression du message et actualisation du compteur
$("body").on("click", ".pictoTrash",
function(){
    $(this).parent().remove()
    msgNumber--
    $("#num").text(msgNumber); 
})

//Click sur search 
$("#search").click(
function(){
    $(".auteur").each(function(){
        if($(this).text() == $("#lycos").val()) {
            $(this).parent().parent().show()
        } else {
            $(this).parent().parent().hide()
        }
    })
    $("#lycos").val("") 
   
})




//création nouveau message
$("#add").click(
function(){
        $("body").append(`
        
        <div class="msg">
                        
        <img class="avatar" src="./avatar-2.jpg" alt="">

                
        <div class="txt">
            <h6 class="auteur">Nico Tarnof</h6>`+
            $("#wesh").val() +
        `        
            </div>

        <img class="pictoTrash" src="./trash.png" alt="">
</div>`)
      
    //Réinitialisation du champs de saisie
    $("#wesh").val("new message") 

    //Actualisation du compteur
    msgNumber++
    $("#num").text(msgNumber);

    
                
    })




