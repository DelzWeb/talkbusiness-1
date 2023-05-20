if (document.cookie.includes('buttonClicked=true')) {
    document.cookie = 'buttonClickedagain=false';
    document.getElementById("darkMode").style.transition = '3s';
    document.getElementById("darkMode").style.display = 'none';
    document.getElementById("lightMode").style.display = 'block';
    document.getElementById("lightMode").style.color = 'white';
    document.querySelector('.wrapper').style.background = 'rgb(5, 5, 5)';//bckground
    document.querySelector("h1").style.color = 'white';
    document.querySelector('.username').style.color = 'white';
    document.getElementById("darkMode").style.color = 'white';
    document.querySelector('.bi-chevron-left').style.color = 'white';
    document.querySelector('.followersText').style.color = 'white';
    document.querySelector('.followingText').style.color = 'white';
    document.getElementById("followers").style.color = 'white';
    document.getElementById("following").style.color = 'white';
    document.querySelector('.bi-eye').style.color = 'white';
    document.querySelector('.returHome').style.color = 'white';


}else {
    document.getElementById("darkMode").addEventListener('click', function () {
    document.cookie = 'buttonClicked=true';
    document.cookie = 'buttonClickedagain=true';
    document.getElementById("darkMode").style.transition = '3s';
    document.getElementById("darkMode").style.display = 'none';
    document.getElementById("lightMode").style.display = 'block';
    document.getElementById("lightMode").style.color = 'white';
    document.querySelector('.wrapper').style.background = 'rgb(5, 5, 5)';
    document.querySelector("h1").style.color = 'white';
    document.querySelector('.username').style.color = 'white';
    document.getElementById("darkMode").style.color = 'white';
    document.querySelector('.bi-chevron-left').style.color = 'white';
    document.querySelector('.followersText').style.color = 'white';
    document.querySelector('.followingText').style.color = 'white';
    document.getElementById("followers").style.color = 'white';
    document.getElementById("following").style.color = 'white';
    document.querySelector('.bi-eye').style.color = 'white';
    document.querySelector('.returHome').style.color = 'white';
        
    })
};


/*light mode*/
if (document.cookie.includes('buttonClickedagain=true')) {
    document.cookie = 'buttonClicked=false';
    document.getElementById("darkMode").style.transition = '3s';
    document.getElementById("darkMode").style.display = 'block';
    document.getElementById("lightMode").style.display = 'none';
    document.getElementById("lightMode").style.color = 'black';
    document.querySelector('.wrapper').style.background = 'white';//bckground
    document.querySelector("h1").style.color = 'black';
    document.querySelector('.username').style.color = 'black';
    document.getElementById("darkMode").style.color = 'black';
    document.querySelector('.bi-chevron-left').style.color = 'black';
    document.querySelector('.followersText').style.color = 'black';
    document.querySelector('.followingText').style.color = 'black';
    document.getElementById("followers").style.color = 'black';
    document.getElementById("following").style.color = 'black';
    document.querySelector('.bi-eye').style.color = 'black';
    document.querySelector('.returHome').style.color = 'black';


}else {
    document.getElementById("lightMode").addEventListener('click', function () {
    document.cookie = 'buttonClickedagain=true';
    document.cookie = 'buttonClicked=false';
    document.getElementById("darkMode").style.transition = '3s';
    document.getElementById("darkMode").style.display = 'block';
    document.getElementById("lightMode").style.display = 'none';
    document.getElementById("lightMode").style.color = 'black';
    document.querySelector('.wrapper').style.background = 'white';
    document.querySelector("h1").style.color = 'black';
    document.querySelector('.username').style.color = 'black';
    document.getElementById("darkMode").style.color = 'black';
    document.querySelector('.bi-chevron-left').style.color = 'black';
    document.querySelector('.followersText').style.color = 'black';
    document.querySelector('.followingText').style.color = 'black';
    document.getElementById("followers").style.color = 'black';
    document.getElementById("following").style.color = 'black';
    document.querySelector('.bi-eye').style.color = 'black';
    document.querySelector('.returHome').style.color = 'black';
        
    })
};

function openLogout() {
    var openLogoutBtn = document.getElementById("logout-div");
    if (openLogoutBtn.style.display === "none") {
        openLogoutBtn.style.display = "block";
    }else {
        openLogoutBtn.style.display = "none";
    }
}