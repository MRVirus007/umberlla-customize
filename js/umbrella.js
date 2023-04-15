const body = document.body;
function switchImgWithColor(bgColor, btnColor, imgName) {
  //document.getElementsByTagName('body')[0].style.backgroundColor = bgColor; 
    var umbrellaImg = document.querySelector("#umbrellaImg");
    umbrellaImg.src = '/img/loader_icon.svg'
    umbrellaImg.classList.add('rotate');
    umbrellaImg.style.width = "100px";

    //LogoImg show hide if exist
    var LogoImg = document.querySelector('#setLogo');
    LogoImg.style.display = "none";
    setTimeout(() => {
        body.style.backgroundColor = bgColor;
        umbrellaImg.src = '/img/' + imgName;
        umbrellaImg.classList.remove('rotate');
        umbrellaImg.style.width = "revert-layer";
        LogoImg.style.display = "block"
        document.querySelector(".custom-file-input label").style.backgroundColor = btnColor;
    }, 1000);
}

function preview_image(event) {
    //change button icon to loading...
    var uploadIconImg = document.querySelector('.upload-icon img');
    uploadIconImg.setAttribute('src', '/img/loader_icon.svg');
    uploadIconImg.classList.add('rotate');

    //Reset LogoImg
    document.querySelector('#setLogo').src="";

    //Hide umbrella to loading...
    var umbrellaImg = document.querySelector("#umbrellaImg");
    var tempSrc = umbrellaImg.getAttribute("src");
    umbrellaImg.src = '/img/loader_icon.svg';
    umbrellaImg.classList.add('rotate');
    umbrellaImg.style.width = "100px";
    setTimeout(() => {
        var reader = new FileReader();
        reader.onload = function () {
            //revert back the loading button image and 
            uploadIconImg.setAttribute('src', '/img/upload_icon.svg');
            document.querySelector('.file-name').textContent = event.target.files[0].name;
            uploadIconImg.classList.remove('rotate');

            //revert back the umbrella image change
            umbrellaImg.src = tempSrc;
            umbrellaImg.classList.remove('rotate');
            umbrellaImg.style.width = "revert-layer";

            //setting the logo image
            var output = document.getElementById('setLogo');
            output.src = reader.result;
        }
        reader.readAsDataURL(event.target.files[0]);
    }, 3000);
    
  }