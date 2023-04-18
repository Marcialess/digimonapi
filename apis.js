$(document).ready(function () {
    $("#get-digimon").click(function () {
        const url = 'https://digimon-api.vercel.app/api/digimon'
        fetch(url)
            .then(response => response.json())
            .then(users => {
                console.log({ users })
                const list = $('#digimon-list')
                let usersList = ''
                for (let index = 0; index < users.length; index++) {
                    const user = users[index];
                    usersList = usersList + `<div class="card" style="width: 18rem;">
                    <img src="${user.img}" class="card-img-top" alt="${user.name}">
                    <div class="card-body">
                      <h5 class="card-title">${user.name}</h5>
                      
                      
                    </div>
                  </div> `
                }
                list.append(usersList)
            })
    })


    $("#btn-search").click(function () {
        const digimon = $('#search-input').val();
        const url = 'https://digimon-api.vercel.app/api/digimon/name/' + digimon;
        fetch(url)
            .then(response => response.json())
            .then(users => {
                const detail = $('#digimon-details');
                let detal = `<div class="card" style="width: 18rem;">
                <img src="${users[0].img}" class="card-img-top" alt="${users[0].name}">
                <div class="card-body">
                  <h5 class="card-title">${users[0].name}</h5>
                  <p class="card-text">${users[0].level}</p>
                  
                </div>
              </div>`
                detail.append(detal);

            })
    })

    });


{/* <div class="card" style="width: 18rem;">
  <img src="${user.img}" class="card-img-top" alt="${user.name}">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>

<li>${users[0].name} <img src="${users[0].img}">${users[0].level}</li> */}