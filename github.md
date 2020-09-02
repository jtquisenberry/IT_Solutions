# Saving from Sub-Branch to Branch in PyCharm

1. Commit to sub-branch 6070-jq.
2. Push to sub-branch 6070-jq.
3. Merge from branch 6070.
4. Test sub-branch 6070-jq.
5. Push to sub-branch 6070-jq.
5. Checkout main branch 6070
6. Merge from sub-branch 6070-jq with VCS -> Git -> Merge Changes. Select Branches to merge = 6070-jq.
    At this point the branch and sub-branch should be identical. Testing done on the subbranch should be adequate.
7. Push main branch 6070.

# Compare Branches

https://github.consilio.com/DiscoveryProcessing/MindPalace/compare/CA-6070-jq...CA-6070

# Compare Commits

https://github.consilio.com/DiscoveryProcessing/MindPalace/commit/4c8251bd1fa07baf78f94b62dbddd864d935eb4b


# Clone a Wiki

Append .wiki.git to the repository name.

That is, if your repository name was foobar:

`git clone git@github.com:myusername/foobar.git` would be the path to clone your repository

and

`git clone git@github.com:myusername/foobar.wiki.git` would be the path to clone its wiki.


# Delete files Remotely but not Locally

`git rm --cached my_file`
`git commit -m "the file my_file is gone from the repository"`


