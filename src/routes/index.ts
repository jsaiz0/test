"use strict";

import * as express from "express";

module Route {
    export class Routes {
        public index(req: express.Request, res: express.Response, next: express.NextFunction) {
            //render the page
            res.send("hola que tal");
        }
    }
}

export = Route;