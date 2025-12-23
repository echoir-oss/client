import { createCache, createRootCache } from "./cache";
import { fetch } from "./fetch";
import { type PreUser, user as typesUser, type User } from "./types";

export const meCache = createCache(async () =>
    typesUser(await fetch<PreUser>("/user/@me", undefined, undefined, true)),
);
export const me = async () => {
    return await meCache.value();
};

export const userCache = createRootCache<string, User>(async (id) =>
    typesUser(await fetch<PreUser>("/user/" + id)),
);
export const user = async (id: bigint) => {
    return await userCache.value[String(id)]();
};
