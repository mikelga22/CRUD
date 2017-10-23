# CRUD
CRUD built in nodjs and mongo whith docker implementation.

To test it, follow next steps:

  0. Requisites:
    - Linux or Mac
    - Docker and docker compose installed
  1. Clone the repository in your pc.
  2. Open a terminal and move to the project's folder.
  3. nano app.js, and change the line <<app.listen(3000);>> to <<app.listen(3000,"your_ip");>> and save.
  4. docker-compose build
  5. docker-compose up
  6. Now you have the CRUD server running, conected to mongodb
