import { defineConfig } from "@solidjs/start/config";
import { execSync } from "node:child_process";

export default defineConfig({
    ssr: false,
    vite: {
        define: {
            COMMIT_HASH: JSON.stringify(execSync("git rev-parse --short=8 HEAD").toString().trim())
        }
    }
});
