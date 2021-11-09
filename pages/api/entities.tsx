import { withApiAuthRequired } from "@auth0/nextjs-auth0";
import client from "../../db/client";
import getEntities from "../../api/entities/get";
import createEntity from "../../api/entities/post";

export default withApiAuthRequired(async function entities(req, res) {
	switch (req.method) {
		case "GET":
			await getEntities(req, res, client);
			break;
		case "POST":
			await createEntity(req, res, client);
		default:
			res.status(405).end();
			break;
	}
});
