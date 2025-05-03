{
    // generic type 

    // const roleNumber: number[] = [1, 2, 4]

    type GenericArray<T> = Array<T>

    const roleNumber: GenericArray<number> = [1, 2, 4]


    // const mentors: string[] = ["Riahan", "Siyam", "Sam"]

    const mentors: GenericArray<string> = ["Riahan", "Siyam", "Sam"]

    // const IsAdmin: boolean[] = [true, false, true]


    const IsAdmin: GenericArray<boolean> = [true, false, true]



    const user: GenericArray<{ name: string, age: number }> = [
        {
            name: "Raihan",
            age: 20,

        },
        {
            name: "Jhanker",
            age: 100
        },


    ]

    //generic tuple 

    type genericTuple<X, Y> = [X, Y]

    const man: genericTuple<string, string> = ["Raian", "Siyam"]




    const userWithId: genericTuple<number, { name: string, email: string }> = [1234, { name: "Raihan", email: "Siyamahamed007@gmail.com" }]







}