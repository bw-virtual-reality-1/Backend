# This will be the guide to all the endpoints throughout the backend API

**If you have any questions with various requests/calls, feel free to reach out** 

- REGISTER:
.post -> 'api/register'
* Required fields
    - [] role: 1 -> Fundraiser, 2 -> Funder
    - [] ID: Integer, provided by the API, PK
    - [] firstName: String, required
    - [] lastName: String, required
    - [] email: String, required
    - [] username: String, required
    - [] password: String, required

- LOGIN:
.post -> 'api/login'
(send 'username' and 'password')

- VIEW/ADD/EDIT PROJECTS (As a 'Fundraiser'):
.get/.post/.put -> 'api/auth/fundraiser'
* You will be able to view projects you have created, as well as create new projects

- VIEW PROJECTS (As a 'Funder'):
.get -> 'api/auth/funder'
* This will be where you request to view the dashboard, returns all available projects

- VIEW PROJECTS (Unauthorized)
.get -> 'api/projects
