import * as log from "https://deno.land/std@0.209.0/log/mod.ts";
import { MemoryHandler } from "./memory_handler.ts";
import  config  from "npm:config";


export class Logger {
    private static _logger: Logger;

    private constructor() { 
      log.setup({
        handlers: {
          memory: new MemoryHandler(config.get("logger.level")),
        },
        loggers: {
          default: {
            level: config.get("logger.level"),
            handlers: [config.get("logger.handler")],
          },
        },
      });
    }

    static instance(): Logger{
        if (Logger._logger == undefined) 
          Logger._logger = new Logger();
    
        return Logger._logger;
    }

    get logger(){
      return log.getLogger();
    }

    get logs(){
      if (log.getLogger().handlers[0] instanceof MemoryHandler) {
        return (log.getLogger().handlers[0] as MemoryHandler).getLogs();
      }
      return [];
    }
}