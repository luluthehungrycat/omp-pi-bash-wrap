export declare function expandHome(p: string): string;
export declare function detectPackageManager(): "apt" | "dnf" | "pacman" | "zypper" | "apk" | null;
export declare function getBwrapInstallHint(pm: ReturnType<typeof detectPackageManager>): string;
/** Truncate a long command for display. Keep first 10 + last 5 lines if > 16 lines. */
export declare function truncateCommandForDisplay(cmd: string): string;
/** Check whether a target path lies outside cwd. */
export declare function isPathOutsideCwd(targetPath: string, cwd: string): boolean;
/**
 * Conservative pre-flight check for commands that likely require unsandboxed access.
 * Only matches when the first real command token (after env vars and common wrappers)
 * is exactly docker, podman, buildah, or nerdctl. False negatives are acceptable.
 */
export declare function looksLikeContainerCommand(cmd: string): boolean;
//# sourceMappingURL=utils.d.ts.map