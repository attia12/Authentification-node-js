import { mailtrapClient,sender} from "../lib/mailtrap.js";
import { createWelcomeEmailTemplate } from "../emails/emailTemplates.js";
export const sendWelcomeEmail = async (email, name, profileUrl) => {
    const recipient = [{ email}];
    try {
        const response = await mailtrapClient.send({
            from: sender,
            to: recipient,
            subject: "Welcome to Linkindin",
            html:createWelcomeEmailTemplate(name,profileUrl),
            category: "welcome"
        });
        console.log("welcome Email sent successfully",response);      
        
    } catch (error) {
        throw error;
        
    }

}