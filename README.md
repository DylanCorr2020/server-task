# ServerTask - Serverless To-Do Application

## Project Brief

ServerTask is a modern, serverless to-do application designed to demonstrate cloud-native architecture while being cost-effective and maintainable. It addresses the limitations of traditional to-do applications, such as data loss, scalability issues, and limited user experience.

## Problem Landscape

* **Data Persistence and Reliability:**
    * Traditional to-do apps often store data locally, leading to data loss.
    * Challenges with cross-device access and team collaboration.
* **Scalability and Performance:**
    * Difficulty handling multiple users and large numbers of tasks.
    * Issues with storing and retrieving attachments.
    * Maintaining responsiveness under load.
* **User Experience:**
    * Need for real-time updates.
    * Ability to organize and prioritize tasks.
    * Support for image attachments.
    * Cross-device accessibility.

## Solution Requirements

### Core Functionality Requirements

* **Task Management:**
    * Create, read, update, and delete tasks (CRUD).
    * Add descriptions and due dates.
    * Attach images to tasks.
    * Mark tasks as complete.
* **User Interface:**
    * Clean, intuitive design.
    * Responsive layout.
    * Real-time updates.
    * Image preview capability.

### Technical Infrastructure

* **Amazon DynamoDB:** For task data storage.
* **Amazon S3:** For image storage.
* **AWS Lambda:** For business logic.
* **Amazon API Gateway:** For API endpoints.
* **Amazon Rekognition:** For image analysis.
* **AWS CDK:** For infrastructure as code.

## Why These Requirements Matter

* Reliable data storage ensures no data loss.
* Image attachments enhance task clarity.
* A clean interface improves usability.
* Real-time updates keep information current.

## Success Criteria

* Reliable task management across devices.
* Real-time task updates.
* Easy image attachment to tasks.
* Responsiveness under load.
* Predictable infrastructure costs.
* Easy system maintainability.

## Getting Started

This section will be updated with instructions on how to set up and run the ServerTask application.

## Technologies Used

* AWS CDK
* AWS Lambda
* Amazon DynamoDB
* Amazon S3
* Amazon API Gateway
* Amazon Rekognition

## Future Improvements

* User Authentication.
* Task sharing and collaboration.
* Advanced task filtering and sorting.
* Push notifications.