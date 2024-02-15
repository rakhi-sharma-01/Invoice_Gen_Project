document.addEventListener('DOMContentLoaded',function(){

        let storedFormData = localStorage.getItem('formData');

        if(storedFormData){
            let formData = JSON.parse(storedFormData);

            populateViewBill(formData);
        }else{
            console.log("No formData found in local storage");
        }
    
})

function populateViewBill(formData){
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

let total = 0;

    formData.items.forEach(item => {
        document.querySelector('.middle .table_item').innerHTML += `
                    <tr>
                        <td>${item.itemName}</td>
                        <td>${item.quantity}</td>
                        <td>${item.price}</td>
                        <td>${item.total}</td>
                    </tr>
                `;
                total += parseFloat(item.total || 0);
            });
            document.querySelector('.middle .table_item').innerHTML += `
        <tr>
            <td colspan="3" class="total-label"><b>Bill Total<b></td>
            <td><b>${total.toFixed(2)}<b></td>
        </tr>
    `;
}         
