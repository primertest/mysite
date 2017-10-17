#!/bin/bash
echo Enter your GitHub email address.
read githubemail
echo your GitHub email is: $githubemail
echo Enter your GitHub User Name.
read githubuser
echo your GitHub User Name is: $githubuser
echo Enter the address of the repo you wish to clone.
read repotoclone
echo You want to clone the repo at: $repotoclone
echo Enter the address of the repo you will push to.
read repotopushto
echo You want to push to the repo at: $repotopushto
repo=${repotoclone##*/}
repofolder=${repo%%.*}
git config --global user.email $githubemail
git config --global user.name $githubuser
mkdir -p src
cd src
git clone $repotoclone
cd ${repo%%.*}
rm -rf .git
git init
git remote add origin $repotopushto
echo "first $repofolder commit" >> README.md
git add --all
git commit -m "The basic $repofolder fun starts here"
git push -f origin master
