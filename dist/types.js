export const CONFIG_FILENAME = "bwrap.json";
export const GLOBAL_CONFIG_DIR = "";
export const PROJECT_CONFIG_SUBDIR = ".pi";
/** Default cache/config paths.  NO global-install targets. */
export const DEFAULT_EXTRA_WRITE_PATHS = [
    "~/.cache",
    "~/.config",
    "~/.npm",
    "~/.cargo/registry/cache",
    "~/.cargo/git",
    "~/.cargo/registry/src",
    "~/.rustup",
    "~/.m2/repository",
    "~/.gradle/caches",
    "~/.pip",
];
