function correctDate(date)
{
    return date<10 ? "0"+date : date;
}


function sale(){
    let saleDate = new Date(2024,12,12);
    let currentDate = new Date();
    let date = saleDate -currentDate;
    let day = Math.floor(date/(24*60*60*1000));
    let hours = Math.floor((date%(24*60*60*1000))/(60*60*1000));
    let minutes = Math.floor((date%(60*60*1000))/(60*1000));
    let ClockValue = document.getElementsByClassName("Date");
    ClockValue[0].innerHTML=correctDate(day) + ":";
    ClockValue[1].innerHTML=correctDate(hours) + ":";
    ClockValue[2].innerHTML=correctDate(minutes) ;

    // ClockValue[4].innerHTML=correctDate(day) + ":";
    // ClockValue[5].innerHTML=correctDate(hours) + ":";
    // ClockValue[6].innerHTML=correctDate(minutes) + ":";

    if(date<=0){
        ClockValue[0].innerHTML='00' + ":";
        ClockValue[1].innerHTML='00' + ":";
        ClockValue[2].innerHTML='00' ;

        // ClockValue[4].innerHTML='00' + ":";
        // ClockValue[5].innerHTML='00' + ":";
        // ClockValue[6].innerHTML='00' + ":";
    }
}
sale();
setInterval(()=>{
    sale()
},1000);




let wrapper = document.querySelector(".wrapper");
let popUp = document.querySelector(".wrapper .popUp");
let typ = document.querySelector(".wrapper .thankYouPage");
let btns = document.querySelectorAll("section button");
let formBtn =document.querySelector(".form button");
let regBtn = document.querySelector(".Reg");
let username = document.getElementsByName("username")[0];
let userphone = document.getElementsByName("userphone")[0];


btns.forEach(btn =>{
    btn.addEventListener('click', showpopUp);
});

wrapper.addEventListener('click', hidepopUp);

function showpopUp(){
    wrapper.style.display = "flex";
    popUp.style.display = "flex";
    typ.style.display = "none";

}

function hidepopUp(){
    let elem = event.target;
    if(elem == wrapper)
    {
        wrapper.style.display = "none";
        typ.style.display = "flex"
    }
}
formBtn.addEventListener("click", sentForm);

function sentForm(){
    event.preventDefault();
    if(username.value.length > 1){
        if(userphone.value.length == 13)
        {
            showTYP();
        }
        else{
            console.log("неверный номер");
        }
    }else{
        console.log("Короткое имя");
    }
}
function showTYP(){
    popUp.style.display = "none";
    typ.style.display = "flex";
}



function openLast(event) {
    event.preventDefault(); 

  // Проверка, что имя длиннее одного символа и телефон состоит из 13 символов
  if (username.value.length > 1 && userphone.value.length == 13) {
    let set = document.querySelector('#set');
    let set2 = document.querySelector('#set2');

    set2.style.display = 'none'; // Скрываем форму
    set.style.display = 'flex'; // Показываем страницу благодарности

    console.log('Форма отправлена успешно!');
} else {
    // Логика при неверных данных (не показываем pop-up)
    if (username.value.length <= 1) {
        set2.style.display = 'none';
        console.log("Короткое имя");
    }
    if (userphone.value.length != 13) {
        set2.style.display = 'none';
        console.log("Неверный номер телефона");
    }
}
}

// Добавляем только обработчик для кнопки отправки
regBtn.addEventListener('click', openLast);