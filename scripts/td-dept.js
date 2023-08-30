// data of staffs in tool and die department


let tdStaffData = [
    {
        id : 1,
        name : "Saloop T S",
        post : "Head of the Tool and Die Department",
        ph : 9446854255,
        mail : "pjayasreekrishnan@gmail.com",
    },
    {
        id : 2,
        name : "Murali T S",
        post : "Engineering Drawing Lecturer",
        ph : 9744215917,
        mail : "muralivarapuzha@gmail.com",
    },
    {
        id : 3,
        name : "Bijili B W",
        post : "Trade Instructor in Tool and Die Engineering",
        ph : 9388968547,
        mail : "bijilibw.bw@gmail.com",
    },
    {
        id : 4,
        name : "Ratheesh V S",
        post : "Tradesman in Tool and Die Engineering",
        ph : 9400994307,
        mail : "srkpakkode@gmail.com",
    },
    {
        id : 5,
        name : "Sangeeth P Mohan",
        post : "G/L in Tool and Die Engineering",
        ph : 9656129948,
        mail : "sangheethmohan6@mail.com",
    },
    {
        id : 6,
        name : "Sanjeev Kumar P S",
        post : "Guest Demonstrator in Tool and Die Engineering",
        ph : 9656892150,
        mail : "guruvayoorsajeev@mail.com",
    },
];



// Loading the data to functions when the page loads
window.onload = () => {
    loadData(tdStaffData) 
};


// Function to display the data
function loadData(tdStaffData){
    const Body = document.getElementById('data-display');
    let dataHtml = '';
    for(let data of tdStaffData){
      dataHtml += `<div class="card m-3" style="width: 18rem;">`;
      dataHtml +=  `<div class="card-body">`;
      dataHtml += `<h5 class="card-title">${data.name}</h5>`;
      dataHtml += `<h6 class="card-subtitle mb-2 text-muted">${data.post}</h6>`;
      dataHtml += `<p class="card-text">${data.ph}<br>${data.mail}</p></div></div> </div>`;
    } 
    Body.innerHTML = dataHtml;

    
}