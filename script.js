let input = document.querySelector("#Inputval");

let select = document.getElementById("select");

let output = document.querySelector("#outputval");


const exchange = ()=>

    {
        let val = Number(input.value);
        if(select.value === "inr")
        {
            val = val * 95.72;
            console.log(val);
            return val;
        }
        else if(select.value === "usd")
        {
            val=val / 95.72;
            console.log(val);
            return val;
        }
    }


output.addEventListener("click" , ()=>
{
    output.innerText=exchange();
    console.log("working");
})
