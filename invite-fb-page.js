var classOfUiButton = document.getElementsByClassName("uiButton")
for (var i=0; i<=classOfUiButton.length;i++){
   classOfUiButton[i].click(function(){
         var classOfUiButtonText = document.getElementsByClassName("uiButtonText")
         for (var j=0; j<=classOfUiButtonText.length; j++){
                classOfUiButtonText[j].trigger("click");
         }
   });
}
