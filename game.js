let first = 0;
let ele=101;
function checker(arr) {

    if (arr[0][0] === arr[0][1] && arr[0][1] === arr[0][2] && arr[0][0] !== undefined) return true;
    if (arr[1][0] === arr[1][1] && arr[1][1] === arr[1][2] && arr[1][0] !== undefined) return true;
    if (arr[2][0] === arr[2][1] && arr[2][1] === arr[2][2] && arr[2][0] !== undefined) return true;
    if (arr[0][0] === arr[1][0] && arr[1][0] === arr[2][0] && arr[0][0] !== undefined) return true;
    if (arr[0][1] === arr[1][1] && arr[1][1] === arr[2][1] && arr[0][1] !== undefined) return true;
    if (arr[0][2] === arr[1][2] && arr[1][2] === arr[2][2] && arr[0][2] !== undefined) return true;
    if (arr[0][0] === arr[1][1] && arr[1][1] === arr[2][2] && arr[0][0] !== undefined) return true;
    if (arr[0][2] === arr[1][1] && arr[1][1] === arr[2][0] && arr[0][2] !== undefined) return true;
    
    return false;
}

let arr =[];
for(let i=0;i<3;i++){
    arr[i]=[];
    for(let j=0;j<3;j++){
        arr[i][j]=ele++;
    }
}
let box1 = document.getElementById("box1");
box1.addEventListener('click', function() {
    let ele = document.getElementById("box1");
    let img = document.createElement('img');
     if(first==0){
    img.setAttribute('src', './Tic-Tac-Toe-Updated/both__1_-removebg-preview.png');
    }else{
    img.setAttribute('src', './Tic-Tac-Toe-Updated/both__2_-removebg-preview.png');
    }
    img.style.width = '50%';
    img.style.height = '50%';
    img.style.objectFit = 'contain';
    
    // Center the image within the box
    img.style.position = 'absolute';
    img.style.top = '50%';
    img.style.left = '50%';
    img.style.transform = 'translate(-50%, -50%)';
    
    // Set box1 to relative positioning if not already set
    box1.style.position = 'relative';
    
    box1.appendChild(img);
    arr[0][0]=first;
    if(first==1)first=0;
    else first=1;
    if(checker(arr)){
        alert("winner")
        window.location.reload();
    }
}, { once: true });
let box2 = document.getElementById("box2");
box2.addEventListener('click',function(){
let ele = document.getElementById("box2");
let img = document.createElement('img');
     if(first==0){
    img.setAttribute('src', './Tic-Tac-Toe-Updated/both__1_-removebg-preview.png');
    }else{
    img.setAttribute('src', './Tic-Tac-Toe-Updated/both__2_-removebg-preview.png');
    }
    img.style.width = '50%';
    img.style.height = '50%';
    img.style.objectFit = 'contain';
    
    // Center the image within the box
    img.style.position = 'absolute';
    img.style.top = '50%';
    img.style.left = '50%';
    img.style.transform = 'translate(-50%, -50%)';
    
    // Set box1 to relative positioning if not already set
    box2.style.position = 'relative';
    
    box2.appendChild(img);
arr[0][1]=first;
if(first==1)first=0;
    else first=1;
    if(checker(arr)){
        alert("winner")
        window.location.reload();
    }
}, { once: true });
let box3 = document.getElementById("box3");
box3.addEventListener('click',function(){
let ele = document.getElementById("box3");
let img = document.createElement('img');
     if(first==0){
    img.setAttribute('src', './Tic-Tac-Toe-Updated/both__1_-removebg-preview.png');
    }else{
    img.setAttribute('src', './Tic-Tac-Toe-Updated/both__2_-removebg-preview.png');
    }
       img.style.width = '50%';
    img.style.height = '50%';
    img.style.objectFit = 'contain';
    
    // Center the image within the box
    img.style.position = 'absolute';
    img.style.top = '50%';
    img.style.left = '50%';
    img.style.transform = 'translate(-50%, -50%)';
    
    // Set box1 to relative positioning if not already set
    box3.style.position = 'relative';
    
    box3.appendChild(img);
arr[0][2]=first;
if(first==1)first=0;
    else first=1;
     if(checker(arr)){
        alert("winner")
        window.location.reload();
    }
}, { once: true });
let box4 = document.getElementById("box4");
box4.addEventListener('click',function(){
let ele = document.getElementById("box4");
let img = document.createElement('img');
     if(first==0){
    img.setAttribute('src', './Tic-Tac-Toe-Updated/both__1_-removebg-preview.png');
    }else{
    img.setAttribute('src', './Tic-Tac-Toe-Updated/both__2_-removebg-preview.png');
    }
       img.style.width = '50%';
    img.style.height = '50%';
    img.style.objectFit = 'contain';
    
    // Center the image within the box
    img.style.position = 'absolute';
    img.style.top = '50%';
    img.style.left = '50%';
    img.style.transform = 'translate(-50%, -50%)';
    
    // Set box1 to relative positioning if not already set
    box4.style.position = 'relative';
    
    box4.appendChild(img);
arr[1][0]=first;
if(first==1)first=0;
    else first=1;
     if(checker(arr)){
        alert("winner")
        window.location.reload();
    }
}, { once: true });
let box5 = document.getElementById("box5");
box5.addEventListener('click',function(){
let ele = document.getElementById("box5");
let img = document.createElement('img');
     if(first==0){
    img.setAttribute('src', './Tic-Tac-Toe-Updated/both__1_-removebg-preview.png');
    }else{
    img.setAttribute('src', './Tic-Tac-Toe-Updated/both__2_-removebg-preview.png');
    }
       img.style.width = '50%';
    img.style.height = '50%';
    img.style.objectFit = 'contain';
    
    // Center the image within the box
    img.style.position = 'absolute';
    img.style.top = '50%';
    img.style.left = '50%';
    img.style.transform = 'translate(-50%, -50%)';
    
    // Set box1 to relative positioning if not already set
    box5.style.position = 'relative';
    
    box5.appendChild(img);
arr[1][1]=first;
if(first==1)first=0;
    else first=1;
     if(checker(arr)){
        alert("winner")
        window.location.reload();
    }
}, { once: true });
let box6 = document.getElementById("box6");
box6.addEventListener('click',function(){
let ele = document.getElementById("box6");
let img = document.createElement('img');
     if(first==0){
    img.setAttribute('src', './Tic-Tac-Toe-Updated/both__1_-removebg-preview.png');
    }else{
    img.setAttribute('src', './Tic-Tac-Toe-Updated/both__2_-removebg-preview.png');
    }
       img.style.width = '50%';
    img.style.height = '50%';
    img.style.objectFit = 'contain';
    
    // Center the image within the box
    img.style.position = 'absolute';
    img.style.top = '50%';
    img.style.left = '50%';
    img.style.transform = 'translate(-50%, -50%)';
    
    // Set box1 to relative positioning if not already set
    box6.style.position = 'relative';
    
    box6.appendChild(img);
arr[1][2]=first;
if(first==1)first=0;
    else first=1;
     if(checker(arr)){
        alert("winner")
        window.location.reload();
    }

}, { once: true });
let box7 = document.getElementById("box7");
box7.addEventListener('click',function(){
let ele = document.getElementById("box7");
let img = document.createElement('img');
     if(first==0){
    img.setAttribute('src', './Tic-Tac-Toe-Updated/both__1_-removebg-preview.png');
    }else{
    img.setAttribute('src', './Tic-Tac-Toe-Updated/both__2_-removebg-preview.png');
    }
       img.style.width = '50%';
    img.style.height = '50%';
    img.style.objectFit = 'contain';
    
    // Center the image within the box
    img.style.position = 'absolute';
    img.style.top = '50%';
    img.style.left = '50%';
    img.style.transform = 'translate(-50%, -50%)';
    
    // Set box1 to relative positioning if not already set
    box7.style.position = 'relative';
    
    box7.appendChild(img);
arr[2][0]=first;
if(first==1)first=0;
    else first=1;
     if(checker(arr)){
        alert("winner")
        window.location.reload();
    }
}, { once: true });
let box8 = document.getElementById("box8");
box8.addEventListener('click',function(){
let ele = document.getElementById("box8");
let img = document.createElement('img');
     if(first==0){
    img.setAttribute('src', './Tic-Tac-Toe-Updated/both__1_-removebg-preview.png');
    }else{
    img.setAttribute('src', './Tic-Tac-Toe-Updated/both__2_-removebg-preview.png');
    }
       img.style.width = '50%';
    img.style.height = '50%';
    img.style.objectFit = 'contain';
    
    // Center the image within the box
    img.style.position = 'absolute';
    img.style.top = '50%';
    img.style.left = '50%';
    img.style.transform = 'translate(-50%, -50%)';
    
    // Set box1 to relative positioning if not already set
    box8.style.position = 'relative';
    
    box8.appendChild(img);
arr[2][1]=first;
if(first==1)first=0;
    else first=1;
     if(checker(arr)){
        alert("winner")
        window.location.reload();
    }
}, { once: true });
let box9 = document.getElementById("box9");
box9.addEventListener('click',function(){
let ele = document.getElementById("box9");
let img = document.createElement('img');
    if(first==0){
    img.setAttribute('src', './Tic-Tac-Toe-Updated/both__1_-removebg-preview.png');
    }else{
    img.setAttribute('src', './Tic-Tac-Toe-Updated/both__2_-removebg-preview.png');
    }
       img.style.width = '50%';
    img.style.height = '50%';
    img.style.objectFit = 'contain';
    
    // Center the image within the box
    img.style.position = 'absolute';
    img.style.top = '50%';
    img.style.left = '50%';
    img.style.transform = 'translate(-50%, -50%)';
    
    // Set box1 to relative positioning if not already set
    box9.style.position = 'relative';
    
    box9.appendChild(img);
arr[2][2]=first;
if(first==1)first=0;
    else first=1;
     if(checker(arr)){
        alert("winner")
        window.location.reload();
    }
}, { once: true });
let reset = document.getElementById("button");
reset.addEventListener("click",function(){
        window.location.reload();
});