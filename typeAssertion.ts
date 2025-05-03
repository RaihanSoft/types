{

    let anything: any;
anything = "Next Level Web Development";
anything = 12344;

(anything as number).toFixed(2)


const KgToGm = (para: string | number): string | number | undefined => {
    if (typeof (para) === 'string') {
        let number = parseFloat(para) * 1000;
        return number

    }
    if (typeof (para) === "number") {
        return para * 1000;
    }

}
const result1 = KgToGm(1000) as number
const result2 = KgToGm("1000") as string
console.log(result1)
console.log(result2)


type customeError = {
    message : string;
}
try{

}catch(error){
    console.log((error as customeError).message)

}
}