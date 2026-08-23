import { spawn } from "node:child_process";
export declare function waitForChild(proc: ReturnType<typeof spawn>): Promise<number | null>;
export declare function killProcessTree(pid: number): void;
//# sourceMappingURL=child-process.d.ts.map