{
    // Type vs interface 

    type user1 = {
        name: string;
        age: number;
    }
    type rollnumber = number;
    type userwithroll1 = user1 & {role : string}
    
    const User1: UserWithRole2 = {
        name: "Raihan",
        age: 22,
        role:"Managet"
    }
    
    interface User2 {
        name :string;
        age : number;
    }


    interface UserWithRole2  extends User2{
        role:string 
    }

























}