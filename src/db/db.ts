"use strict";

import * as mongoose from "mongoose";

module DB {
    export class Connect {
        //Global variables
        private uri: String;
        private options: Object;
        //
        //Init connection
        constructor() {
            this.config();
            this.connect()
                .then(
                (db) => {
                    console.log("db connection created!");
                },
                (error) => console.log(error)
                );

        }

        //Config connection
        private config() {
            this.uri = 'mongodb://localhost:27017/test';
            this.options = {
                useMongoClient: true
            };
        }

        /**
         * Moongose connection
         * @class Connect
         * @returns Promise<Object>
         */
        private connect(): Promise<Object> {
            let connection = mongoose.createConnection(this.uri, this.options);
            return connection;
        }
    }

}

export = DB;