const logBoard = (board) =>{
    console.log("----------------")
    var L = Array(8).fill().map(()=>Array(8).fill(".."))
    for (let line=0;line<=7;line++){
        for (let column=0;column<=7;column++){
            if (board.m[line][column]){
                L[line][column]=board.m[line][column].id
            }
        }
    }
    console.log('#',[0,1,2,3,4,5,6,7].join('  ')," #")
    for (let line=0;line<=7;line++){
        console.log(line,L[line].join(' '),line)
    }
    console.log('#',[0,1,2,3,4,5,6,7].join('  ')," #")
}

export default logBoard