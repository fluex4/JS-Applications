let inp = document.getElementById("in");
let oup = document.getElementById("out");
let inpL = document.getElementById("input");
let oupL = document.getElementById("output");
let inpT = document.getElementById("enc");
let oupT = document.getElementById("dnc");

function copy(){

}

inpT.addEventListener('click',()=>{
    inpL.innerText="Enter Text:"
    oupL.innerText="Encrypted Text:"
    inp.value="";
    oup.value="";
});
oupT.addEventListener('click',()=>{
    inpL.innerText="Enter Encrypted Text:"
    oupL.innerText="Text:";
    inp.value="";
    oup.value="";
});

function generate(){
    inp.value=inp.value.trim();
    if(inp.value!=""){
        if(inpT.checked==true){
            let str= inp.value;
            str=btoa(str);
            oup.value=str;
        }
        if(oupT.checked==true){
            let str= inp.value;
            str=atob    (str);
            oup.value=str;
        }

    }
}