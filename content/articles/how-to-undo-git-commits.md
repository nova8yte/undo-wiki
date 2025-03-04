# [Example] How to Undo Git Commits

Made a Git mistake? Here's how to fix it.

## Undo Options at a Glance

- **git reset**: Move branch pointer backward (local changes only)
- **git revert**: Create new commit that undoes changes (safe for shared repos)
- **git checkout**: Temporarily view old commit
- **git restore**: Fix specific files

## Undoing Last Commit

```bash
git reset --soft HEAD~1   # Keep changes staged
git reset HEAD~1          # Keep changes unstaged
git reset --hard HEAD~1   # Delete changes (caution!)
```

## For Shared Repositories

```bash
git revert HEAD           # Undo last commit
git revert HEAD~3..HEAD   # Undo last three commits
```

## Exploring Old Commits

```bash
git checkout a1b2c3d      # View old commit
git checkout main         # Return to latest
```

## Fixing Specific Files

```bash
git restore --source=a1b2c3d file.txt  # Restore from commit
git restore file.txt                   # Restore from HEAD
```

## Undoing Middle Commits

```bash
git revert a1b2c3d        # Reverse specific commit
```

## Recovering Deleted Work

```bash
git reflog                # Find lost commits
git checkout a1b2c3d      # Go to lost commit
git branch recovery       # Save to new branch
```

## Best Practices

1. Use branches to isolate work
2. Commit small changes
3. Write clear messages
4. Push regularly
5. Use `--hard` cautiously

Remember: Git preserves history, so recovery is usually possible.

## References

- [Git Documentation](https://git-scm.com/docs)
- [Pro Git Book](https://git-scm.com/book/en/v2) 