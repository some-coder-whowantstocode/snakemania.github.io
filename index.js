let position= {x:0,y:0}
const gamebox = document.querySelector(".gamebox");
const start = document.querySelector("#start");
let score = document.querySelector("#score")
let high = document.querySelector("#highest");

let speed = 4;

let lasttime=0;
let ans=0;
let snakeArr = [
    {x:0,y:0}
]
let highest = 0;

let food = {x:0,y:-1}



start.addEventListener("click",
function(){
    snakeArr = [
        {x:1,y:1}
    ]

    position= {x:1,y:0}
    let a=2;
    let b=16;
    food = {x:Math.round(a +(b-a)*Math.random()),y:Math.round(a +(b-a)*Math.random())};
}
)

function main(ctime){
    window.requestAnimationFrame(main);
    if((ctime-lasttime)/1000 < 1/speed){
        return ;
    }
    lasttime = ctime;
    
  
    // console.log(ctime)
    gameEngine();
}

function gameEngine(){
    
    let ab= localStorage.getItem("highest");

    gamebox.innerHTML = '';
//display the snake

function iscolide(snakeArr){
    for(let i=1;i<snakeArr.length;i++){
        if(snakeArr[i].x==snakeArr[0].x && snakeArr[i].y==snakeArr[0].y){
            console.log("body")
            return true;
        }
    }
    if(snakeArr[0].x>18 || snakeArr[0].x<0 || snakeArr[0].y<0 || snakeArr[0].y>18){
        return true;
    }
}

if(iscolide(snakeArr)){
    ans=0;
    score.innerHTML=0;
    position= {x:0,y:0};
    food = {x:0,y:-1};
    snakeArr=[
        {x:0,y:0}
    ];
    alert("gameover")

}
   
    snakeArr.forEach((e,index)=>{
        
        snakeElement = document.createElement('div');
        snakeElement.style.gridRowStart =e.y;
        snakeElement.style.gridColumnStart =e.x;
       
        if(index===0){
            snakeElement.classList.add("head")
        }
        else{
            snakeElement.classList.add("snake");
        }
       

        gamebox.appendChild(snakeElement)
       
    })

//snake movement logic
for(let i=snakeArr.length -2;i>=0;i--) {
    
    snakeArr[i+1]={...snakeArr[i]};
    
}
snakeArr[0].x +=position.x;
snakeArr[0].y +=position.y;

//controlling speed of the snake


//snake eats food

if(snakeArr[0].x === food.x && snakeArr[0].y === food.y){
    snakeArr.unshift({x:snakeArr[0].x + position.x ,y:snakeArr[0].y + position.y})
    let a=2;
    let b=16;
    food = {x:Math.round(a +(b-a)*Math.random()),y:Math.round(a +(b-a)*Math.random())};
    ans +=10;
    score.innerHTML =ans;
   
        
       
        if(ans>ab){
            highest=ans;
            localStorage.clear();
            localStorage.setItem("highest",highest);
        }
    
  
  
}
//display highest score

high.innerHTML=ab;

//display the food

   
            
foodElement = document.createElement('div');
foodElement.style.gridRowStart =food.y;
foodElement.style.gridColumnStart =food.x;
foodElement.classList.add("food");

gamebox.appendChild(foodElement)
}

window.requestAnimationFrame(main);
window.addEventListener("keydown",e=>{
    

    switch(e.key){
       
        case "ArrowUp":
            if(position.y!=1 || snakeArr.length==1){
                position.x = 0;
                position.y = -1;
            }
          
           
            break;
        case "ArrowDown":
            if(position.y!=-1 || snakeArr.length==1){
                position.x = 0;
                position.y = 1;
            }
           
           
            break;
        case "ArrowLeft":
            if(position.x !=1 || snakeArr.length==1){
                position.x = -1;
                position.y = 0;
            }
           
           
            break;
        case "ArrowRight":
            if(position.x != -1 || snakeArr.length==1){
                position.x = 1;
                position.y = 0;
            }
          
           
            break;
    }
})



