import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as dynamodb from 'aws-cdk-lib/aws-dynamodb';
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

    


  }
}
