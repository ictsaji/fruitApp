import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-b',
  templateUrl: './task-b.component.html',
  styleUrls: ['./task-b.component.css']
})
export class TaskBComponent implements OnInit {

  countHello: number = 0;

  ngOnInit(): void {

    const names = ["hello Deepu",
                    "hello",  "Ramya", 
                    "Hai kiran", 
                    "hello Samyu", 
                    "sweet", "car", 
                    "rushi says hello",
                    "helloart"
      ];

// Function to count items containing "hello"
function countHelloItems( namesOfPersons: string[]) {
  // filter to count items that contain "hello"
  return namesOfPersons.filter(item => item.includes('hello')).length;
}

// Call the function and log the result
this.countHello= countHelloItems(names);
console.log(`Count of items containing "hello" is : ${this.countHello}`);
    
  }

  // script to auto populate the form fields

  // Sample Data for Autofill
// const formData = {
//   firstName: 'sampleNmae',      
//   lastName: 'sampleLast' ,
//   country: 'chooseCountry' ,
//   birthMonth: 'mymonth', 
//   birthDay: 'myDay' ,
//   birthYear: '2000',
//   email: 'myemail@ghn.com',
//   pass: 'password'

// };

// Autofill the form fields
// document.querySelector('input[name="firstName"]').value = formData.firstName; 
// document.querySelector('input[name="lastName"]').value = formData.lastName; 
// document.querySelector('input[name="countrySelect"]').value = formData.country; 
//document.getElementById('form-dropdown-1738134708944-0').value = formData.birthMonth; 
//document.getElementById('form-dropdown-1738134708945-0').value = formData.birthDay; 
//document.getElementById('form-dropdown-1738134708947-0').value = formData.birthYear; 
// document.querySelector('input[name="appleId"]').value = formData.email; 
//document.getElementById('form-textbox-1738134708958-0').value = formData.pass; 


}
