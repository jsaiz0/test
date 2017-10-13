import * as mongoose from "mongoose";
import { Document, Model } from "mongoose";
import { Entity as EntityInterface } from "../interfaces/entity";
import { entitySchema } from "../schemas/entity_schema";

export interface EntityModel extends EntityInterface, Document {}
export interface EntityModelStatic extends Model<EntityModel> {}

export const ENTITY = mongoose.model<EntityModel, EntityModelStatic>("Prueba", entitySchema);