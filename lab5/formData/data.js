var table = document.getElementById('user-table');
var tableBody = document.getElementById('user-tbody');
var form = document.getElementById('user-form');
var delete1 = document.getElementById('del1');

function addRow(userName,age,email){
    var newRow = document.createElement('tr');
    newRow.innerHTML=`
     <td style="border: solid; background-color: rgb(164, 194, 223); font-size:17px">${userName}</td>
     <td style="border: solid; background-color: rgb(164, 194, 223); font-size:17px">${age}</td>
     <td style="border: solid; background-color: rgb(164, 194, 223); font-size:17px">${email}</td>
    `;
    tableBody.appendChild(newRow);

    document.getElementById("name").value="";
    document.getElementById("age").value="";
    document.getElementById("email").value="";
}

function deleteRow(row){
    row.remove();
}


form.addEventListener('submit',(e)=>{
    e.preventDefault();
        var userName= document.getElementById('name').value.trim();
        var age= document.getElementById('age').value.trim();
        var email= document.getElementById('email').value.trim();;

        
        if(userName === '' || age === '' || email === ''){
            alert("Please fill out all fields");
        }
        else if(!/^[a-zA-Z]+$/.test(userName)){
            alert("Name should only contain alphabetic characters");
            return;
        }
    
         else if(age < 16 || age > 60){
            alert("Age must be between 16 and 60 years");
            return;
        }

        else if(email === 0){
            alert("Please enter your email");
            return;
        }


        else {
            addRow(userName, age, email);
        }
       
   
});
delete1.addEventListener('click',(e)=>{
    e.preventDefault();
    e.stopPropagation(); 
    const row = tableBody.querySelector('tr:last-child'); 
    deleteRow(row);
});


tableBody.addEventListener('click',(e)=>{
    if(e.target.classList.contains('del1')){
        const row = e.target.parentNode.parentNode;
        deleteRow(row);
    }
});
