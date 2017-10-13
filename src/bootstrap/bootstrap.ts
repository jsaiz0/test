"use strict";

import * as bodyParser from "body-parser";
import * as express from "express";
import * as path from "path";
import * as indexRoute from "../routes/index";
import * as db from '../db/db';

module Bootstrap {


    /**
     * Server class
     */
    export class Server {

        public app = express.Application;

        /**
         * Bootstrap the application.
         *
         * @class Server
         * @method bootstrap
         * @static
         * @return {ng.auto.IInjectorService} Returns the newly created injector for this app.
         */
        public static bootstrap(): Server {
            return new Server();
        }

        /**
         * Constructor
         * @class Server
         * @constructor
         */
        constructor() {
            //create expressjs application
            this.app = express();

            //database connection
            this.dbConnect();

            //configure application
            this.config();

            //configure routes
            this.routes();
        }

        /**
         * Config
         * @class Server
         * @return void
         */
        private config() {
            //mount json form parser
            this.app.use(bodyParser.json());

            //mount query string parser
            this.app.use(bodyParser.urlencoded({ extended: true }));

            //add static paths
            this.app.use(express.static(path.join(__dirname, "public")));

            // catch 404 and forward to error handler
            this.app.use(function (err: any, req: express.Request, res: express.Response, next: express.NextFunction) {
                var error = new Error("Not Found");
                err.status = 404;
                next(err);
            });
        }

        /**
         * Routes
         * @class Server
         * @return void
         */
        private routes() {

            //get router
            let api: express.Router = express.Router();

            //create routes
            let route: indexRoute.Routes = new indexRoute.Routes();

            /**
             * @method GET
             */
            api.get("/", route.index);
            //api.get('/photo/:id?', route.getPhoto);
            //api.get('/gallery/:id?', route.getGallery);

            /**
             * @method POST
             */
            //api.post('/gallery', route.saveGallery);
            //api.post('/photo', route.savePhoto);

            /**
             * @method DELETE
             */
            //api.delete('/photo/:id?', route.deletePhoto);
            //api.delete('/gallery/:id?', route.deleteGallery);

            /**
             * @method PUT
             */
            //api.put('/photo/:id?', route.updatePhoto);
            //api.put('/gallery/:id?', route.updateGallery);

            //use router middeware
            this.app.use(api);

        }

        /**
         * DB connect
         * @class Server
         * @return void
         */
        private dbConnect() {
            let connection = new db.Connect();
        }
    }
}

export = Bootstrap;