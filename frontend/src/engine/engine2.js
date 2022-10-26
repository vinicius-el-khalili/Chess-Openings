// --------------------------------------------------------------- visualization

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

const logAvailableSquares = (A)=>{
    let a=Array(8).fill().map(()=>Array(8).fill(".."))
    for (let i=0;i<=7;i++){
        for (let j=0;j<=7;j++){
            if (A[i][j]){
                a[i][j]="##"
            }
        }
    }
    console.log('#',[0,1,2,3,4,5,6,7].join('  ')," #")
    for (let line=0;line<=7;line++){
        console.log(line,a[line].join(' '),line)
    }
    console.log('#',[0,1,2,3,4,5,6,7].join('  ')," #")
}
// --------------------------------------------------------------- useful functions

const between = (x, min, max) => {
    return x >= min && x <= max;
}

// --------------------------------------------------------------- pieces

class Piece{
    constructor(color,type,pos,board){
        this.color=color    // 'w'||'b'
        this.type=type      // prnbqk
        this.pos=pos        //{line:y,column:x}
        this.id=color+type
        this.board=board
        this.board.m[this.pos.line][this.pos.column]=this
    }
}

// --------------------------------------------------------------- PAWN

class Pawn extends Piece{
    constructor(color,type,pos,board){
        super(color,type,pos,board)
        this.enPassant = false
        if (this.color=='w'){this.direction = -1}
        if (this.color=='b'){this.direction = +1}
    }
    availableSquares(){

        let A = Array(8).fill().map(()=>Array(8).fill(false))
        let line=this.pos.line
        let column=this.pos.column
        let direction=this.direction

        // -- check front square -- //
        
        // board limits
        if (between(line+direction,0,7)){
            // check if front square is empty
            if (!this.board.m[line+direction][column]){
                A[line+direction][column]=true
            }
        }
        
        // -- check diagonal squares -- //
        [-1,1].map(dx=>{

            // board limits
            if(!between(column+dx,0,7)){
                return null
            }

            const diagonal = this.board.m[line+direction][column+dx]
            
            // check if diagonal is empty
            if (!diagonal){
                return null
            }

            // check if diagonal is occupied by an enemy
            if (diagonal.color!=this.color){
                A[line+direction][column+dx]=true
            }

        })
        return A
    }
}


// --------------------------------------------------------------- board

class Board{
    constructor(){

        this.m = Array(8).fill().map(()=>Array(8).fill(false))
        const bp0 = new Pawn('b','p',{line:1,column:0},this)
        const bp1 = new Pawn('b','p',{line:1,column:1},this)
        const bp2 = new Pawn('b','p',{line:1,column:2},this)
        const bp3 = new Pawn('b','p',{line:1,column:3},this)

        const wp1 = new Pawn('w','p',{line:2,column:4},this)
        const wp2 = new Pawn('w','p',{line:2,column:3},this)



        logAvailableSquares(bp3.availableSquares())
    }
}


// --------------------------------------------------------------- //

const board = new Board()
logBoard(board)