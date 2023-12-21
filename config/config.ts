import  config  from "npm:config";

export class MyConfig {
    private static _config: MyConfig;
    private _config: any;

    private constructor(){
        this._config = config;
        
    }

    static instance(): MyConfig{
        if (MyConfig._config == undefined) 
          MyConfig._config = new MyConfig();
    
        return MyConfig._config;
    }

    getLoggerHandler(){
        return this._config.get("logger.default.handler");
    }

    getLoggerLevel(){
        return this._config.get("logger.default.level");
    }

    
}