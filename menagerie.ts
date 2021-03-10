class menagerie{
    figures: Array<figureine>;
    constructor(){
        this.figures = [];
    }
    removebyname(target: string){
        let targetindex: number;
        for (let i = 0; i < this.figures.length; i++){
            if (this.figures[i].figname === target){
                targetindex = i;
                // finds a figurine with the specified name
            }
        }
        this.figures.splice(targetindex,1);
        // removes that figureine from the array
    }
}