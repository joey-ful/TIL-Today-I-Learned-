
## Git -u, rebase

### Git -u

`git branch --set-upstream <remote branch>`
sets the default remote branch for the current local one for future git pulls.

The following commands are identical;
they set the default remote branch for the current local one for any future git pulls and pushes:

1. 'git push -u <remote branch> <local branch>`
2. 'git push --set-upstream <remote branch> <local branch>`
3. 'git push --set-upstream-to <remote branch> <local branch>`

The more verbose `--set-upstream-to` or the abbreviated `-u` tags are recommended to use
instead of the second one. Because they are either clearer or simpler.

### Git Rebase

`merge` records all the commit histories of the concurrent branches.
The records might be very confusing to see, but anyone can see the real process of the project (the real commit order)

base - branchcommit1 - branchcommit2
     - mastercommit1 - mastercommit2


On the other hand, `rebase` organizes the history into one main stream as if there have been no other branches.
We don't know what happened first, but it's a lot easier to see the flow.

base - mastercommit1 - mastercommit2 - branchcommit1 - branchcommit2
