// data of staffs in electronics and communication engineering
let ecStaffData = [
    {
        id : 1,
        name : "Jayasree P",
        post : "Lecturer in Electroics and Communication Department",
        ph : 9446292725,
        mail : "pjayasreekrishnan@gmail.com",
    },
    {
        id : 2,
        name : "Remya K R",
        post : "Guest Lecturer in Electronics and Communication Engineering",
        ph : 9495104566,
        mail : "remyakrishnankr@gmail.com",
    },
    {
        id : 3,
        name : "Soumya P C",
        post : "Guest Lecturer in Electronics and Communication Engineering",
        ph : 8921744941,
        mail : "sowmya.pc3@gmail.com",
    },
    {
        id : 4,
        name : "Anusree K S",
        post : "Demonstrator in Electronics and Communication Engineering",
        ph : 9400899623,
        mail : "anusreeks2011@gmail.com",
    },
    {
        id : 5,
        name : "Shobha K K",
        post : "Trade Instructor in Electronics and Communication Engineering",
        ph : 9656129948,
        mail : "sobha.karattuparambil@gmail.com",
    },
    {
        id : 6,
        name : "Manoj K P",
        post : "Trade Instructor in Electronics and Communication Engineering",
        ph : 9496350908,
        mail : "kpmanojpattambi@gmail.com",
    },
];




// Loading the data to functions when the page loads
window.onload = () => {
    loadData(ecStaffData) 
};


function loadData(ecStaffData){
    const Body = document.getElementById('data-display');
    let dataHtml = '';
    for(let data of ecStaffData){
      dataHtml += `<div class="card m-3" style="width: 18rem;">`;
      dataHtml +=  `<div class="card-body">`;
      dataHtml += `<h5 class="card-title">${data.name}</h5>`;
      dataHtml += `<h6 class="card-subtitle mb-2 text-muted">${data.post}</h6>`;
      dataHtml += `<p class="card-text">${data.ph}<br>${data.mail}</p></div></div> </div>`;
    } 
    Body.innerHTML = dataHtml;

    
}
