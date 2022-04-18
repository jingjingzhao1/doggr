import {Layer} from "./layer";

export class route_patch{

    constructor(path)
    {
        this.stack = [];
        this.path  = path;
        this.methods = {};
    }

    patch(handler){
        const layer = new Layer("/update",handler);
        layer.methods = "patch";
        this.methods["patch"] = true;
        this.stack.push(layer);

        return this;
    }

    
    requestHandler(method){
       //update data to method 
    }




}