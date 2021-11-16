import { DocumentClient } from "aws-sdk/clients/dynamodb";
import { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "@auth0/nextjs-auth0";
import { createUserProfile, isUsernameTaken } from "../../db/profile";

const post = async (req: NextApiRequest, res: NextApiResponse, client: DocumentClient) => {

	try {
		if (req.method !== "POST") {
			return res.status(405).json({
				error: "Method not allowed",
			});
		}
        
        const username = req.body.username;

        if(!username) {
            return res.status(400).json({
                error: "Missing username"
            })
        }
        const session = getSession(req, res);
       
        const profile = await isUsernameTaken(username, client);

        if(profile) {
            return res.status(403).json({
                error: "Username taken"
            })
        }
        const newProfile = await createUserProfile(session.user.email, username, client);
        
        return res.json(newProfile);
	    } catch (error) {
		    res.status(error.response.status || 500).json({ error: error.message });
	}
}

export default post
