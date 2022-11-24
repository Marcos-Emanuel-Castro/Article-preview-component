const shareSocial = document.querySelector('.share-social-profile');
const iconShare = document.querySelector('.icon-share-profile');
const imageShare = document.querySelector('.icon-share');
const imageSharePath = document.querySelector('.icon-share-path');
const perfilProfile = document.querySelector('.perfil-profile');


iconShare.addEventListener('click', ()=>{
let bColor = iconShare.classList.contains('background');
if(shareSocial.style.display === 'none'){
    shareSocial.style.display = 'flex';
} else {
    shareSocial.style.display = 'none';
}
if(bColor == true){
    iconShare.classList.remove('background');
    iconShare.classList.add('b-color');
} else {
    iconShare.classList.add('background');
    iconShare.classList.remove('b-color');
}
imageSharePath.classList.toggle('color');
});