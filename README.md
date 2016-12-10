## Website Performance Optimization portfolio project

The original/pre-fork readme can be found
[here](src/README.md).

The readme you are viewing now, documents the changes made post-fork.

### Changes Made Post-Fork In Chronological Order

#### gh-pages

This repository is hosted
[here](https://carltonwin8.github.io/frontend-nanodegree-mobile-portfolio/)
by creating a gh-pages branch.
The hosted page is used for
[PageSpeed Insights](https://developers.google.com/speed/pagespeed/insights/)
performance testing.
Some results of performance testing are documented
[here](https://docs.google.com/spreadsheets/d/1AUgnGV3Ep1f-aRLn_9Zg2LcT2XZOxzw0IjaC4f83xBQ/edit?usp=sharing)
for my self and are not formatted or commented well for others.

#### Gulp

  - Added a .gitignore file in order not to commit into the repository
    the node_modules needed for gulp
  - Moved all the original files into the src directory.
  - Created a [gulpfile](gulpfile.js) to:
    - generate the dist directory based on the contents of the src directory,
    - update the dist directory when the files in the src directory change,
    - serve/host the dist directory locally via browser-sync, and
    - automatically refresh the browser when the dist directory content is updated.
      - **note** browser-sync effects the performance of the locally served contents
        and care should be taken when interpreting performance information locally.
  - After cloning the repository type the following commands to view the site locally.
    - `npm install` - installs the node modules necessary for the gulpfile
    - `gulp` - serves the code on local host and opens the browser to view the contents
