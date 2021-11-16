import { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "@auth0/nextjs-auth0";
import { getUserProfile } from "../../backend/db/profile";
import client from "../../backend/db/client";
import { withApiAuthRequired } from "@auth0/nextjs-auth0";


export default withApiAuthRequired(async function entities(req: NextApiRequest, res: NextApiResponse) {
	try {
		if (req.method !== "GET") {
			return res.status(405).json({
				error: "Method not allowed",
			});
		}

    const session = getSession(req, res);
    
    const profile = await getUserProfile(session.user.email, client);

    
	return res.status(200).json({
        public_username: profile.public_username,
        user_id: profile.user_id
    });

	} catch (error) {
		res.status(error.response.status || 500).json({ error: error.message });
	}
});

