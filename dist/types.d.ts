export declare const CONFIG_FILENAME = "bwrap.json";
export declare const GLOBAL_CONFIG_DIR = "";
export declare const PROJECT_CONFIG_SUBDIR = ".pi";
/** Default cache/config paths.  NO global-install targets. */
export declare const DEFAULT_EXTRA_WRITE_PATHS: readonly string[];
export interface WriteToolMap {
    [toolName: string]: string;
}
export interface BwrapConfig {
    enabled: boolean;
    internet: "allow" | "block";
    extraReadPaths: string[];
    extraWritePaths: string[];
    shellPath?: string;
    promptOnFailure: boolean;
    writeTools: WriteToolMap;
    timeout?: number;
}
//# sourceMappingURL=types.d.ts.map