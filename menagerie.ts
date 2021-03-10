class menagerie{
    figures:        Array<figureine>;
    tallestFig:     number;         // index of the tallest figureine
    tallestHeight:  number;         // meter height of the tallest figureine
    figScaling:     Array<number>;  // an array of each figure's scaling needed
    canvasheightPX: number;         // the canvas height this thinks it is using for scaling, px
    canvasheightm:  number;         // height of the canvas in meters
    canvaspx2m:     number;         // how many canvas pixels correspond to a meter

    constructor(){
        this.figures = [];
        this.figScaling = [];
    }
    removebyname(target: string){
        let targetindex: number;
        for (let i = 0; i < this.figures.length; i++){
            if (this.figures[i].figname === target){
                targetindex = i;
                // finds a figurine with the specified name
            }
        }
        this.figures.splice(targetindex,1); // removes that figureine from the array
        this.figScaling.splice(targetindex,1); // also removes the scaling info
        if (targetindex==this.tallestFig){
            this.findTallest();
        }
    }
    removebyindex(target: number){
        // remove a figurine by index, if that was the tallest, update tallest. 
        this.figures.splice(target, 1);
        this.figScaling.splice(target, 1);
        if (target = this.tallestFig){
            this.findTallest();
        }
    }
    addFigurine(newFig: figureine){
        // adds a new figure to the end of the array, updates height
        this.figures.push(newFig);
        if (newFig.figheight>this.tallestHeight){
            let newFigIndex = this.figures.length-1;
            this.tallestFig = newFigIndex;
            this.tallestHeight = newFig.figheight;
            this.calcScaling();
        }
    }
    findTallest(){
        // updates tallestFig and TallestHeight
        this.tallestHeight = 0;         // reset top
        if (this.figures.length>0){     // make sure we can find things
            for (let i = 0; i < this.figures.length; i++){  // itterate
                if (this.figures[i].figheight>this.tallestHeight){  // update current top
                    this.tallestHeight = this.figures[i].figheight;
                    this.tallestFig = i;
                }
            }
            this.calcScaling();
        }
    }
    calcScaling(){
        // updates the figscaling array based on the tallest
        if (this.figures.length>=1){
            this.findTallest(); // this SHOULDNT be needed but i am prone to aggressive redundency 
            this.canvasheightm = this.tallestHeight; // this is not the Final Design, but i needed a baseline
            this.canvaspx2m = this.canvasheightPX/this.canvasheightm;
            for(let i = 0; i<this.figures.length; i++){
                this.figScaling[i] = (this.canvaspx2m/this.figures[i].pxtometers)
            }   // this tells us how to scale each figurine

        }
    }
}