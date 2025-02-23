# Dev on Windows (PowerShell)

If NodeJS is not installed or it is an old version as a quick workaround you can use wget

```bash
# If NodeJS is installed via winget:
winget uninstall "Node.js"

# Then, install the LTS version:
winget install OpenJS.NodeJS.LTS
```

Then, you can use `pnpm` as usual through corepack:

```
npm install --global corepack@latest
```

If you see any issues on Windows about ExecutionPolicy on PowerShell, you can run the following command:

```bash
Set-ExecutionPolicy RemoteSigned
```

then try to install pnpm again.

After that, confirm corepack is enabled and installed:

```bash
corepack --version
corepack list
```

If you see any issues on Windows about `pnpm`, try to force `corepack` to be enabled and activate `pnpm`:

```bash
corepack enable pnpm
corepack prepare pnpm@latest --activate
```

then

```bash
pnpm --version
```
