WELCOME TO THE GOODIES PROJECT :

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

1/ POST /soldiers/:soldierId/benefits

2/ GET /soldiers/:soldierId/benefits

3/ PATCH /soldiers/:soldierId/benefits

4/ POST /budget

5/ GET /budget

6/ GET /budget/:id/transactions

7/ POST /budget/:id/spend
