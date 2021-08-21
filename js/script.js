const btntabExp = document.getElementById('experience');
const btntabEdu = document.getElementById('education');
const tabExp = document.getElementById('tabexp');
const tabEdu = document.getElementById('tabedu');

btntabExp.addEventListener('click', () => {
    console.log('click exp', btntabExp, tabExp);

    btntabExp.classList.add('active');
    tabExp.classList.add('active');

    btntabEdu.classList.remove('active');
    tabEdu.classList.remove('active');
});

btntabEdu.addEventListener('click', () => {
    console.log('click edu');

    btntabEdu.classList.add('active');
    tabEdu.classList.add('active');

    btntabExp.classList.remove('active');
    tabExp.classList.remove('active');
});