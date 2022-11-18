# ML-take-home
Template for Machine Learning take home project


## Description

The purpose of this project is to implement an image classifier that allows to determine the health status of a potato plant according to the state of its leaves.

The idea is that using a dataset that you can find in this repository you can do the following:

 - Train an image classification model.
 - Implement a frontend that allows to upload an image and by means of the classifier, determine the status of the sheet. 
 - Implement a REST API to run the machine learning model. 


## Structure

The project has three implementations: Frontend, Backend and Machine Learning tasks. Therefore it has two folders for that purpose:

 - **ml-client**. It contains all related with the frontend.
 - **ml-server**. It contains all related with the backend service and machine learning pipeline

 ### Frontend

 ### Backend

REST API implemented with FastAPI with which you can expose the Machine Learning service for image classification. It consists of the following:

```
ml-server/
├── Pipfile
├── README.md
├── app
│   ├── api
│   ├── app.py
│   ├── models
│   │   ├── response.py
│   │   └── schemas
│   │       └── classifier.py
│   ├── repository
│   │   └── classifier_repository.py
│   ├── services
│   │   └── classifier_services.py
│   └── utils
│       └── strings.py
├── main.py
├── mlmodels
├── run.sh
├── tests
│   ├── conftest.py
│   └── test_base.py
└── train.py
```

- `train.py`: file that must contain everything related to the training of the machien learning model. 
- `main.py`. To execute the API and expose the service
- `mlmodels/`. To store the trained machine learning model. The api must load the model from this path.
- `tests/`. To test the api
- `app/`. Contains all the structure of the api.This app follows an N-layer structure where the direct interaction/inference with the Machine learning model is done in the `repository/` layer. 

Some observations:

- You are free to choose the tool for training: Tensorflow, Pytorch, Keras, Transformers. However, we recommend you to use this model `google/vit-base-patch16-224-in21k`, in order to start from a pre-trained network and to be able to do transfer-learning.
- For training you can make use of google collaboratory which allows you to make use of a gpu machine in case you don't have one. In that case, we recommend you to upload the notebook as well as to structure well its content so you can copy and paste it into the train.py file. The idea is that the training can be done through this script for further training.
- You can add additional files to the REST API to complete your implementation.


