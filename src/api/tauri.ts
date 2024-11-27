export * from "@tauri-apps/api";
import * as tauri from "@tauri-apps/api";

export const appVersion = await tauri.app.getVersion();
export const version = await tauri.app.getTauriVersion();
export const systemInfo = await tauri.core.invoke<string>("get_sys_info");