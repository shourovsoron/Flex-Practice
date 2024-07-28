const MyGallery = document.querySelector(".all-img-wrapper");

MyGallery.addEventListener("click" ,(e)=>{
    if(e.target.tagName == "IMG"){
        const CurrentImg = e.target.getAttribute("src")
        OpenImage(CurrentImg)

    }
   
});


function OpenImage(CurrentImg){
    console.log(CurrentImg);
    const OpenImage = document.querySelector(".OpenImage");
    const ImagePlayer = document.querySelector("#ImagePlayer");
    const ClogeGallery = document.querySelector(".CloseBTN");

    OpenImage.classList.add("ShowImage");
    ImagePlayer.src=CurrentImg;

    ClogeGallery.addEventListener("click" ,(e)=>{
        OpenImage.classList.remove("ShowImage");      
    });

}

