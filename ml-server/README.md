# ML Take Home - backend

FastAPI Backend for the ML Take Home project.  
This project is a simple REST API tha exposes a machine leaning service through a POST endpoint.
The endpoint will allow a client to request a classification for a given image.

The project structure is as follows:

```
ml-server/
├── Pipfile
├── README.md
├── app
│   ├── app.py
│   ├── models
│   │   ├── response.py
│   │   └── schemas
│   │       └── classifier.py
│   ├── services
│   │   └── classifier.py
│   └── utils
│       └── strings.py
├── main.py
├── mlmodels
├── run.sh
├── tests
│   ├── conftest.py
│   ├── test_base.py
│   └── test_image.jpeg
└── train.py
```

- `train.py`: file that must contain everything related to the training of the machine learning model
- `main.py`: run the app with uvicorn
- `mlmodels/`: to store the trained machine learning model. The api must load the model from this path
- `tests/`: to test the api services
- `app/`: contains the app related files. This app follows an N-layer structure where the layers are:
    - `models`: contains the models and schemas used by the app.
    - `services`: contains the classifier service which exposes a function to classify an image
    - `app.py`: create the app and define the services as endpoints

## Adding new functionalities

To add a new functionality, expose it as an endpoint. To do so, you must:  
* register the endpoint in `app/app.py`
* create a new service in `app/services`
* import the service in `app/app.py` and call it in the endpoint definition
* if required, add any new model or schema in `app/models`

## Quickstart

```bash
# Clone the codebase
git clone git@github.com:Monadical-SAS/ML-take-home.git
cd ML-take-home

# Init the server
cd ml-server 
pipenv install
pipenv shell
python3 main.py 
```

To run the tests
```shell
# Running the tests
cd tests
pytest
```



