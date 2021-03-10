class figureine {
    imgsrc:     string;     // hopefully, this points in the right direction for the picture
    imgfloor:   number;     // how many px above bottom of an image a figureine's feet are. 
    imgceiling: number;     // Similarly, how many PX from the bottom of the image the measured point is, often top of head
    figheight:  number;     // the real-world, meters measure from figureine's floor to ceiling
    figname:    string;     // the figureine's name. handy!

    constructor(src: string){
        this.imgsrc = src;
        this.imgfloor=0;
        //this.imgceiling=height of the png by default
        this.figheight = 1.8; //Defaulty!
        this.figname = "Default Joe";
    }
    
}