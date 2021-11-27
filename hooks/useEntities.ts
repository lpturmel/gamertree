import axios from "axios";
import { useQuery } from "react-query";
import { Entity } from "../types/Entity";

const useEntities = () => {
    return useQuery<Entity[]>("entities", async () => {
        const { data } = await axios.get("/api/entities");
        return data;
    });
};

export default useEntities;
