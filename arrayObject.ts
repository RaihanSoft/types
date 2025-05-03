{


    type Roll1 = number[];
    const rollNumber1: Roll1 = [1, 2, 3]



    interface Roll2 {
        [index: number]: number
    }



    type Add = (num1: number, num2: number) => number

    interface Add1 {
        (num1: number, num2: number): number

    }


    const add: Add1 = (num1, num2) => {
        return num1 + num2;

    }









}