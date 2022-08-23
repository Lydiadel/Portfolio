const imgContent = document.querySelectorAll('.img-content-hover');

function showImgContent(e) {
    for (var i = 0; i < imgContent.length; i++) {
        imgContent[i].style.left = e.pageX + 'px';
        imgContent[i].style.top = e.pageY + 'px';
    }
};

document.addEventListener('mousemove', showImgContent);

function myalert() {
    alert("Check the certifications!\n " +
        "Feel free to click on each certification " +
                 "for more information");
}

function education(){
    alert("Click on Highschool to see my verified diploma :)")
}

function myvideo(){
    alert("This is a video of me playing the piano. To listen to it, click on the button play and enjoy it!")
}