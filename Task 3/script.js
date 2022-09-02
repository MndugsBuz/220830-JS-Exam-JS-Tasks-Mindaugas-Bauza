/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Informacija atvaizdavima <div id="output"></div> bloke
1.1. Informacija, kuri pateikiama: "login" ir "avatar_url" reikšmės (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;

Pastaba: Sukurta kortelė, kurioje yra pateikiama vartotojo informacija, turi 
turėti bent minimalų stilių ir būti responsive;
-------------------------------------------------------------------------- */

// const ENDPOINT = 'https://api.github.com/users';

const displayGitHubUsers = (Users) => {

    const message = document.querySelector("#message");
    message.innerText = ''
    const thead = document.querySelector('#output');
    const thlogin = document.createElement('th')
    thlogin.innerText = 'LOGIN'
    const thavatar_url = document.createElement('th')
    thavatar_url.innerText = 'AVATAR URL'
    const tr = document.createElement('tr');
    tr.append(thlogin, thavatar_url);
    thead.append(tr);
    const tbody = document.querySelector('#output');

    Users.forEach(user => {

        const userlogin = document.createElement('td');
        userlogin.innerText = user.login;
        const useravatar_url = document.createElement('td');
        useravatar_url.innerText = user.avatar_url;

        const tr = document.createElement('tr');
        tr.append(userlogin, useravatar_url);
        tbody.append(tr);

    })
}

const fetchGitHubUsers = async () => {
    try {
        const response = await fetch('https://api.github.com/users');
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            displayGitHubUsers(data);
        }
    } catch (error) {
        console.error(error);
    }
};

document.querySelector('#btn').addEventListener('click', fetchGitHubUsers);
