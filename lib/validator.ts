import * as z from "zod";

const EventformSchema = z.object({
    title: z.string().min(3, "Title must be atleast 3 characters"),
    description: z.string().min(3, "Description must be at least 3 characters").max(400, "description must be less than 400 characters"),
    location: z.string().min(2, "Location must be at least 3 characters").max(100, "Location must be less than 100 characters"),
    imageUrl: z.string(),
    startDateTime: z.date(),
    endDateTime: z.date(),
    categoryId: z.string(),
    price: z.string(),
    isFree: z.boolean(),
    eventUrl: z.string().url(),
})

export default EventformSchema;

