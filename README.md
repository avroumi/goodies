WELCOME TO THE GOODIES PROJECT :

Explanation regarding the choice of database:

First, to understand my choice, it is necessary to grasp the difference between the two database options available to me (I will be working with cloud databases, not local ones):

- 1: MongoDB: This is a non-relational (NoSQL) database; it does not support foreign keys. Its greatest strength is flexibility: you do not need to define columns in advance, as the object being sent creates its own columns.
- 2: Supabase: Technically, this is a cloud-based SQL database with some unique features; it supports relational databases, but its tables have fixed columns.

Three tables need to be created:

- For the first one, given its characteristics and the need for flexibility, MongoDB is the ideal choice.
- The second and third tables are better suited to Supabase, given their fixed fields and implicit relationships.

These choices may change, but this is my initial impression.
