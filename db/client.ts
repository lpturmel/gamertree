import { Credentials } from "aws-sdk";
import { DocumentClient } from "aws-sdk/clients/dynamodb";

const credentials = new Credentials({
	accessKeyId: process.env.AWS_ACCESS_KEY_ID_PERSO,
	secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY_PERSO,
});

const client = new DocumentClient({
	apiVersion: "2012-08-10",
	region: process.env.AWS_DEFAULT_REGION_PERSO,
	credentials,
});

export default client;
