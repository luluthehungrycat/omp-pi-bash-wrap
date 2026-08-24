# Bash-wrap OMP Roadmap

## Completed

- [x] OMP 18 runtime/type import port.
- [x] Built `dist/` included in Git releases.
- [x] Public no-token install: `omp plugin install github:luluthehungrycat/omp-pi-bash-wrap#v0.1.8`.
- [x] GitHub Packages publication: `@luluthehungrycat/omp-pi-bash-wrap@0.1.8`.
- [x] Bun build/test CI and OMP plugin-manager smoke CI.
- [x] Release verification with GitHub Packages and Podman containment.
- [x] Development README updated for Bun/OMP.

## Next

- [x] Run the shared OMP/Bun compatibility matrix for OMP 18.0.0/18.0.4 on Bun 1.4.0.
- [x] Add adversarial sandbox tool-call runtime coverage to the shared release gate.
- [ ] Keep `dist/` and package metadata synchronized on every release tag.

## Release gate

No release is complete unless public Git install, package install, `omp plugin doctor`, and the containment probe pass.
