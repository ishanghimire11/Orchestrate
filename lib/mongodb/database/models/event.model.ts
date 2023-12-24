import { Model, Schema, model, Document } from "mongoose";

export interface IEvent extends Document {
    _id: string;
    title: string;
    description?: string;
    location: string;
    createdAt: Date;
    eventImage: string;
    startDate: Date;
    endDate: Date;
    price?: string;
    isFree: boolean;
    url?: string;
    category: Schema.Types.ObjectId | string; 
    organizer: Schema.Types.ObjectId | string;
}

const EventSchema = new Schema<IEvent>({
    title: { type: String, required: true },
    description: { type: String },
    location: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
    eventImage: { type: String, required: true },
    startDate: { type: Date, default: Date.now, required: true },
    endDate: { type: Date, default: Date.now, required: true },
    price: { type: String },
    isFree: { type: Boolean, default: false },
    url: { type: String },
    category: { type: Schema.Types.ObjectId, ref: "Category" },
    organizer: { type: Schema.Types.ObjectId, ref: "User" }
});

const Event: Model<IEvent> = model<IEvent>('Event', EventSchema);

export default Event;
