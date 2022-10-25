
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
            return true
        }
        return false
    }
    availableSquares(){
        let A=Array(8).fill().map(()=>Array(8).fill('00'))
        
        // top-right movement
        let line;
        let column;
        line=this.pos.line
        column=this.pos.column
        for (let i=line;i>=0;i--){
            if (column<=7){
                if (this.checkAvailableSquare(i,column)){
                    A[i][column]="##"
                }
                column++;
            }
        }

        // top-left movement
        line=this.pos.line
        column=this.pos.column
        for (let i=line;i>=0;i--){
            if (column<=7){
                if(this.checkAvailableSquare(i,column)){
                    A[i][column]="##"
                }
                column--;
            }
        }

        // bottom-right movement
        line=this.pos.line
        column=this.pos.column
        for (let i=line;i<=7;i++){
            if (column<=7){
                if(this.checkAvailableSquare(i,column)){
                    A[i][column]="##"
                }
            }
            column++;
        }

        // bottom-left movement
        line=this.pos.line
        column=this.pos.column
        for (let i=line;i<=7;i++){
            if (column<=7){
                if(this.checkAvailableSquare(i,column)){
                    A[i][column]="##"
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
        this.b1=new Bishop('w',{line:4,column:4},this)
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