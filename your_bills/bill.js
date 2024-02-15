document.addEventListener('DOMContentLoaded', function () {
    try {
        console.log("DOM content loaded");
        let user = getUserDataFromLocalStorage();
        console.log("Retrieved User Data:", user);
        displayUserDetails(user);
    } catch (error) {
        console.error("An error occurred:", error);
    }
});

let billTitleFromLocalStorage;
let billNoFromLocalStorage;

function getUserDataFromLocalStorage() {
    let storedFormData = localStorage.getItem("formData");

if (storedFormData) {
    let formData = JSON.parse(storedFormData);

    billTitleFromLocalStorage = formData.user.billTitle;
    billNoFromLocalStorage = formData.user.billNo;

} else {
    console.log("No formData found in local storage");
}
console.log(billTitleFromLocalStorage)
   
}

function displayUserDetails(user) {
    console.log("Displaying User Details:", user);

    let tableBody = document.querySelector('.table-bordered tbody');
    tableBody.innerHTML = "";

    let newRow = tableBody.insertRow();
    newRow.innerHTML = `<td class="td">${billTitleFromLocalStorage}</td>
                        <td class="td">${billNoFromLocalStorage}</td>
                        <td class="td">
                            <button class="button1">View</button>
                            <button class="button2">Edit</button>
                            <button class="button3">Delete</button>
                        </td>`;
                 
          newRow.querySelector(".button1").addEventListener('click',onViewButtonClick);
          newRow.querySelector(".button2").addEventListener('click',onEditButtonClick);
          newRow.querySelector(".button3").addEventListener('click',onDeleteButtonClick);

}

function onViewButtonClick(){
    window.location.href = "http://127.0.0.1:5500/view_bill/view.html"
}
function onEditButtonClick(){
    window.location.href = "http://127.0.0.1:5500/Invoice_Gen/user.html"
}
function onDeleteButtonClick(){
    localStorage.removeItem("formData");
    window.history.back();

}


