import { fetch } from "./fetch";

export type LoginResult = {
    success: boolean,
    token: string | null,
}
export const login = async (email: string, password: string) => {
    return await fetch<LoginResult>("/user/login", { email, password }, "POST", true);
}

export type CreateResult = {
    success: boolean,
    token: string | null,
}
export const create = async (username: string, email: string, password: string) => {
    return await fetch<CreateResult>("/user", { username, email, password }, "POST", true);
}

export const setToken = async (token: string) => {
    await fetch("/set_token", { token }, "POST");
}
