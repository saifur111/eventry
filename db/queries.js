import { eventModel } from "@/models/event-models";
import { userModel } from "@/models/user-model";

import { replaceMongoIdInArray, replaceMongoIdInObject } from "@/utils/data-util";

// get all events from mongodb database
async function getAllEvents() {
    const allEvents = await eventModel.find().lean();
    console.log(allEvents)
    return replaceMongoIdInArray(allEvents);
}

// get single event from mongodb database
async function getEventById(eventId) {
    const event = await eventModel.findById(eventId).lean();
    return replaceMongoIdInObject(event);
}
// create user by mongoose userModel
async function createUser(user) {
    return await userModel.create(user);
}

// user find by credentials
async function findUserByCredentials(credentials) {
    const user = await userModel.findOne(credentials).lean();
    if (user) {
        return replaceMongoIdInObject(user);
    }
    return null;
}

export {
    getAllEvents,
    getEventById,
    createUser,
    findUserByCredentials
}