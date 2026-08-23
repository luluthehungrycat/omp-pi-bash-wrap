export function waitForChild(proc) {
    return new Promise((res, rej) => {
        let settled = false;
        const cleanup = () => {
            proc.removeListener("error", onErr);
            proc.removeListener("exit", onExit);
            proc.removeListener("close", onClose);
        };
        const finish = (code) => {
            if (settled)
                return;
            settled = true;
            cleanup();
            proc.stdout?.destroy();
            proc.stderr?.destroy();
            res(code);
        };
        const onErr = (err) => {
            if (settled)
                return;
            settled = true;
            cleanup();
            rej(err);
        };
        const onExit = (code) => {
            // Give stdio a brief grace period, then force-resolve.
            setTimeout(() => finish(code), 100);
        };
        const onClose = (code) => finish(code);
        proc.once("error", onErr);
        proc.once("exit", onExit);
        proc.once("close", onClose);
    });
}
export function killProcessTree(pid) {
    try {
        process.kill(-pid, "SIGKILL");
    }
    catch {
        try {
            process.kill(pid, "SIGKILL");
        }
        catch {
            /* already dead */
        }
    }
}
