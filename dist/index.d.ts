/**
 * pi-bash-wrap — sandbox pi bash commands with bubblewrap
 *
 * Replaces the built-in bash tool so LLM-invoked commands run inside bwrap.
 * User-initiated !commands are NOT sandboxed.
 *
 * Config files (JSON, merged, project takes precedence):
 *   - ~/.pi/agent/bwrap.json        (global)
 *   - <cwd>/.pi/bwrap.json          (project-local)
 */
import type { ExtensionAPI } from "@oh-my-pi/pi-coding-agent";
export default function (pi: ExtensionAPI): void;
//# sourceMappingURL=index.d.ts.map