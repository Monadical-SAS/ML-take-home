# Morpheus - Stable Diffusion backend

Web application to generate artwork using image edition and stable diffusion models

## Quickstart

```bash
# Clone the codebase
git clone git@github.com:Monadical-SAS/Morpheus.git
cd Morpheus
```

Download the [firebase admin sdk json file](https://drive.google.com/file/d/1wu9RsFPX2pnWuuaByIlWi1Ns4K9iz3Pn/view?usp=share_link) 
and move it to the root directory, then init the server.

```shell
# Init the server
cd morpheus-server 
pipenv install
pipenv shell
python3 main.py 
```

To run the tests
```shell
# Update app/integrations/firebase.py
nano app/integrations/firebase.py
# change line 5 `("../firebase-admin-sdk.json")`

# Running the tests
pytest
```



