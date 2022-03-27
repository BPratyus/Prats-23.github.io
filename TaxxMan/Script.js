function calculate(){
    let year=document.getElementById("year").value;
    let payer=document.getElementById("payer").value;
    let gender=document.getElementById("gender").value;
    let res=document.getElementById("Rstat").value;
    let income=document.getElementById("income").value;
    let tax=0,surcharge=0;
    if(income<=250000){
       tax=0 
    }
    else if(income>=250001 && income<=500000){
        tax=0.05*income;
    }
    else if(income>=500001 && income<=1000000){
        tax=0.2*income;
    }
    else{
        tax=0.3*income;
    }

     if(income>=5000000 && income<10000000){
         surcharge=0.1*income;
     }
     else if(income>=10000000 && income<20000000){
         surcharge=0.15*income;
     }
     else if(income>=20000000 && income<50000000){
         surcharge=0.25*income;
     }
     else{
         surcharge=0.37*income;
     }

     let cess=0.4*(tax+surcharge);

     if(res=="Resident" && income<=500000 && payer=="Individual" &&tax!=0){
         tax-=12500;
         alert("Relief u/s 87A applied")
     }
    document.getElementById("IT").value=tax;
    document.getElementById("surcharge").value=surcharge;
    document.getElementById("cess").value=cess;
    document.getElementById("total").value=tax+surcharge+cess;

}
function clear(){
    document.getElementsByTagName("input").value=" ";
}