---
icon: circle-small
---

# How to create a Pull Request Preview comparing commits (not branches)

A challenge we have often is - when giving updates - being able to effectively show what code was changed in the codebase since our last check in.&#x20;

The default way to do this is via a standard Github [Pull Request](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests). This should always be the first option.

Sometimes though, we are committing to the same branch and want to just show the changes that happened between _**our**_ commit and the previous commits.&#x20;

To let us do this, **Github has a hidden way to let us compare&#x20;**_**commits**_**&#x20;in it's web based diff viewer.**&#x20;



1. Push your changes to the branch (usually `dev`) as normal
2. Go to the Commits section in Github&#x20;

<figure><img src="../../.gitbook/assets/CleanShot 2025-06-24 at 11.10.37@2x.png" alt=""><figcaption></figcaption></figure>

3. Grab the hash of your most recent commit, and also the hash of the commit before you made any changes.

<figure><img src="../../.gitbook/assets/CleanShot 2025-06-24 at 11.19.12@2x (2).png" alt=""><figcaption></figcaption></figure>

4. Construct a url that follows the below format (notice the `...` between the two commits)

```
https://github.com/{username}/{repository}/compare/{commit_hash}...{commit_hash}
```



### **Example**

Let's use an example from our open source H1 Rails codebase

* **First commit hash**: eda93a0bde19f5fc72b94715d7a036284b8a1e60
* **Second commit hash**: e7e46ff4a67d73d3ce8c03d2428861b6b71888cc
* **Full Url:** [https://github.com/reallygoodsoftware/h1rails/compare/eda93a0bde19f5fc72b94715d7a036284b8a1e60...e7e46ff4a67d73d3ce8c03d2428861b6b71888cc](https://github.com/reallygoodsoftware/h1rails/compare/eda93a0bde19f5fc72b94715d7a036284b8a1e60...e7e46ff4a67d73d3ce8c03d2428861b6b71888cc)



