import { Document, Schema, model, models } from "mongoose";

export interface IOrder extends Document {
    _id: string,
}

const OrderSchema = new Schema({
    
});

const Order = models.Order || model("Order", OrderSchema);

export default Order;