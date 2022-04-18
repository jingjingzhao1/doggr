import {Layer} from "./layer";

export class route_put{

    constructor(path)
    {
        this.stack = [];
        this.path  = path;
        this.methods = {};
    }

    put(handler){
        const layer = new Layer("/about",handler);
        layer.methods = "put";
        this.methods["put"] = true;
        this.stack.push(layer);

        return this;
    }

    //add name
    requestHandler(method){
        const name = method.toUpperCase();
        return Boolean(this.methods[name]);
    }

    dispath(req,res){
        const method = req.method.toUpperCase();

        this.stack.forEach((item)=>{
            if(method === item.method){
                item.requestHandler(req,res);
            }
        });
    }




}