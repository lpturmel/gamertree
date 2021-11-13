import { getSession } from "@auth0/nextjs-auth0";
import { DocumentClient } from "aws-sdk/clients/dynamodb";
import { NextApiRequest, NextApiResponse } from "next";
import { createEntity, deleteUserEntity } from "../../db/entities";
import { LeagueEntity } from "../../../types/entities/League";
import { Entity } from "../../../types/Entity";
import { v4 as uuid } from "uuid";
import { WowEntity } from "../../../types/entities/Wow";

const deleteEntity = async (
	req: NextApiRequest,
	res: NextApiResponse,
	client: DocumentClient
) => {
	try {
		const entity_id = req.body.entity_id;

		if (!entity_id) {
			return res.status(400).json({
				error: "entity_id key is required",
			});
		}

		const session = getSession(req, res);

		const deletedEntity = await deleteUserEntity(
			session.user.email,
			entity_id,
			client
		);
		console.log(deletedEntity);
		res.status(200).json(deletedEntity);
	} catch (error) {
		res.status(error.status || 500).json({ error: error.message });
	}
};

export default deleteEntity;
