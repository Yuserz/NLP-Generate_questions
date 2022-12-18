# Requirements, Usage and Installation
<h1>## Backend - Flask</h1>

### 1. Access backend and create virtual Environtment
   
```cd backend```

# Proceed to Number #2 when "venv" folder is already created  
```python -m venv venv```

### if missing torch

```pip3 install torch torchvision torchaudio --extra-index-url https://download.pytorch.org/whl/cu11 ```

  
### 2 .Activate the environment

```venv/Scripts/activate```


### 3 .Install the requirements

```pip install -r requirements.txt```

### 4. Run the application 
###First time setup
```
flask db init
flask db migrate
flask db upgrade

```

###Done setup

```flask run```

-------------------------------------------------------------------------------------------------------------------
<h1>## Frontend - React</h1>
### Installation

You just need to install the packages listed on package.json, on the frontend folder.

```
cd frontend
npm install
```

`npm start`




