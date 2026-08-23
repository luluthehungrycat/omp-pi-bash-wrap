import { existsSync } from "node:fs";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { getAgentDir } from "@oh-my-pi/pi-coding-agent";
import { CONFIG_FILENAME, GLOBAL_CONFIG_DIR, PROJECT_CONFIG_SUBDIR, DEFAULT_EXTRA_WRITE_PATHS, } from "./types.js";
const DEFAULT_WRITE_TOOLS = {
    write: "path",
    edit: "path",
};
export async function loadConfig(cwd, globalConfigDir) {
    const paths = [
        join(globalConfigDir ?? getAgentDir(), GLOBAL_CONFIG_DIR, CONFIG_FILENAME),
        join(cwd, PROJECT_CONFIG_SUBDIR, CONFIG_FILENAME),
    ];
    const merged = {
        enabled: true,
        internet: "allow",
        extraReadPaths: [],
        extraWritePaths: [...DEFAULT_EXTRA_WRITE_PATHS],
        promptOnFailure: true,
        writeTools: { ...DEFAULT_WRITE_TOOLS },
        timeout: 600,
    };
    for (const p of paths) {
        if (!existsSync(p))
            continue;
        try {
            const raw = await readFile(p, "utf-8");
            const parsed = JSON.parse(raw);
            if (parsed.enabled !== undefined)
                merged.enabled = parsed.enabled;
            if (parsed.internet !== undefined)
                merged.internet = parsed.internet;
            if (parsed.shellPath !== undefined)
                merged.shellPath = parsed.shellPath;
            if (parsed.promptOnFailure !== undefined)
                merged.promptOnFailure = parsed.promptOnFailure;
            if (parsed.timeout !== undefined)
                merged.timeout = parsed.timeout;
            if (parsed.extraReadPaths)
                merged.extraReadPaths = parsed.extraReadPaths;
            if (parsed.extraWritePaths) {
                merged.extraWritePaths = [...merged.extraWritePaths, ...parsed.extraWritePaths];
            }
            if (parsed.writeTools) {
                merged.writeTools = { ...merged.writeTools, ...parsed.writeTools };
            }
        }
        catch {
            /* ignore malformed config */
        }
    }
    return merged;
}
