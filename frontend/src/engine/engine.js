
class Bishop{
    constructor(color,pos,board){
        this.color = color
        this.pos = pos
        this.board = board
        if (color=='w'){this.id='wB'}
        if (color=='b'){this.id='bB'}
        this.board.m[pos.line][pos.column]=this.id
    }
    checkAvailableSquare(line,column){
        if (this.board.m[line][column]=="00"){
            return "##"
        } else {
            if (this.board.m[line][column][0]!=this.color){
                return "CC"
            }
        }
        return false
    }
    availableSquares(){
        let A=Array(8).fill().map(()=>Array(8).fill('00'))
        
        // top-right movement
        let line;
        let column;
        let sqr;
        let unblocked;

        line=this.pos.line
        column=this.pos.column
        unblocked=true

        A[line][column]='##'

        for (let i=line;i>=0;i--){
            if (column<=7){
                sqr = this.checkAvailableSquare(i,column)
                if (sqr && unblocked){
                    A[i][column]=sqr
                    if (sqr=="CC"){
                        unblocked=false
                    }
                }
                column++;
            }
        }

        // top-left movement
        line=this.pos.line
        column=this.pos.column
        unblocked=true
        for (let i=line;i>=0;i--){
            if (column<=7){
                sqr = this.checkAvailableSquare(i,column)
                if(sqr && unblocked){
                    A[i][column]=sqr
                    if (sqr=="CC"){
                        unblocked=false
                    }
                }
                column--;
            }
        }

        // bottom-right movement
        line=this.pos.line
        column=this.pos.column
        unblocked=true
        for (let i=line;i<=7;i++){
            if (column<=7){
                sqr = this.checkAvailableSquare(i,column)
                if(sqr && unblocked){
                    A[i][column]=sqr
                    if (sqr=="CC"){
                        unblocked=false
                    }
                }
            }
            column++;
        }

        // bottom-left movement
        line=this.pos.line
        column=this.pos.column
        unblocked=true
        for (let i=line;i<=7;i++){
            if (column<=7){
                sqr = this.checkAvailableSquare(i,column)
                if(sqr && unblocked){
                    A[i][column]=sqr
                    if (sqr=="CC"){
                        unblocked=false
                    }
                }
            }
            column--;
        }
        return(A)
    }
}

class Board{
    constructor(){
        this.m = Array(8).fill().map(()=>Array(8).fill('00'))
        this.b1=new Bishop('w',{line:4,column:5},this)
        this.m[0]=['bR','bN','bB','bK','bQ','bB','bN','bR']
        this.m[1]=['bP','bP','bP','bP','bP','bP','bP','bP']
        this.m[6]=['wp','wp','wp','wp','wp','wp','wp','wp']
        this.m[7]=['wr','wn','wb','wk','wq','wb','wn','wr']
    }
    log(){
        console.log("----------------")
        this.m.map(line=>{console.log(line.join())})
    }
    checkB(){
        let A = this.b1.availableSquares()
        console.log("----------------")
        A.map(line=>{console.log(line.join())})
    }
}
const b = new Board()
b.log()
b.checkB()