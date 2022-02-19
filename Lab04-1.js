function outsider()
{
    newOut.classList.add('outt');
}
function inside()
{
    newIn.classList.add('inn');
}
const newOut = document.querySelector('.outside');
const newIn = document.querySelector('.inside');
newOut.addEventListener('click', outsider);
newIn.addEventListener('click', inside);