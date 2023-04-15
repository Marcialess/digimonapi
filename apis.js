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
                    usersList = usersList + `<li>${user.name} <img src="${user.img}"></li>`
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
                let detal = `<li>${users[0].name} <img src="${users[0].img}">${users[0].level}</li>`;
                detail.append(detal);

            })
    })

    });
