# Background
HW3 for Software Engineering at Wesleyan University

# Installation
To run this project, you need to have Python 3+ and npm (from Node.js) installed.
Then, clone this project with the following command:
```bash
git clone https://github.com/lmorril/assignment3.git <local directory of your choice>
```

# Running the App

## 1. Start Virtual Enviroment
In your terminal, change the current working directory to <local directory of your choice> and run:
```bash
source django-react/bin/activate
```

## 2. Run the Backend
```bash
cd backend
python3 manage.py runserver
```

### View the APIs:
For the database of Users visit url:
http://127.0.0.1:8000/api/users/

For Ratings:
http://127.0.0.1:8000/api/ratings/

Here you can do GET/POST requests.

For PUT request go to the ratings url, go to the url above, but put the id of the entry to be changed at the end, for example:
http://127.0.0.1:8000/api/ratings/1/

### Dependencies

The dependencies should be installed on the virtual environment, but just in case here's what you need for the backend:
```bash
pip3 install djangorestFramework django-cors-headers
```

## 3. Running the Frontend

### While the backend is still running, start the frontend as follows (in another terminal for example):
```bash
cd frontend
npm start
```

### Denpendencies
Every required should be installed in the virtual environment,
but just in case, here are the commands to get everything needed (as specified in package.json):
```bash
npm install
```
The home page should now load at http://localhost:3000/

## 4. Using the App

## Core Features:

### At (http://localhost:3000/)
  -Table of viewable ratings. Click on edit or delete to change the entries.

     -Edit: Re-enter the id and username, then change to the rating you want. After clicking save, reload the page to see your edited entry in the table
     -Delete: click delete to remove entry from the database

  -Add your new rating by enter your id, username, song, artist, and rating to create a new rating in the app. Ratings are only 1-5!

### At http://localhost:3000/search

  -Search the database for all entries of a certain artist. Type in the artist name and find past ratings for each of their songs

### At http://localhost:3000/stats

  - Get summary stats of the ratings. Provided is average rating across all songs, average rating by artist, and average rating by song.
