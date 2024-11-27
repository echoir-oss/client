// Learn more about Tauri commands at https://tauri.app/develop/calling-rust/
#[tauri::command]
fn get_sys_info() -> String {
    format!("{} {}", sysinfo::System::name().unwrap_or("unknown".into()), sysinfo::System::os_version().unwrap_or("unknown".into()))
}

#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
    tauri::Builder::default()
        .plugin(tauri_plugin_shell::init())
        .invoke_handler(tauri::generate_handler![get_sys_info])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
