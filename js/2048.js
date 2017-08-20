


var game2048 = function(container){
    this.container = container;
    this.lattices = new Array(16);
}
game2048.prototype = {
    init:  function(){
        for(var i=0,len=16;i<len;i++){
            var lattice = this.createLattice(0);
            lattice.setAttribute("index" , 0);
            this.container.appendChild(lattice);
            this.lattices[i] = lattice;
        }
        this.randomLattice();
        this.randomLattice();
    },
    createLattice: function(value){
        var lattice = document.createElement("div");
        this.setValue(lattice,value);
        return lattice;
    },
    setValue: function(lattice,value){
        lattice.setAttribute("value",value);
        lattice.className = "lattice lattice" + value;
        lattice.innerHTML = value>0 ? value : "";
    },
    randomLattice: function(){
        var RemainingLattices = new Array();
        for(var i=0,len=this.lattices.length;i<len;i++){
            if(this.lattices[i].getAttribute("value") == 0){
                RemainingLattices.push(this.lattices[i]);
            }
        }
        var selectLattices = RemainingLattices[Math.floor(Math.random()*RemainingLattices.length)];
        this.setValue(selectLattices,Math.random()>0.2?2:4);
    },
    move: function(keyNum){
        console.log("move");
        switch (keyNum) {
            case 38:    //上箭头
                for(var i=0;i<4;i++){
                    console.log("i="+i);
                    if(this.lattices[i].getAttribute("value") == 0){
                        if(this.lattices[i+4].getAttribute("value") == 0){
                            if(this.lattices[i+8].getAttribute("value") == 0){
                                this.setValue(this.lattices[i], this.lattices[i+12].getAttribute("value")) ;
                            }
                            else {
                                if(this.lattices[i+8].getAttribute("value") == this.lattices[i+12].getAttribute("value")){
                                    this.setValue(this.lattices[i], 2*this.lattices[i+8].getAttribute("value"));
                                    this.setValue(this.lattices[i], this.lattices[i+8].getAttribute("value"));
                                    this.setValue(this.lattices[i+4], this.lattices[i+12].getAttribute("value"));
                                }
                                this.setValue(this.lattices[i+8], 0);
                            }
                        }else {
                            if(this.lattices[i+4].getAttribute("value") == this.lattices[i+8].getAttribute("value")){
                                this.setValue(this.lattices[i],2*this.lattices[i+4].getAttribute("value"));
                                this.setValue(this.lattices[i+4],this.lattices[i+12].getAttribute("value"));
                                this.setValue(this.lattices[i+8], 0);
                            }else{
                                if(this.lattices[i+8].getAttribute("value") == 0){
                                    if(this.lattices[i+4].getAttribute("value") == this.lattices[i+12].getAttribute("value")){
                                        this.setValue(this.lattices[i],  2*this.lattices[i+4].getAttribute("value"));
                                        this.setValue(this.lattices[i+4], 0);
                                    }else{
                                        this.setValue(this.lattices[i], this.lattices[i+4].getAttribute("value"));
                                        this.setValue(this.lattices[i+4],this.lattices[i+12].getAttribute("value"));
                                    }
                                    this.setValue(this.lattices[i+8], 0);
                                }else{
                                    this.setValue(this.lattices[i],this.lattices[i+4].getAttribute("value"));
                                    if(this.lattices[i+8].getAttribute("value") == this.lattices[i+12].getAttribute("value")){
                                        this.setValue(this.lattices[i+4] , 2*this.lattices[i+12].getAttribute("value"));
                                        this.setValue(this.lattices[i+8], 0);
                                    }else {
                                        this.setValue(this.lattices[i+4],this.lattices[i+8].getAttribute("value"));
                                        this.setValue(this.lattices[i+8] , this.lattices[i+12].getAttribute("value"));
                                    }
                                }
                            }
                        }
                        this.setValue(this.lattices[i+12],0);
                    }else {

                        if(this.lattices[i+4].getAttribute("value") == 0){
                            if(this.lattices[i+8].getAttribute("value") == 0){
                                if(this.lattices[i].getAttribute("value") == this.lattices[i+12].getAttribute("value")){
                                    this.setValue(this.lattices[i],2*this.lattices[i].getAttribute("value"));
                                }else{
                                    this.setValue(this.lattices[i+4], this.lattices[i+12].getAttribute("value"));
                                }
                            }else {
                                if(this.lattices[i].getAttribute("value") == this.lattices[i+8].getAttribute("value")){
                                    this.setValue(this.lattices[i], 2*this.lattices[i].getAttribute("value"));
                                    this.setValue(this.lattices[i+4], this.lattices[i+12].getAttribute("value"));
                                }else {
                                    if(this.lattices[i+8].getAttribute("value") == this.lattices[i+12].getAttribute("value")){
                                        this.setValue(this.lattices[i+4], 2*this.lattices[i+8].getAttribute("value"));
                                        this.setValue(this.lattices[i+8], 0);
                                    }else {
                                        this.setValue(this.lattices[i+4], this.lattices[i+8].getAttribute("value"));
                                        this.setValue(this.lattices[i+8], this.lattices[i+12].getAttribute("value"));
                                    }
                                }
                            }
                            this.setValue(this.lattices[i+12], 0);
                        }else {
                            if(this.lattices[i].getAttribute("value") == this.lattices[i+4].getAttribute("value")){
                                this.setValue(this.lattices[i], 2*this.lattices[i].getAttribute("value"));
                                this.setValue(this.lattices[i+4], 0);
                                if(this.lattices[i+8].getAttribute("value") == this.lattices[i+12].getAttribute("value")){
                                    this.setValue(this.lattices[i+4] ,2*this.lattices[i+8].getAttribute("value"));
                                    this.setValue(this.lattices[i+8], 0);
                                }else {
                                    this.setValue(this.lattices[i+4], this.lattices[i+8].getAttribute("value"));
                                    this.setValue(this.lattices[i+8], this.lattices[i+12].getAttribute("value"));
                                }
                                this.setValue(this.lattices[i+8], 0);
                            }else {
                                if(this.lattices[i+8].getAttribute("value") == 0){
                                    if(this.lattices[i+4].getAttribute("value") == this.lattices[i+12].getAttribute("value")){
                                        this.setValue(this.lattices[i+4], 2*this.lattices[i+4].getAttribute("value"));
                                    }else {
                                        this.setValue(this.lattices[i+8], this.lattices[i+12].getAttribute("value"));
                                    }
                                    this.setValue(this.lattices[i+12], 0);
                                }else {
                                    if(this.lattices[i+4].getAttribute("value") == this.lattices[i+8].getAttribute("value")){
                                        this.setValue(this.lattices[i+4],2*this.lattices[i+4].getAttribute("value"));
                                        this.setValue(this.lattices[i+8], this.lattices[i+12].getAttribute("value"));
                                        this.setValue(this.lattices[i+12], 0);
                                    }else {
                                        if(this.lattices[i+8].getAttribute("value") == this.lattices[i+12].getAttribute("value")){
                                            this.setValue(this.lattices[i+8], 2*this.lattices[i+8].getAttribute("value"));
                                            this.setValue(this.lattices[i+12], 0);
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
                break;
            case 40:    //下箭头
                for(var i=12;i<15;i++){
                    if(this.lattices[i].getAttribute("value") == 0){
                        if(this.lattices[i-4].getAttribute("value") == 0){
                            if(this.lattices[i-8].getAttribute("value") == 0){
                                this.setValue(this.lattices[i], this.lattices[i-12].getAttribute("value"));
                            }
                            else {
                                if(this.lattices[i-8].getAttribute("value") == this.lattices[i-12].getAttribute("value")){
                                    this.setValue(this.lattices[i], 2*this.lattices[i-8].getAttribute("value"));
                                }else{
                                    this.setValue(this.lattices[i], this.lattices[i-8].getAttribute("value"));
                                    this.setValue(this.lattices[i-4], this.lattices[i-12].getAttribute("value"));
                                }
                                this.setValue(this.lattices[i-8], 0);
                            }
                        }else {
                            if(this.lattices[i-4].getAttribute("value") == this.lattices[i-8].getAttribute("value")){
                                this.setValue(this.lattices[i], 2*this.lattices[i-4].getAttribute("value"));
                                this.setValue(this.lattices[i-4], this.lattices[i-12].getAttribute("value"));
                                this.setValue(this.lattices[i-8], 0);
                            }else{
                                if(this.lattices[i-8].getAttribute("value") == 0){
                                    if(this.lattices[i-4].getAttribute("value") == this.lattices[i-12].getAttribute("value")){
                                        this.setValue(this.lattices[i], 2*this.lattices[i-4].getAttribute("value"));
                                        this.setValue(this.lattices[i-4], 0);
                                    }else{
                                        this.setValue(this.lattices[i], this.lattices[i-4].getAttribute("value"));
                                        this.setValue(this.lattices[i-4],this.lattices[i-12].getAttribute("value"));
                                    }
                                    this.setValue(this.lattices[i-8],0);
                                }else{
                                    this.setValue(this.lattices[i], this.lattices[i-4].getAttribute("value"));
                                    if(this.lattices[i-8].getAttribute("value") == this.lattices[i-12].getAttribute("value")){
                                        this.setValue(this.lattices[i-4], 2*this.lattices[i-12].getAttribute("value"));
                                        this.setValue(this.lattices[i-8], 0);
                                    }else {
                                        this.setValue(this.lattices[i-4], this.lattices[i-8].getAttribute("value"));
                                        this.setValue(this.lattices[i-8],this.lattices[i-12].getAttribute("value"));
                                    }
                                }
                            }
                        }
                        this.setValue(this.lattices[i-12], 0);
                    }else {
                        if(this.lattices[i-4].getAttribute("value") == 0){
                            if(this.lattices[i-8].getAttribute("value") == 0){
                                if(this.lattices[i].getAttribute("value") == this.lattices[i-12].getAttribute("value")){
                                    this.setValue(this.lattices[i], 2*this.lattices[i].getAttribute("value"));
                                }else{
                                    this.setValue(this.lattices[i-4], this.lattices[i-12].getAttribute("value"));
                                }
                            }else {
                                if(this.lattices[i].getAttribute("value") == this.lattices[i-8].getAttribute("value")){
                                    this.setValue(this.lattices[i], 2*this.lattices[i].getAttribute("value"));
                                    this.setValue(this.lattices[i-4],this.lattices[i-12].getAttribute("value"));
                                }else {
                                    if(this.lattices[i-8].getAttribute("value") == this.lattices[i-12].getAttribute("value")){
                                        this.setValue(this.lattices[i-4], 2*this.lattices[i-8].getAttribute("value"));
                                        this.setValue(this.lattices[i-8],0);
                                    }else {
                                        this.setValue(this.lattices[i-4], this.lattices[i-8].getAttribute("value"));
                                        this.setValue(this.lattices[i-8], this.lattices[i-12].getAttribute("value"));
                                    }
                                }
                            }
                            this.setValue(this.lattices[i-12], 0);
                        }else {
                            if(this.lattices[i].getAttribute("value") == this.lattices[i-4].getAttribute("value")){
                                this.setValue(this.lattices[i],2*this.lattices[i].getAttribute("value"));
                                this.setValue(this.lattices[i-4], 0);
                                if(this.lattices[i-8].getAttribute("value") == this.lattices[i-12].getAttribute("value")){
                                    this.setValue(this.lattices[i-4], 2*this.lattices[i-8].getAttribute("value"));
                                    this.setValue(this.lattices[i-8], 0);
                                }else {
                                    this.setValue(this.lattices[i-4], this.lattices[i-8].getAttribute("value"));
                                    this.setValue(this.lattices[i-8], this.lattices[i-12].getAttribute("value"));
                                }
                                this.setValue(this.lattices[i-12], 0);
                            }else {
                                if(this.lattices[i-8].getAttribute("value") == 0){
                                    if(this.lattices[i-4].getAttribute("value") == this.lattices[i-12].getAttribute("value")){
                                        this.setValue(this.lattices[i-4], 2*this.lattices[i-4].getAttribute("value"));
                                    }else {
                                        this.setValue(this.lattices[i-8], this.lattices[i-12].getAttribute("value"));
                                    }
                                    this.setValue(this.lattices[i-12], 0);
                                }else {
                                    if(this.lattices[i-4].getAttribute("value") == this.lattices[i-8].getAttribute("value")){
                                        this.setValue(this.lattices[i-4], 2*this.lattices[i-4].getAttribute("value"));
                                        this.setValue(this.lattices[i-8], this.lattices[i-12].getAttribute("value"));
                                        this.setValue(this.lattices[i-12], 0);
                                    }else {
                                        if(this.lattices[i-8].getAttribute("value") == this.lattices[i-12].getAttribute("value")){
                                            this.setValue(this.lattices[i-8], 2*this.lattices[i-8].getAttribute("value"));
                                            this.setValue(this.lattices[i-12],  0);
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
                break;
            case 37:    //左箭头
                for(var i=0;i<12;i=i+4){
                    if(this.lattices[i].getAttribute("value") == 0){
                        if(this.lattices[i+1].getAttribute("value") == 0){
                            if(this.lattices[i+2].getAttribute("value") == 0){
                                this.setValue(this.lattices[i], this.lattices[i+3].getAttribute("value")) ;
                            }
                            else {
                                if(this.lattices[i+2].getAttribute("value") == this.lattices[i+3].getAttribute("value")){
                                    this.setValue(this.lattices[i], 2*this.lattices[i+2].getAttribute("value"));
                                }else{
                                    this.setValue(this.lattices[i], this.lattices[i+2].getAttribute("value"));
                                    this.setValue(this.lattices[i+1], this.lattices[i+3].getAttribute("value"));
                                }
                                this.setValue(this.lattices[i+2], 0);
                            }
                        }else {
                            if(this.lattices[i+1].getAttribute("value") == this.lattices[i+2].getAttribute("value")){
                                this.setValue(this.lattices[i],2*this.lattices[i+1].getAttribute("value"));
                                this.setValue(this.lattices[i+1],this.lattices[i+3].getAttribute("value"));
                                this.setValue(this.lattices[i+2], 0);
                            }else{
                                if(this.lattices[i+2].getAttribute("value") == 0){
                                    if(this.lattices[i+1].getAttribute("value") == this.lattices[i+3].getAttribute("value")){
                                        this.setValue(this.lattices[i],  2*this.lattices[i+1].getAttribute("value"));
                                        this.setValue(this.lattices[i+1], 0);
                                    }else{
                                        this.setValue(this.lattices[i], this.lattices[i+1].getAttribute("value"));
                                        this.setValue(this.lattices[i+1],this.lattices[i+3].getAttribute("value"));
                                    }
                                    this.setValue(this.lattices[i+2], 0);
                                }else{
                                    this.setValue(this.lattices[i],this.lattices[i+4].getAttribute("value"));
                                    if(this.lattices[i+2].getAttribute("value") == this.lattices[i+3].getAttribute("value")){
                                        this.setValue(this.lattices[i+1] , 2*this.lattices[i+3].getAttribute("value"));
                                        this.setValue(this.lattices[i+2], 0);
                                    }else {
                                        this.setValue(this.lattices[i+1],this.lattices[i+2].getAttribute("value"));
                                        this.setValue(this.lattices[i+2] , this.lattices[i+3].getAttribute("value"));
                                    }
                                }
                            }
                        }
                        this.setValue(this.lattices[i+3],0);
                    }else {
                        if(this.lattices[i+1].getAttribute("value") == 0){
                            if(this.lattices[i+2].getAttribute("value") == 0){
                                if(this.lattices[i].getAttribute("value") == this.lattices[i+3].getAttribute("value")){
                                    this.setValue(this.lattices[i],2*this.lattices[i].getAttribute("value"));
                                }else{
                                    this.setValue(this.lattices[i+1], this.lattices[i+3].getAttribute("value"));
                                }
                            }else {
                                if(this.lattices[i].getAttribute("value") == this.lattices[i+2].getAttribute("value")){
                                    this.setValue(this.lattices[i], 2*this.lattices[i].getAttribute("value"));
                                    this.setValue(this.lattices[i+1], this.lattices[i+3].getAttribute("value"));
                                }else {
                                    if(this.lattices[i+2].getAttribute("value") == this.lattices[i+3].getAttribute("value")){
                                        this.setValue(this.lattices[i+1], 2*this.lattices[i+2].getAttribute("value"));
                                        this.setValue(this.lattices[i+2], 0);
                                    }else {
                                        this.setValue(this.lattices[i+1], this.lattices[i+2].getAttribute("value"));
                                        this.setValue(this.lattices[i+2], this.lattices[i+3].getAttribute("value"));
                                    }
                                }
                            }
                            this.setValue(this.lattices[i+3], 0);
                        }else {
                                if(this.lattices[i].getAttribute("value") == this.lattices[i+1].getAttribute("value")){
                                    this.setValue(this.lattices[i], 2*this.lattices[i].getAttribute("value"));
                                    this.setValue(this.lattices[i+1], 0);
                                    if(this.lattices[i+2].getAttribute("value") == this.lattices[i+3].getAttribute("value")){
                                        this.setValue(this.lattices[i+1] ,2*this.lattices[i+2].getAttribute("value"));
                                        this.setValue(this.lattices[i+2], 0);
                                    }else {
                                        this.setValue(this.lattices[i+1], this.lattices[i+2].getAttribute("value"));
                                        this.setValue(this.lattices[i+2], this.lattices[i+3].getAttribute("value"));
                                    }
                                    this.setValue(this.lattices[i+2], 0);
                                }else {
                                    if(this.lattices[i+2].getAttribute("value") == 0){
                                        if(this.lattices[i+1].getAttribute("value") == this.lattices[i+3].getAttribute("value")){
                                            this.setValue(this.lattices[i+1], 2*this.lattices[i+1].getAttribute("value"));
                                        }else {
                                            this.setValue(this.lattices[i+2], this.lattices[i+3].getAttribute("value"));
                                        }
                                        this.setValue(this.lattices[i+3], 0);
                                    }else {
                                        if(this.lattices[i+1].getAttribute("value") == this.lattices[i+2].getAttribute("value")){
                                            this.setValue(this.lattices[i+1],2*this.lattices[i+1].getAttribute("value"));
                                            this.setValue(this.lattices[i+2], this.lattices[i+3].getAttribute("value"));
                                            this.setValue(this.lattices[i+3], 0);
                                        }else {
                                            if(this.lattices[i+2].getAttribute("value") == this.lattices[i+3].getAttribute("value")){
                                                this.setValue(this.lattices[i+2], 2*this.lattices[i+2].getAttribute("value"));
                                                this.lsetValue(this.lattices[i+3], 0);
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                break;
            case 39:    //右箭头
                for(var i=3;i<15;i=i+4){
                    if(this.lattices[i].getAttribute("value") == 0){
                        if(this.lattices[i-1].getAttribute("value") == 0){
                        if(this.lattices[i-2].getAttribute("value") == 0){
                            this.setValue(this.lattices[i], this.lattices[i-3].getAttribute("value")) ;
                        }
                        else {
                            if(this.lattices[i-2].getAttribute("value") == this.lattices[i-3].getAttribute("value")){
                                this.setValue(this.lattices[i], 2*this.lattices[i-2].getAttribute("value"));
                            }else{
                                this.setValue(this.lattices[i], this.lattices[i-2].getAttribute("value"));
                                this.setValue(this.lattices[i-1], this.lattices[i-3].getAttribute("value"));
                            }
                            this.setValue(this.lattices[i-2], 0);
                        }
                    }else {
                        if(this.lattices[i-1].getAttribute("value") == this.lattices[i-2].getAttribute("value")){
                            this.setValue(this.lattices[i],2*this.lattices[i-1].getAttribute("value"));
                            this.setValue(this.lattices[i-1],this.lattices[i-3].getAttribute("value"));
                            this.setValue(this.lattices[i-2], 0);
                        }else{
                            if(this.lattices[i-2].getAttribute("value") == 0){
                                if(this.lattices[i-1].getAttribute("value") == this.lattices[i-3].getAttribute("value")){
                                    this.setValue(this.lattices[i],  2*this.lattices[i-1].getAttribute("value"));
                                    this.setValue(this.lattices[i-1], 0);
                                }else{
                                    this.setValue(this.lattices[i], this.lattices[i-1].getAttribute("value"));
                                    this.setValue(this.lattices[i-1],this.lattices[i-3].getAttribute("value"));
                                }
                                this.setValue(this.lattices[i-2], 0);
                            }else{
                                this.setValue(this.lattices[i],this.lattices[i-4].getAttribute("value"));
                                if(this.lattices[i-2].getAttribute("value") == this.lattices[i-3].getAttribute("value")){
                                    this.setValue(this.lattices[i-1] , 2*this.lattices[i-3].getAttribute("value"));
                                    this.setValue(this.lattices[i-2], 0);
                                }else {
                                    this.setValue(this.lattices[i-1],this.lattices[i-2].getAttribute("value"));
                                    this.setValue(this.lattices[i-2] , this.lattices[i-3].getAttribute("value"));
                                }
                            }
                        }
                    }
                    this.setValue(this.lattices[i-3],0);
                    }else {
                        if(this.lattices[i-1].getAttribute("value") == 0){
                            if(this.lattices[i-2].getAttribute("value") == 0){
                        if(this.lattices[i].getAttribute("value") == this.lattices[i-3].getAttribute("value")){
                            this.setValue(this.lattices[i],2*this.lattices[i].getAttribute("value"));
                        }else{
                            this.setValue(this.lattices[i-1], this.lattices[i-3].getAttribute("value"));
                        }
                    }else {
                                if(this.lattices[i].getAttribute("value") == this.lattices[i-2].getAttribute("value")){
                            this.setValue(this.lattices[i], 2*this.lattices[i].getAttribute("value"));
                            this.setValue(this.lattices[i+1], this.lattices[i+3].getAttribute("value"));
                        }else {
                                    if(this.lattices[i-2].getAttribute("value") == this.lattices[i-3].getAttribute("value")){
                                this.setValue(this.lattices[i-1], 2*this.lattices[i-2].getAttribute("value"));
                                this.setValue(this.lattices[i-2], 0);
                            }else {
                                        this.setValue(this.lattices[i-1], this.lattices[i-2].getAttribute("value"));
                                        this.setValue(this.lattices[i-2], this.lattices[i-3].getAttribute("value"));
                                    }
                                }
                            }
                            this.setValue(this.lattices[i-3], 0);
                        }else {
                            if(this.lattices[i].getAttribute("value") == this.lattices[i-1].getAttribute("value")){
                                this.setValue(this.lattices[i], 2*this.lattices[i].getAttribute("value"));
                                this.setValue(this.lattices[i-1], 0);
                                if(this.lattices[i-2].getAttribute("value") == this.lattices[i-3].getAttribute("value")){
                                    this.setValue(this.lattices[i-1] ,2*this.lattices[i-2].getAttribute("value"));
                                    this.setValue(this.lattices[i-2], 0);
                                }else {
                                    this.setValue(this.lattices[i-1], this.lattices[i-2].getAttribute("value"));
                                    this.setValue(this.lattices[i-2], this.lattices[i-3].getAttribute("value"));
                                }
                                this.setValue(this.lattices[i-2], 0);
                            }else {
                                if(this.lattices[i-2].getAttribute("value") == 0){
                                    if(this.lattices[i-1].getAttribute("value") == this.lattices[i-3].getAttribute("value")){
                                        this.setValue(this.lattices[i-1], 2*this.lattices[i-1].getAttribute("value"));
                                    }else {
                                        this.setValue(this.lattices[i-2], this.lattices[i-3].getAttribute("value"));
                                    }
                                    this.setValue(this.lattices[i-3], 0);
                                }else {
                                    if(this.lattices[i-1].getAttribute("value") == this.lattices[i-2].getAttribute("value")){
                                        this.setValue(this.lattices[i-1],2*this.lattices[i-1].getAttribute("value"));
                                        this.setValue(this.lattices[i-2], this.lattices[i-3].getAttribute("value"));
                                        this.setValue(this.lattices[i-3], 0);
                                    }else {
                                        if(this.lattices[i-2].getAttribute("value") == this.lattices[i-3].getAttribute("value")){
                                            this.setValue(this.lattices[i-2], 2*this.lattices[i-2].getAttribute("value"));
                                            this.setValue(this.lattices[i-3], 0);
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
                break;
            }
    this.randomLattice();
    }
};


var game,start;
window.onload = function(){
    var container = document.getElementById("container");
    start = document.getElementById("start");
    start.onclick = function(){
        this.style.display = "none";
        game = new game2048(container) || game;
        game.init();
    }
}
window.onkeydown = function(e){
    var keyNum;
    if(window.event){       // IE
        keyNum = e.keyCode;
    }
    else if(e.which){       // Netscape/Firefox/Opera
        keyNum = e.which;
    }
    game.move(keyNum);
}
