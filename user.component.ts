/**
 * Created by gm409k on 2/26/2017.
 */
import { Component } from '@angular/core';

@Component({
  selector: 'user',
  template: `
    <h1>Welcome: {{name}}</h1>
    <p><b>Your Email is:</b> {{email}} </p>
    <p><b>Your Address is:</b> {{address.street}}, {{address.city}}, {{address.state}} -  {{address.zip}}</p>
        
    <button (click)="toggleHobbies()"> {{showHobbies ? "Hide Hobbies" : "Show Hobbies"}} </button>
    <div *ngIf="showHobbies">
      <ul>
        <li *ngFor="let hobby of hobbies; let i = index"> 
          {{hobby}} <button (click)="deleteHobby(i)">X</button></li>
      </ul>
     <form (submit)="addHobby(hobby.value)">
        <label>Add Hobby: </label> <br />
        <input type="text" #hobby  /> <br  />
      </form>
    </div>

    <h3> Edit User Details: </h3>
    <form>
      <label>Name: </label> <br />
      <input type="text" name="name" [(ngModel)]="name"  /> <br  />
      <label>Email: </label> <br />
      <input type="text" name="email" [(ngModel)]="email"  /> <br  />
      <label>Street: </label> <br />
      <input type="text" name="address.street" [(ngModel)]="address.street"  /> <br  />
      <label>City: </label> <br />
      <input type="text" name="address.city" [(ngModel)]="address.city"  /> <br  />
      <label>State: </label> <br />
      <input type="text" name="address.state" [(ngModel)]="address.state"  /> <br  />
      <label>Zip: </label> <br />
      <input type="text" name="address.zip" [(ngModel)]="address.zip"  /> <br  />
    </form> 
`,  
})
export class UserComponent {
  /*
   name = 'Gayas Baig';
   email = 'moghal.gayasbaig@gmail.com';
   address = {
   street: '20360 Anza Ave Apt#9',
   city: 'Torrance',
   state: 'CA',
   zip: '90503'
   };
   */
  /*
   name;
   email;
   address;
   */
  name:string;
  email:string;
  address:address;

  hobbies: string[];
  showHobbies: boolean;

  constructor() {
    //console.log('constructor ran');
    this.name = 'Gayas Baig';
    this.email = 'moghal.gayasbaig@gmail.com';
    this.address = {
      street: '20360 Anza Ave Apt#9',
      city: 'Torrance',
      state: 'CA',
      zip: '90503'
    }
    this.hobbies = ['Reading','Swimming','Tennis'];
    this.showHobbies = false;
  }

  toggleHobbies () {
    if (this.showHobbies == true) {
      this.showHobbies = false;
    } else {
      this.showHobbies = true;
    }
  }
  addHobby(hobby){
    //console.log(hobby);
    this.hobbies.push(hobby);
  }
  deleteHobby(i){
    this.hobbies.splice(i,1);
  }
  

  )
}

interface address {
  street: string;
  city: string;
  state: string;
  zip: string;
}


