export class User {
	private id: number;
	private email: string;
	private password: string;
  constructor(id: number, email: string, password: string) 
   { 
     this.id = id; 
	 this.email = email;
	 this.password = password;
	}	 
}