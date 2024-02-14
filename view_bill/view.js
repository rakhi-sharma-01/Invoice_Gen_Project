document.addEventListener('DOMContentLoaded',function(){

        let storedFormData = localStorage.getItem('formData');

        if(storedFormData){
            let formData = JSON.parse(storedFormData);

            populateViewBill(formData);
        }else{
            console.log("No formData found in local storage");
        }
        console.log("hi");
    
})

function populateViewBill(formData){
console.log("hi2");
    document.querySelector('.top .bill-details table').innerHTML=`
             <tr>
                <td>${formData.user.billTitle}</td>
                <td>${formData.user.billNo}</td>
                <td>${formData.user.date}</td>

             </tr>`;
    document.querySelector('.top .user-details table').innerHTML=`
             <tr>
                <td>${formData.user.userName}</td>
                <td>${formData.user.address}</td>
                <td>${formData.user.mobileNo}</td>
             </tr>`;
console.log("hi3");

    formData.items.forEach(item => {
        document.querySelector('.middle .table_item').innerHTML += `
                    <tr>
                        <td>${item.itemName}</td>
                        <td>${item.quantity}</td>
                        <td>${item.price}</td>
                        <td>${item.total}</td>
                    </tr>
                `;
            });
}         
