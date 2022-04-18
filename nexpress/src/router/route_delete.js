import {Layer} from "./layer";

export class delete_put{

    constructor(path)
    {
        this.stack = [];
        this.path  = path;
        this.methods = {};
    }

    delete(handler){
        const layer = new Layer("/delete",handler);
        layer.methods = "delete";
        this.methods["delete"] = true;
        this.stack.push(layer);

        return this;
    }

    
    requestHandler(method){
        //If exist name = method 
        //delete name
        //otherwise return err
        
    }

    




}