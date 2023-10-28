'use server'

import Contact from "@/models/contact";
import dbConn from "@/utils/dbConn";

export const submitContact = async (data) => {
  try {
    await dbConn();
    await Contact.create(data);
    return { status: "OK", message: "Message sent successfully" };
  } catch (error) {
    console.error(error);
    return { status: "ERROR", message: "Server error, please try again!" };
  }
}
