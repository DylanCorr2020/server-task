import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as dynamodb from 'aws-cdk-lib/aws-dynamodb';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import * as path from 'path';
import * as apigateway from 'aws-cdk-lib/aws-apigateway';
import { NodejsFunction } from 'aws-cdk-lib/aws-lambda-nodejs';
// import * as sqs from 'aws-cdk-lib/aws-sqs';

export class InfrastructureStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // Create DynamoDB table
    // primary key id
    // table will be deleted along with all its data
    // pay per request billing mode
 const todoTable = new dynamodb.Table(this, 'TodoTable', {
      partitionKey: { name: 'id', type: dynamodb.AttributeType.STRING },
      tableName: 'Todo-Tasks',
      removalPolicy: cdk.RemovalPolicy.DESTROY, 
      billingMode: dynamodb.BillingMode.PAY_PER_REQUEST,
    });

  //api gateway
  const api = new apigateway.RestApi(this, 'RestAPI', {
   restApiName: 'RestAPI',
    defaultCorsPreflightOptions: {
    allowOrigins: apigateway.Cors.ALL_ORIGINS,
    allowMethods: apigateway.Cors.ALL_METHODS,
  },
    apiKeySourceType: apigateway.ApiKeySourceType.HEADER,
  });


  // create lambda function
  // 5. Create our Lambda functions to handle requests
  const tasksLambda = new NodejsFunction(this, 'TasksLambda', {
  entry: 'resources/endpoints/tasks.ts',
  handler: 'handler',
  environment: {
    TABLE_NAME: todoTable.tableName,
   },
  });


  // 6. Grant the Lambda function permissions to access DynamoDB
todoTable.grantReadWriteData(tasksLambda);


//Define our API Gateway endpoints
const tasks = api.root.addResource('tasks');



// 8. Connect our Lambda functions to our API Gateway endpoints
const tasksIntegration = new apigateway.LambdaIntegration(tasksLambda);


// 9. Define our API Gateway methods
tasks.addMethod('GET', tasksIntegration, {
  
});

tasks.addMethod('POST', tasksIntegration, {
  
});




// Output the API URL
    new cdk.CfnOutput(this, 'ApiUrl', {
      value: api.url,
      description: 'The URL of the API',
    });



  }
}
