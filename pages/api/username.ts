import { NextApiRequest, NextApiResponse } from "next";
import client from "../../backend/db/client";
import { withApiAuthRequired } from "@auth0/nextjs-auth0";
import getUsernameAvailability from "../../backend/api/username/get";
import createUserProfile from "../../backend/api/username/post";


export default withApiAuthRequired(async function entities(req: NextApiRequest, res: NextApiResponse) {

	switch (req.method) {
		case "GET":
			await getUsernameAvailability(req, res, client);
			break;
		case "POST":
			await createUserProfile(req, res, client);
			break;
		default:
			res.status(405).end();
			break;
    }
});

