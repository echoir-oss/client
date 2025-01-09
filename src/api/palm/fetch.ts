import { DEV } from "solid-js"

export const fetch = async <T extends object>(pathname: string, body?: any, method?: string, noThrow?: boolean) => {
    const result = await window.fetch(new URL(pathname, DEV ? "http://localhost:6813" : "https://api.echoir.fr"), {
        body: body && JSON.stringify(body),
        method,
        credentials: "include",
        headers: body && {
            "Content-Type": "application/json",
        }
    });
    const obj = {
        ...(await result.json()),
        $palm: {
            sc: result.status
        }
    } as T;
    if(!result.ok && !noThrow) throw obj;
    return obj;
}