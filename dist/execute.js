/**
 * Execute a bash command with bubblewrap sandboxing.
 *
 * If `params.unsandboxed` is true, runs via `localExecute` (outside sandbox).
 * Otherwise runs via `sandboxedExecute`.
 */
export async function executeWithFallback(toolCallId, params, signal, onUpdate, ctx, sandboxedExecute, localExecute) {
    if (params.unsandboxed) {
        return localExecute(toolCallId, params, signal, onUpdate, ctx);
    }
    return sandboxedExecute(toolCallId, params, signal, onUpdate, ctx);
}
