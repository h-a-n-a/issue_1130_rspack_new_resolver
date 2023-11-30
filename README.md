## New resolver resolving chinese characters

### Install

```
pnpm install
```

### Reproduce

1. Enable new resolver

2. Build with `pnpm build`

### Expected

Nothing going wrong

### Actual

Complaints about `哈喽.vue` not found.

Changing new resolver to old resolver will fix the problem.
