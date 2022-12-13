let btnGet=document.querySelector("button");
let myTable=document.querySelector("#table");

let employees=[
{
    name:"seran",age:22,district:"vellore",salary:10000,design:"trainee"
},
{
	name:"lenin",age:27,district:"chennai",salary:20000,design:"senior"
},
{
	name:"paraba",age:32,district:"vilupuram",salary:40000,design:"manager"
},
{
	name:"gopi",age:27,district:"vellore",salary:20000,design:"developer"
},
{
	name:"srini",age:26,district:"krishnagiri",salary:35000,design:"lead"
},
];

let headers=['name','age','district','salary','design'];
btnGet.addEventListener("click",() =>{
		let table=document.createElement('table');
		let headerRow=document.createElement('tr');
	
	    headers.forEach(headerText =>{
			let header=document.createElement('th');
			let textnode=document.createTextNode(headerText);
			header.appendChild(textnode);
			headerRow.appendChild(header);
			});
		table.appendChild(headerRow);
		
		
		employees.forEach(emp => {
				let row=document.createElement('tr');
				Object.values(emp).forEach(text => {
				let cell=document.createElement('td');
			    let textnode=document.createTextNode(text);
			    cell.appendChild(textnode);
			    row.appendChild(cell);
	            })
            table.appendChild(row);
	           });
      myTable.appendChild(table);
    });