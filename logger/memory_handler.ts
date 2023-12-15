import { BaseHandler } from "https://deno.land/std@0.209.0/log/handlers.ts";


export class MemoryHandler extends BaseHandler {
    private logs: string[] = [];
  
    override log(msg: string) {
      this.logs.push(msg);
    }
  
    getLogs() {
      return this.logs;
    }
  }