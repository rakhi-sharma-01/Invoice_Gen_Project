
let gettingData = () => {
    let billTitle = document.getElementById("title").value;
    let billNo = document.getElementById("bill_no").value;
    let userName = document.getElementById('u_name').value;
    let address = document.getElementById("U_address").value;
    let mobileNo = document.getElementById("u_mobile").value;

    document.getElementById("title").innerText = billTitle;
    document.getElementById("bill_no").innerText = billNo;
    document.getElementById('u_name').innerText = userName;
    document.getElementById('U_address').innerText = address;
    document.getElementById('u_mobile').innerText = mobileNo;

    console.log(billTitle, billNo, userName, address, mobileNo);

    let userData = {
        Name: userName,
        BillTitle: billTitle,
        BillNo: billNo,
        Address: address,
        date: '', 
        MobileNo: mobileNo
    };
    console.log(userData);
}

let itemList = [];
let itemsArray= [];

function calculate(){
    
let itemName = document.getElementById("item").value;
let quantity = document.getElementById("i_quant").value;
let price = document.getElementById("i_price").value;

if(quantity && price){
    let total = quantity * price ;
console.log("x",total);
document.getElementById("t_price").value = total;

let item = {itemName:itemName ,quantity:quantity,price:price ,total:total}
itemList.push(item);

console.log("Item:", item);

}
}

function listFunction(event) {
    console.log('hi')
    if(event){
    event.preventDefault();
    }

    let itemName = document.getElementById("item").value;
    let quantity = document.getElementById("i_quant").value;
    let price = document.getElementById("i_price").value;
    let total = document.getElementById("t_price").value;

    let item = {
        name: itemName,
        quantity: quantity,
        price: price,
        total: total
    };
    console.log("hi2")
    itemsArray.push(item);
    console.log("Item List:", itemsArray);

    appendItemToContainer(item);
}

function appendItemToContainer(item) {
    console.log("hi3",item)
    let newItem = document.createElement("div");
    newItem.classList.add("item");

    newItem.textContent = ` ${item.quantity} ${item.name}  X  ${item.price}   Total: ${item.total}`;

    let itemContainer = document.getElementById("itemContainer");
    console.log(item)
    itemContainer.appendChild(newItem);
}


function storeFormData(event) {
    if(event){
    event.preventDefault();
    }
            let formData = {
                user: {
                    billTitle: document.getElementById("title").value,
                    billNo: document.getElementById("bill_no").value,
                    date: document.getElementById("date").value,
                    userName: document.getElementById('u_name').value,
                    address: document.getElementById("U_address").value,
                    mobileNo: document.getElementById("u_mobile").value
                },
                items: itemList
            };
console.log("x",formData.user);
console.log("y",formData.items,itemList);
console.log(formData);
            let formDataJson = JSON.stringify(formData);

            localStorage.setItem("formData", formDataJson);
            window.location.href = 'http://127.0.0.1:5500/your_bills/bill.html';

        };