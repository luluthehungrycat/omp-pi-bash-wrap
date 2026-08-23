export type ExecuteFn = (toolCallId: string, params: {
    command: string;
    timeout?: number;
}, signal: AbortSignal | undefined, onUpdate: ((...args: any[]) => void) | undefined, ctx: any) => Promise<any>;
/**
 * Execute a bash command with bubblewrap sandboxing.
 *
 * If `params.unsandboxed` is true, runs via `localExecute` (outside sandbox).
 * Otherwise runs via `sandboxedExecute`.
 */
export declare function executeWithFallback(toolCallId: string, params: {
    command: string;
    timeout?: number;
    unsandboxed?: boolean;
}, signal: AbortSignal | undefined, onUpdate: ((...args: any[]) => void) | undefined, ctx: any, sandboxedExecute: ExecuteFn, localExecute: ExecuteFn): Promise<any>;
//# sourceMappingURL=execute.d.ts.map