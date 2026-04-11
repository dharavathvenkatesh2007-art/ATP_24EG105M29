1.Generate package.json
2.Create express server
3.Instal mongoose and connect to MangoDB 

         REST API -----mongoDb native driver->DB server
         REST API -----Mongoose ODM tool ->DB server

4.Build UESR REST API  
                -Create user
                -read user
                -read user by id
                -update user
                -delete user by id

5.Create Schema and Modal of Resource(User)

        Schema


6.Define routes
   --Create APIs Folder
        --- create USERApi.js




Create Product REST API with below features
1. Product document structure
        a.productId (required)
        b.productName(required)
        c.price(required, min price 10000 and max price 50000)
        d.brand(required)
        
2. REST API with below operations
        a. Create product
        b. Read all products
        c. Read a product by productId
        d. Update a product by productId
        e. Delete a product by productId



####user Authentication(Login)
    _Submit creadentitals , get tokens

    req->public routs(by any one)
    req->middleWare->protected rouer(  by Authentication)

    ****Not Authorised