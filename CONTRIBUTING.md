# Contributing

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
`nav`, `home`, `projects`, `about`, `resume`, `layout`, `deploy`

### Examples
```
feat(nav): collapse mobile links while keeping Book a call accessible

improve(home): tighten hero metadata hierarchy on small screens

content(projects): update Cebu Pacific metrics and stack tags

chore(deploy): pin wrangler compatibility date
```

### Guidelines
- Imperative mood (“add”, “fix”, “collapse”) — not “added” / “fixes”
- Summary ≤ ~72 characters; put context in the body
- One logical change per commit when practical
- Prefer fewer, meaningful pushes over noisy micro-commits
