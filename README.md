# This will be the guide to all the endpoints throughout the backend API

**If you have any questions with various requests/calls, feel free to reach out** 

- REGISTER
.post -> 'api/auth/register'
* Required fields
    - [] Role: 1 -> Fundraiser, 2 -> Funder
    - [] ID: Integer, provided by the API, PK
    - [] First_Name: String, required
    - [] Last_Name: String, required
    - [] Email: String, required
    - [] Username: String, required
    - [] Password: String, required
    
- LOGIN
.post -> 'api/auth/login'

- VIEW/ADD PROJECTS (As a 'Fundraiser')
.get/.post -> 'api/auth/fundraiser'
* You will be able to view projects you have created, as well as create new projects

- VIEW PROJECTS (As a 'Funder')
.get -> 'api/auth/funder'
* This will be where you request to view the dashboard, returns all available projects
