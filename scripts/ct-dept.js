// data of staffs in Computer engineering , electronics and communication engineering and tool and die department
let ctStaffData = [
    {
        id : 1,
        name : "Seena I T",
        post : "Head of the Computer Engineering Department",
        ph : 9048188865,
        mail : "seenaitsajeevan@gmail.com",
    },
    {
        id : 2,
        name : "Sivaramakrishnan",
        post : "Lecturer in Computer Engineering",
        ph : 9526603697,
        mail : "knsivarama@gmail.com",
    },
    {
        id : 3,
        name : "Leena P N",
        post : "Guest Lecturer in Computer Engineering",
        ph : 9544124360,
        mail : "leenavijayan@gmail.com",
    },
    {
        id : 4,
        name : "Sabitha C B",
        post : "Guest Lecturer in Computer Engineering",
        ph : 9400315292,
        mail : "sabithasanthosh1@gmail.com",
    },
    {
        id : 5,
        name : "Ashoka T",
        post : "Trade Instructor in Computer Engineering",
        ph : 9495309786,
        mail : "asokanpanayil@gmail.com",
    },
    {
        id : 6,
        name : "Neethu Nandanan",
        post : "Guest Demonstrator in Computer Engineering",
        ph : 9539062278,
        mail : "neethuvnandanan40@gmail.com",
    },
  ];
  

// Loading the data to functions when the page loads
window.onload = () => {
    loadData(ctStaffData)
};


// Function to display the data
function loadData(ctStaffData){
    const Body = document.getElementById('data-display');
    let dataHtml = '';
    for(let data of ctStaffData){
      dataHtml += `<div class="card m-3" style="width: 18rem;">`;
      dataHtml +=  `<div class="card-body">`;
      dataHtml += `<h5 class="card-title">${data.name}</h5>`;
      dataHtml += `<h6 class="card-subtitle mb-2 text-muted">${data.post}</h6>`;
      dataHtml += `<p class="card-text">${data.ph}<br>${data.mail}</p></div></div> </div>`;
    } 
    Body.innerHTML = dataHtml;

    
}
