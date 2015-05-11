var employeesList = [
    {
        firstName: 'John',
        lastName: 'King',
        phone: '0123456789',
        salary: 4500
    },
    {
        firstName: 'Steven',
        lastName: 'Gerard',
        phone: '0123456789',
        salary: 4500
    },
    {
        firstName: 'Diana',
        lastName: 'Ross',
        phone: '0123456789',
        salary: 4500
    },
    {
        firstName: 'Mike',
        lastName: 'Bob',
        phone: '0123456789',
        salary: 4500
    },
    {
        firstName: 'Emily',
        lastName: 'Hudson',
        phone: '0123456789',
        salary: 4500
    }
];
function showList() {
    var myTable = '<table border="1" class="table" id="myTable"><tr><th>First Name</th><th>Last Name</th><th>Phone</th><th>Salary</th><th>Vizualizare</th><th>Stergere</th></tr>';
    for(var i in employeesList) {
        myTable += '<tr><td>'+employeesList[i].firstName+'</td><td>'+employeesList[i].lastName+'</td><td>'+employeesList[i].phone+'</td><td>'+employeesList[i].salary+'</td><td><button onclick="testViz(\''+employeesList[i].firstName+' '+employeesList[i].lastName+ '\')">Vizualizare Angajat</button></td><td><button onclick="deleteThisEmployee('+i+')">Delete This Employee</button> </td></tr>';
    }
    myTable += '</table>';
    var secondTable='<table border="1" class="table" id="secondTable"><tr><th>Common Name</th><th>Number of Unique Names</th><th>Numbers</th><th>AverageSalary</th></tr>'
    secondTable +='<tr><td>'+commonName()+'</td><td>'+uniqueCounter()+'</td><td>'+firstFive()+'</td><td>'+averageSalary()+'</td></tr>'
    secondTable += '</table>';
    var container = document.getElementById('listcontainer');
    container.innerHTML = myTable + secondTable;

}
var Employee = function (firstName, lastName, phone, salary) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.phone = phone;
    this.salary = salary;
}
function addEmployee() {
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var phone = document.getElementById("phone").value;
    var salary = document.getElementById("salary").value;
    employeesList.push(new Employee(firstName, lastName, phone, parseFloat(salary)));
    showList();
}
function sumSalary(){
    var totalSalary=0.0;

    for(var i in employeesList)
       totalSalary+= employeesList[i].salary;

    var container = document.getElementById('listcontainer');
    container.innerHTML=totalSalary;
}
function deleteEmployee(){
    employeesList.pop();
    showList();
}

function testViz(emp){
    alert(emp);
}

function commonName(){

    var frequency = {};
    var max = 0;
    var result;

    for(var v in employeesList)
    frequency[employeesList[v].firstName]=0;

    for(var v in employeesList) {

        frequency[employeesList[v].firstName]=frequency[employeesList[v].firstName]+1;

        if(frequency[employeesList[v].firstName] > max) {
            max = frequency[employeesList[v].firstName];
            result = employeesList[v].firstName;
        }
    }
    return result;

}

function uniqueCounter(){
    var frequency = {};
    var count = 0;

    for(var v in employeesList)
        frequency[employeesList[v].lastName]=0;

    for(var v in employeesList) {

        frequency[employeesList[v].lastName]=frequency[employeesList[v].lastName]+1;
    }

    for(var v in employeesList){
        if(frequency[employeesList[v].lastName]==1) count++;
    }

    return count;
}

function firstFive(){
    var numberAp = {
        numbers: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
        app: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    };

    var returnNumbers="";

    for(var i in employeesList) {

        var temp=employeesList[i].phone;
        for(var v=0;v<temp.length; v++)
        numberAp.app[v]++;
    }
    for(var i = 0; i <8; i++)
        for(var j =i+1;j<9;j++)
            if(numberAp.app[i]<numberAp.app[j]){
                var aux1=numberAp.app[i];
                numberAp.app[i]=numberAp.app[j];
                numberAp.app[j]=aux1;
                var aux2=numberAp.numbers[i];
                numberAp.numbers[i]=numberAp.numbers[j];
                numberAp.numbers[j]=aux2;
            }

    for(var i = 0;i<5;i++)
        returnNumbers+=(numberAp.numbers[i]+', ');
   return returnNumbers;


}
function averageSalary(){
    var averageS=0;
    var noOfEmployees=0;

    for(var v in employeesList)
    {  averageS+=employeesList[v].salary;
        noOfEmployees++;}

    return averageS/noOfEmployees;
}
function deleteThisEmployee(index){
    employeesList.splice(index,1);
    showList();
}

function sortTable(col){

    var tb = document.getElementById("myTable");
    var tr = Array.prototype.slice.call(tb.rows, 1);
    var i;
    tr = tr.sort(function (a, b) {
        return (a.cells[col-1].textContent.trim().localeCompare(b.cells[col-1].textContent.trim())
                );
    });
    for(i = 0; i < tr.length; ++i)
        tb.appendChild(tr[i]);
}

function filterTable(input){
    var tb = document.getElementsByClassName("myTable");
    var tr = Array.prototype.slice.call(tb.rows, 1);
    var i;
    for(var i in )
}