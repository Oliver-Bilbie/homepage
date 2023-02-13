# Homepage

![Build-Status](https://s3.eu-west-1.amazonaws.com/oliver-bilbie.co.uk/build-status.svg?)
[![Last-Commit](https://img.shields.io/github/last-commit/Oliver-Bilbie/homepage)](https://github.com/Oliver-Bilbie/homepage/blob/main/CHANGELOG.md)

---

## Overview

A homepage to showcase my other projects.

### [Hosted here](https://oliver-bilbie.co.uk)

---

## Architecture

### Frontend

The frontend is written using [React](https://reactjs.org/) with the code written in TypeScript. I have used the [Grommet](https://v2.grommet.io/) component library for UI elements as well as icons.
The frontend is hosted from an [AWS S3](https://aws.amazon.com/s3/) bucket using the static website hosting functionality. This service does not support HTTPS connections, so I have used an [AWS Cloudfront](https://aws.amazon.com/cloudfront/) distribution along with AWS's certificate manager to provide this functionality.

### Pipelines

When a PR is created or updated, a [CodeBuild](https://aws.amazon.com/codebuild/) event is triggered which will deploy the frontend, along with a second event which will run the tests and linting. A merge into the main branch will trigger an event which will deploy the project once again.

For this project I have decided to use one of AWS's default build images, since I do not have the time to consistently maintain my own. As a result, the dependencies are installed each time a build is run which is not ideal, but this works well enough for now.
