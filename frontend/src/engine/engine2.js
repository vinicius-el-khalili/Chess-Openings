// --------------------------------------------------------------- test

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
    L.map(line=>{
        console.log(line.join(' '))
    })
}

// --------------------------------------------------------------- pieces

class Piece{
    constructor(color,type,pos,board){
        this.color=color    // 'w'||'b'
        this.type=type      // prnbqk
        this.pos=pos        //{line:y,column:x}
        this.id=color+type
        this.board=board
    }
}

class Pawn extends Piece{
    constructor(...args){
        super(...args)
        this.enPassant = false
    }

}

// --------------------------------------------------------------- board

class Board{
    constructor(){
        this.m = Array(8).fill().map(()=>Array(8).fill(false))
        this.m[6][0] = new Pawn('w','p',{line:6,column:0},this)
        this.m[6][1] = new Piece('w','p',{line:6,column:1},this)
        this.m[0][0] = new Piece('b','r',{line:0,column:0},this)
    }
}


// --------------------------------------------------------------- //

const board = new Board()
logBoard(board)