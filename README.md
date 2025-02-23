# Next Starter Kit

This is a starter kit to small projects and pocs. It will offer you some configurations out-of-the-box, but won't contain any significant amount of code. Feel free to use it as it is.

## Stack

- NextJS: https://nextjs.org/docs
- [ReactQuery](https://tanstack.com/query/latest/docs/framework/react/overview)
  - For NextJS App Router [use this config](https://tanstack.com/query/latest/docs/framework/react/guides/advanced-ssr#initial-setup)
  - For dehydrate data, check [here](https://tanstack.com/query/latest/docs/framework/react/guides/advanced-ssr#prefetching-and-dehydrating-data) - a little bit down for `app router`
- [TailwindCSS](https://tailwindcss.com/docs/installation/framework-guides)
- [shadcn/ui](https://ui.shadcn.com/docs)
- [jotai](https://jotai.org/)
- [vitest](https://vitest.dev/guide/)
- [react-hook-form](https://react-hook-form.com/)
- [zod](https://zod.dev/)

## Development

- Use `pnpm` as your package manager
- Use `pnpm run dev` to start the development server
- Use `pnpm run build` to build the project
- Use `pnpm run start` to start the production server
- Use `pnpm run test` to run the tests
- Use `pnpm run lint` to run the linting
- Use `pnpm run format` to format the code

### Dev on Windows PowerShell

On Windows, you can create an alias for the pnpm command. On PowerShell:

1. First, check if you already have a PowerShell profile by running this in PowerShell:

```bash
Test-Path $PROFILE
```

2. If you don't have one, create one by running this in PowerShell:

```bash
New-Item -Type File -Path $PROFILE -Force
```

3. Open the profile in a text editor:

```bash
notepad $PROFILE
```

4. Add the following line to the profile:

```powershell
Set-Alias -Name p -Value pnpm
function Run-AllChecks { pnpm run lint; pnpm run build }
Set-Alias -Name p:all -Value Run-AllChecks
```
