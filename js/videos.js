
let openList = document.getElementById("openList");
let homeFill = document.getElementById("home-fill");
let home = document.getElementById("home");

let openSetting = document.getElementById("openSetting");
let settingFill = document.getElementById("setting-fill");

/* open list */
var openListBtn = function () {
    openList.style.width = '100%';
    home.style.display = 'inline-flex';
    settingFill.style.display = 'none';
    setting.style.display = 'inline-flex'; 
    openSetting.style.width = '0%';
    homeFill.style.display = 'none';
}

home.addEventListener('click', function () {
    openSetting.style.width = '0%';
    openList.style.width = '0';
    home.style.display = 'none';
    homeFill.style.display = 'inline-flex';
    settingFill.style.display = 'none';
    setting.style.display = 'inline-flex';
})
/*//*/


var openSettingBtn = function () {
    openSetting.style.width = '100%';
    settingFill.style.display = 'inline-flex';
    setting.style.display = 'none';
    home.style.display = 'inline-flex';
    homeFill.style.display = 'none';
}
