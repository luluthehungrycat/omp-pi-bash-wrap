import type { BashOperations } from "@oh-my-pi/pi-coding-agent/extensibility/legacy-pi-coding-agent-shim";
import type { BwrapConfig } from "./types.js";
export declare function findBwrap(): string | null;
/** Run a harmless bwrap command to verify namespace/mount support. */
export declare function testBwrap(bwrapPath: string): boolean;
export declare function buildBwrapArgs(config: BwrapConfig, cwd: string, command: string): string[];
export declare function createBwrapOps(bwrapPath: string, config: BwrapConfig): BashOperations;
//# sourceMappingURL=bwrap.d.ts.map