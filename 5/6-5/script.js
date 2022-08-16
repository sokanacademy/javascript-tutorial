// نمونه کد اجرا شده در جلسه ۶ فصل ۵


const img = document.getElementById('img');

fetch('https://randomuser.me/api/')
    .then(res => res.json())
    .then(obj => {
        img.src = obj.results[0].picture.large;
        console.log(obj.results[0].name.last);
    })