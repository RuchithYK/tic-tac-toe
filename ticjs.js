let boxes = document.querySelectorAll(".box");
let turn = true;
let btn = document.querySelector("#rst-btn")
let winPattern = [
                [0,1,2],
                [0,3,6],
                [0,4,8],
                [1,4,7],
                [2,5,8],
                [2,4,6],
                [3,4,5],
                [6,7,8]
];

btn.addEventListener("click",()=>{
    boxes.forEach(box =>{
        box.disabled=false;
        box.innerText=""
    });
})

boxes.forEach(box => {
    box.addEventListener("click",()=>{
        if(turn){
            box.innerText="O"
            turn=false;
        }
        else{
            box.innerText="X"
            turn=true;
        }
        box.disabled=true;
        checkWinner();
    });
});

const checkWinner = ()=>{
    for(let pattern of winPattern){
        let pos0=boxes[pattern[0]].innerText;
        let pos1=boxes[pattern[1]].innerText;
        let pos2=boxes[pattern[2]].innerText;
    
    if (pos0!=="" &&  pos1!=="" && pos2!=="") {
        if (pos0 === pos1 && pos1 == pos2) {
            Swal.fire(
                "Winner is "+pos0
            );
            disableAllBoxes();
        }
    }
    }
}

const disableAllBoxes = () => {
    boxes.forEach(box => box.disabled = true);
};