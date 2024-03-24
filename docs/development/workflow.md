# Development Workflow

Development is the procedure to make requirements and fixes into reality.

The workflow of development should help finish this procedure more efficieny and quality \
—— coding, testing and delivery.

## From Requirement to Development

We can't start coding from an original requirement.

### A New Idea

The idea can be enhancements or new features, but not a fix.

1. start an issue or discussion (better with a form)
2. provide sufficient evidence or reasons for developing it
3. discuss a solution
4. arrange the work
5. breakdown the solution into issues(tasks)
6. track them in feature project
7. configure priority, iteration, release ...
8. create a new branch to do the issues (maybe more, depending on isolating conflict)
9. create a pull request, wait for review, and test
10. repeat 6-7 until all related issues closed
11. close the initial issue

### From the Product Requirement Document

Almost the same as the above, but be aware of these:

1. breakdown the requirements using the User Story method

### Bug Report

A behavior acts abnormally or finds vulnerabilities.

Almost the same as the above, but be careful with these:

1. set labels to classify: bugs, security
2. track them in Bug Tracker

## Coding

Use plugins to help you following the [Coding Standard](./coding-standard.md)

Here's some plugins for VSCode checking your formatting and naming:

1. PEP8: [flake8](https://marketplace.visualstudio.com/items?itemName=ms-python.flake8)
2. JS Standard: [vscode-standard](https://marketplace.visualstudio.com/items?itemName=standard.vscode-standard)

## Testing

For different scene, use the apporiate testing methods. \
The philosophy is doing it moderately, no overdoes.

For endpoints, test its functionality. \
For key endpoints, test its performace.

Once a PR merging to release branch is created, testing should make sure the PR doesn't broke the software. \
We might use GitHub Actions or Earthly to implement this.

## Delivery and Deploy

Keeping stable and other release branch always ready to deploy.
