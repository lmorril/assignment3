# assignment3
HW3 for Software Engineering at Wesleyan University

### How to Run the App:

## 1 Start Virtual Enviroment
```bash
source django-react/bin/activate
```

## 2 Run the Backend
```bash
cd backend
python3 manage.py runserver
```

# View the APIs:

For the database of Users visit url:
http://127.0.0.1:8000/api/users/

For Ratings:
http://127.0.0.1:8000/api/ratings/

Here you can do GET/POST requests.

For PUT request go to the ratings url, go to the url above, but put the id of the entry to be changed at the end, for example:
http://127.0.0.1:8000/api/ratings/1/

# Dependencies

The dependencies should be installed on the virtual environment, but just in case here's what you need for the backend:
```bash
pip3 install djangorestFramework django-cors-headers
```


## 3 Running the Frontend

# While the backend is still running, start the frontend as follows (in another terminal for example):
```bash
cd frontend
npm start
```

# Denpendencies
Every required should be installed in the virtual environment, but just in case, here are the commands to get everything needed:
```bash
npm add bootstap reactstap
npm add axios
npm install react-router-dom
```
The home page should now load at http://localhost:3000/

### Using the App

## Core Features

# At (http://localhost:3000/)
  -Table of viewable ratings. Click on edit or delete to change the entries.
     
     -Edit: Re-enter the id and username, then change to the rating you want. After clicking save, reload the page to see your edited entry in the table
     -Delete: click delete to remove entry from the database
  
  -Add your new rating
    -Enter your id, username, song, artist, and rating to create a new rating in the app. Ratings are only 1-5!
    
# At http://localhost:3000/search

  -Search the database for all entries of a certain artist. Type in the artist name and find past ratings for each of their songs
  
 # At http://localhost:3000/stats
 
  - Get summary stats of the ratings. Provided is average rating across all songs, average rating by artist, and average rating by song.


