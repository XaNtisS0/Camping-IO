
## Quick start
1. Installation and prerequisites.
    The first thing to do is to clone the repository:

'''
$git clone https://github.com/XaNtisS0/Camping-IO.git
'''

Create a virtualenv environment to install dependencies in:

'''sh 
$ virtualenv env
'''

    Active it :

    On Linux/Mac
    '''sh
    source env/bin/activate
    '''

    On Windows
    '''sh
    .\env\Scripts\activate
    '''

    Then install the dependencies:
    '''sh
    (env)$ pip install -r requirements.txt
    '''

    Once 'pip' has finished downloading the dependecies:
    '''sh
    (env)$ cd server
    (env)$ python manage.py runserver
    '''
