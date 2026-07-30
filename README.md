WELCOME TO THE GOODIES PROJECT :

Project explanation:

Major changes are taking place in the army; due to budget cuts, the decision was made to eliminate "goodies" and cut back on the mess hall.
Fortunately, the resulting protests had an impact, and the Minister of the Interior decided to reverse course.
You are tasked with creating a system that: 1) allows for future changes of mind; 2) calculates the budget for each unit to track real-time spending; and 3) limits instances of overspending.

How to use Docker: I created an image named "goodies"; to build it, you need to run `docker-compose up --build`.

Database explanation:
There are 3 databases:
1/ MongoDB: stores the history of the Minister of the Interior's baffling decisions.
Table name: benefits
2/ Supabase: assigns a budget to each unit.
Table name: budget-allocation
3/ Supabase: handles transactions and links them to the specific unit.
Table name: spend-transaction

If things had been explained to me as clearly as they are in this README, I’d already be getting ready for Shabbat.

Explanation regarding the choice of database:

First, to understand my choice, it is necessary to grasp the difference between the two database options available to me (I will be working with cloud databases, not local ones):

- 1: MongoDB: This is a non-relational (NoSQL) database; it does not support foreign keys. Its greatest strength is flexibility: you do not need to define columns in advance, as the object being sent creates its own columns.
- 2: Supabase: Technically, this is a cloud-based SQL database with some unique features; it supports relational databases, but its tables have fixed columns.

Three tables need to be created:

- For the first one, given its characteristics and the need for flexibility, MongoDB is the ideal choice.
- The second and third tables are better suited to Supabase, given their fixed fields and implicit relationships.

These choices may change, but this is my initial impression.

scruture of database :
1- welfare-record : => mongodb

    id: ObjectId
    soldierId: number
    unit: string
    currentBenefitType: "giftCard" || "diningHall"
    history: BenefitPeriod[]

    description of object BenefitPeriod:
        {
            startDate: string // ISO date
            endDate: string || null // ISO date
            decisionReason: string
            budgetApproved: boolean
            benefitType: "giftCard" || "diningHall"
            details : {object} => if benefiType = giftCard => {
                cardProvider: string
                monthlyValue: number
                validMerchants : [string]
            }
            if = diningHall => {
                baseId: number
                kosherLevel: string
                mealTimes: [string]

            }
        }

2- table budget-allocation : => supabase

    id: int primary key
    unit: string
    benefitType : "giftCard" || "diningHall"
    month: string // format "YYYY-MM"
    allocatedAMount : int

3- table spend-transaction: => supabasse

    id: int primary key
    budget_id : foreign key budget-allocation id
    amount : int
    reason: sring || null
    createdAt : date

structure of require endpoints :

1/ POST /soldiers/:soldierId/benefits /completed

    Assigns a list of details to a specific soldier and stores the record in the history log (refer to the table for details).

2/ GET /soldiers/:soldierId/benefits /completed

    Retrieves all information for this soldier.

3/ PATCH /soldiers/:soldierId/benefits /completed

    Closes the current active period, opens a new one, and updates the `benefitType` as needed:
    `projetSecret`: If it is the first of the month and the total number of days since January 1st is a prime number, we assume the boss doesn't want the status to change.
    In this case, we return `reversed: true` and `reason: str` along with the soldier data (unchanged) and HTTP status 200; otherwise, we apply the change and return `reversed: false`.

4/ POST /budget /completed
if is already exits same unit+benefitType+month return 409 else 201 + new budget

5/ GET /budget / completed
query params optional: unit, benefitCard, month
output: 200 and an array of allocations, each will the actual spent amount computed from its transactions:
id, unit, benefitType, month, allocateAmount, spentAmount => sum of all its transactions and remainingamount

6/ GET /budget/:id/transactions /completed
array of all spend transaction belonging to this allocation, not found 404

7/ POST /budget/:id/spend /completed
create a new spend transaction qith the allocation
requirement:

Regarding the overflow, it works like this:

--> server.js -> routes -> schema -> controller -> service -> repositorie -> db

Regarding the tests:
I don't have time to test everything, so I'll focus on doing one of each type—specifically:

utils
repo
controller
and service

Update: I don't know how to write controller and service tests and repo ; I'm trying, but I can't get it to work. I need time to learn—I've been at it for three hours and I just don't understand how to do it.
