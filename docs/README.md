# Documentation

This docs section will include documentation relevant to understand how Serverless works.

You may want to start with the ["Your first service"](/docs/tutorials/your-first-service.md) tutorial to create, deploy,
invoke and remove your very first Serverless service!

If you're interested to take a look behind the scenes you might take a look at the [concepts](/docs/concepts) of
Serverless to understand the how Serverless is architected and works.

After that you should take a look at the different [plugins](/docs/plugins) which are used to deliver the functionality
Serverless provides (such as service creation, deployment, removal, function invocation etc.).

## Table of contents

- Concepts
  - [services](/docs/concepts/services.md) - Understanding Serverless services
  - [serverless.yaml](/docs/concepts/serverless-yaml.md) - A look at the `serverless.yaml` file
  - [serverless.env.yaml](/docs/concepts/serverless-env-yaml.md) - A look at the `serverless.env.yaml` file
  - [event sources](/docs/concepts/event-sources.md) - Understanding different types of event sources
  - [plugins](/docs/concepts/plugins.md) - How plugins work
- Tutorials
  - [Your first service](/docs/tutorials/your-first-service.md) - Create, deploy, invoke and remove your first service
  - [Event sources](/docs/tutorials/event-sources.md) - Learn how you can extend your services functionality with event
  sources
- Plugins
  - Core plugins
    - [create](/lib/plugins/create) - Creates a new Serverless service
    - [deploy](/lib/plugins/deploy) - Deploy your resources to your provider
    - [invoke](/lib/plugins/invoke) - Invoke your function
    - [remove](/lib/plugins/remove) - Remove a deployed service
  - AWS plugins
    - [Compile Functions](/lib/plugins/aws/deploy/compile/functions) - Compiles the functions to
    CloudFormation resources
    - [Compile S3 Events](/lib/plugins/aws/deploy/compile/events/s3) - Compiles the S3 events to
    CloudFormation resources
    - [Compile Scheduled Events](/lib/plugins/aws/deploy/compile/events/schedule) - Compiles the Scheduled
    events to CloudFormation resources
    - [Compile Api Gateway Events](/lib/plugins/aws/deploy/compile/apiGateway) - Compiles API Gateway events
    to CloudFormation resources
    - [Deploy](/lib/plugins/aws/deploy) - Deploys the Serverless service to AWS
    - [Invoke](/lib/plugins/aws/invoke) - Invokes a AWS lambda function
    - [Remove](/lib/plugins/aws/remove) - Removes the service with all it's resources from AWS

## FAQ

> Where do I start when I want to write apps with Serverless?

You should take a look at the [tutorials](/docs/tutorials) where you will find different guides which will help you
with your first application (there's also a ["Your first service"](/docs/tutorials/your-first-service.md) tutorial).

> I want to integrate provider X. How does this work?

You can implement your provider of choice with he help of plugins. Start by reading the [plugin concept](/docs/concepts/plugins.md)
to get an overview how plugins work. After that you might want to take a look at the [AWS Deploy](/lib/plugins/aws/deploy)
plugin which will explain to you how the AWS provider is implemented / works.

We'd recommend to take a look at the different sources of the [plugins](/lib/plugins) as they show implementation
details and best practices which will help you integrate your provider easily.

> How does Serverless work?

The [concepts](/docs/concepts) folder in the docs will help you understand how Serverless works.
You might want to read it in this order:

1. [Services](/docs/concepts/services.md)
2. [serverless.yaml](/docs/concepts/serverless-yaml.md)
3. [serverless.env.yaml](/docs/concepts/serverless-env-yaml.md)
4. [Event Sources](/docs/concepts/event-sources.md)
5. [Plugins](/docs/concepts/plugins.md)