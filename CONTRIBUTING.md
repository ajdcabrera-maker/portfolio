# Contributing

## Design governance

Before UI or Paper work, read **[DESIGN.md](./DESIGN.md)**.

- Tokens live in `src/styles/tokens.css`
- Primitives live in `src/ds/`
- Site chrome lives in `src/components/` + `src/layouts/`
- Shared URLs/nav live in `src/lib/site.ts`

Prefer extending the library over one-off styles. See DESIGN.md → *Defect rule* and *Paper.design sync protocol*.

## Commit messages

Use [Conventional Commits](https://www.conventionalcommits.org/) so history stays scannable as the site grows:

```
<type>(optional-scope): <summary>

[optional body — why, not what]
```

### Types
| Type | Use for |
|------|---------|
| `feat` | New user-facing capability |
| `fix` | Bug fix |
| `improve` | UX/a11y/responsive polish without a new feature |
| `content` | Copy, MDX case studies, CV asset updates |
| `chore` | Tooling, deps, deploy config, docs-only |

### Scopes (optional)
`nav`, `home`, `projects`, `about`, `resume`, `layout`, `ds`, `tokens`, `deploy`

### Examples
```
feat(nav): collapse mobile links while keeping Book a call accessible

improve(home): tighten hero metadata hierarchy on small screens

chore(ds): add semantic tokens and DESIGN.md contract

content(projects): update Cebu Pacific metrics and stack tags

chore(deploy): pin wrangler compatibility date
```

### Guidelines
- Imperative mood (“add”, “fix”, “collapse”) — not “added” / “fixes”
- Summary ≤ ~72 characters; put context in the body
- One logical change per commit when practical
- Prefer fewer, meaningful pushes over noisy micro-commits
- Token or primitive changes that affect multiple pages: mention `ds` / `tokens` in scope
