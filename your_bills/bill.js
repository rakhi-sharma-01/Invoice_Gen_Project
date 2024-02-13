
document.addEventListener('DOMContentLoaded', function () {
    try {
        console.log("DOM content loaded");
        let userData = getUserDataFromLocalStorage();
        console.log("Retrieved User Data:", userData);
        displayUserDetails(userData);
    } catch (error) {
        console.error("An error occurred:", error);
    }
});

function getUserDataFromLocalStorage() {
    let storedData = localStorage.getItem("user");
    console.log("Stored User Data:", storedData);

    if (storedData) {
        try {
            return JSON.parse(storedData);
        } catch (error) {
            console.error("Error parsing user data:", error);
            return {};
        }
    }

    return {};
}


function displayUserDetails(userData) {
    console.log("Displaying User Details:", userData);

    let tableBody = document.querySelector('.table-bordered tbody');
    tableBody.innerHTML = "";

    let newRow = tableBody.insertRow();
    newRow.innerHTML = `<td class="td">${userData.billTitle}</td>
                        <td class="td">${userData.billNo}</td>
                        <td class="td">
                            <button class="button1">View</button>
                            <button class="button2">Edit</button>
                            <button class="button3">Delete</button>
                        </td>`;
}
