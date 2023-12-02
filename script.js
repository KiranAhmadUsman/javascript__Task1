
const myForm = document.getElementById("myForm");
const displayDataContainer = document.getElementById("displayData");
const array = [];

myForm.addEventListener("submit", function (event) {
    event.preventDefault();
    let username = document.getElementById("username").value;
    let email = document.getElementById("email").value;
    let address = document.getElementById("address").value;
    let skill = document.getElementById("skill").value;

    const formData = {
        username: username,
        email: email,
        address: address,
        skill: skill
    };
    array.push({ ...formData });
    displayDataInCards();
    document.getElementById("username").value = "";
    document.getElementById("email").value = "";
    document.getElementById("address").value = "";
    document.getElementById("skill").value = "";

});
function displayDataInCards() {
    displayDataContainer.innerHTML = "";
    array.forEach(data => {
        const card = document.createElement("div");
        card.classList.add("card");
        card.innerHTML = `
            <p><strong>Username:</strong> ${data.username}</p>
            <p><strong>Email:</strong> ${data.email}</p>
            <p><strong>Address:</strong> ${data.address}</p>
            <p><strong>Skill:</strong> ${data.skill}</p>
        `;
        const del = document.createElement('button');
        del.innerText = 'Delete';
        card.append(del);
        del.addEventListener('click', function () {
            card.remove();
        })
        displayDataContainer.appendChild(card);
    });
}
