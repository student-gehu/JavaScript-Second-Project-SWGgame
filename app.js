let user=prompt("Enter Snake , Water or Gun")
//it will generate a random number between 1 to 3
let cpu=Math.floor(Math.random()*3);
let cpu1=["Snake","Water","Gun"][cpu]

const match=(cpu1,user)=>{
    if(cpu1==user){
        return "Nobody";
    }
    else if(cpu1==="Snake" && user==="Water"){
        return "cpu"
    }else if(cpu1==="Snake" && user==="Gun"){
        return "user"
    }else if(cpu1==="Gun" && user==="Water"){
        return "user"
    }else if(cpu1==="Gun" && user==="Snake"){
        return "cpu"
    }else if(cpu1==="Water" && user==="Gun"){
        return "cpu"
    }else if(cpu1==="Water" && user==="Snake"){
        return "user"
    }
}

const colorClass = (text) => {
    if (text === "Water") {
        return 'water';
    } else if (text === "Snake") {
        return 'snake';
    } else if (text === "Gun") {
        return 'gun';
    } else {
        return '';
    }
}

let result = match(cpu1, user);

document.write(`CPU: <span class="${colorClass(cpu1)}">${cpu1}</span> <br> User: <span class="${colorClass(user)}">${user}</span> <br> The winner is: ${result.toUpperCase()}`);