import { User } from "next-auth";

export interface Profile extends User {
    public_username?: string;
}
