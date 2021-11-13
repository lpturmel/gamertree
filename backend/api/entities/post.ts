import { getSession } from "@auth0/nextjs-auth0";
import { DocumentClient } from "aws-sdk/clients/dynamodb";
import { NextApiRequest, NextApiResponse } from "next";
import { createEntity } from "../../db/entities";
import { LeagueEntity } from "../../../types/entities/League";
import { Entity } from "../../../types/Entity";
import { v4 as uuid } from "uuid";
import { WowEntity } from "../../../types/entities/Wow";

const post = async (
	req: NextApiRequest,
	res: NextApiResponse,
	client: DocumentClient
) => {
	try {
		const game = req.body.game;

		if (!game) {
			return res.status(400).json({
				error: "game key is required",
			});
		}

		const session = getSession(req, res);

		let newEntity: Entity = {} as Entity;

		const entityId = uuid();

		switch (game) {
			case "lol":
				let leagueRegion = req.body.region;
				let leagueAccountName = req.body.account_name;

				if (!leagueRegion) {
					return res.status(400).json({
						error: "region key is required",
					});
				}
				if (!leagueAccountName) {
					return res.status(400).json({
						error: "account_name key is required",
					});
				}

				const lolEntity: LeagueEntity = {
					entity_id: entityId,
					user_id: session.user.email,
					region: leagueRegion,
					account_name: leagueAccountName,
					game,
				};

				newEntity = lolEntity;

				break;

			case "wow":
				let wowRegion = req.body.region;
				let wowCharacterName = req.body.character_name;

				if (!wowRegion) {
					return res.status(400).json({
						error: "region key is required",
					});
				}
				if (!wowCharacterName) {
					return res.status(400).json({
						error: "character_name key is required",
					});
				}
				const wowEntity: WowEntity = {
					entity_id: entityId,
					user_id: session.user.email,
					region: wowRegion,
					character_name: wowCharacterName,
					realm: req.body.realm,
					game,
				};

				newEntity = wowEntity;
				break;
		}

		const entity = await createEntity(
			session.user.email,
			newEntity,
			client
		);

		res.status(200).json(entity);
	} catch (error) {
		res.status(error.status || 500).json({ error: error.message });
	}
};

export default post;