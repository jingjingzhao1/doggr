import {Layer} from "./layer";

export class route_post{

    constructor(path)
    {
        this.stack = [];
        this.path  = path;
        this.methods = {};
    }

    post(handler){
        const layer = new Layer("/signup",handler);
        layer.methods = "post";
        this.methods["post"] = true;
        this.stack.push(layer);

        return this;
    }

    
    requestHandler(method){
       //get data from user and save 
    }





}