function vans(){
    var name=prompt("Enter your name");
    alert("Hi " + name);
    var size=prompt("enter your shoe size");
    if(size==6){
        alert(" if its " + size + ",it cost 800 ");
    }
    else if(size==7){
        alert(" if its " + size + ", it cost 1500 ");
    }
    else if(size==8){
        alert(" if its " + size + ", it cost 2000 ");
    }
        else{
       alert( size + " it will cost 2400 ");
        }
    var Age=prompt("Enter your Age");
    if(Age<18){
        alert("please visit the cartoon network");
    }
    else{
        alert("Welcome to this amazing site");
    }
}
vans();