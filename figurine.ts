class figureine {
    imgsrc:     string;     // hopefully, this points in the right direction for the picture
    imgfloor:   number;     // how many px above bottom of an image a figureine's feet are. 
    imgceiling: number;     // Similarly, how many PX from the bottom of the image the measured point is, often top of head
    figheight:  number;     // the real-world, meters measure from figureine's floor to ceiling
    figname:    string;     // the figureine's name. handy!
    pxtometers: number;     // the number of pixels that correspond to a meter for an image. 

    constructor(src: string, floor: number, ceiling: number, height: number, name: string){
        this.imgsrc = src;
        this.imgfloor = floor;
        this.imgceiling = ceiling;
        this.figheight = height;
        this.figname = name;
        this.pxtometers = (this.imgceiling-this.imgfloor)/(this.figheight);
            // use the number of pix between floor and ceiling to figure PX per meter
    }
    
}