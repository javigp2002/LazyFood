import * as log from "https://deno.land/std@0.209.0/log/mod.ts";
import { MemoryHandler } from "./memory_handler.ts";
import { MyConfig } from "../config/config.ts";

export class Logger {
    private static _logger: Logger;

    private constructor() { 
      log.setup({
        handlers: {
          console: new log.handlers.ConsoleHandler("DEBUG"),
          memory: new MemoryHandler("DEBUG"),
        },
        loggers: {
          default: {
            level: MyConfig.instance().get("logger.default.level"),
            handlers: [MyConfig.instance().get("logger.default.handler")],
          },
        },
      });
    }

    static instance(): Logger{
        if (Logger._logger == undefined) 
          Logger._logger = new Logger();
    
        return Logger._logger;
    }

    getLogger(){
      return log.getLogger();
    }

    getLogs(){
      if (log.getLogger().handlers[0] instanceof MemoryHandler) {
        return (log.getLogger().handlers[0] as MemoryHandler).getLogs();
      }
    }
}