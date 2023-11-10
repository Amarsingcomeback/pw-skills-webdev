NO-1 
    Q - What is database ? Explain with an example on why should we need databae.
    A - 
       What is database :-
       Database is an organized collection of structured information , datatypically stored electronically in a computer system.

       Database usually controlled by the DBMS means data base maneagement system.
       DBMS = DB(database)+MS(manegement stystem)

       Most common type of databae is usually operate in rows and coulmns of tableral format. then it help  easily accessed, managed, modified, updated,acsessed . 

       Most the database use SQL (structural Query language) Query language easy to campare then Javascript,java,c++,pythan ect..

       *Explain with an example on why should we need a database : - 
       example :
       Employee Database,Inventory Database,Library Database,Student Information System (SIS) Database,Social Media Database,Social Media Database

       why we need database :-
        Databases are crucial for organized data storage, efficient data retrieval, and ensuring data integrity, security, and scalability, making them essential for modern information management and business operations.

NO-2
    Q - Write a short note on file base storage system. Explain the major          challenges of a file based storage system ?
   A -
     Write a short note on file base storage system.

     -File storage, also called file-level or file-based storage, stores data in a hierarchical structure. The data is saved in files and folders, and presented to both the system storing it and the system retrieving it in the same format.
     - example of FBSS - microsoft windows , linux etc..
    * - major challenges of a file based storage system have 
      no1 - redundancy :
            Redundancy is a kind of duplication that occurs if the same type of information exists in different locations.
      no2 - Accessibility:
            Accessing data in file management system is not an easy process. It is not convenient as it should be. Whenever a user needs to access an information using different approaches, they must execute a special program.
      no3 - Integrity:
            The data that is present on a file management system can get integrated. Meaning it is not correct and consistent. Most often this is caused in the presence of consistency constraints. Constraints are imposed by the programmers using programming codes. If the integrity continues, it can make the process of adding new constraints to be difficult.
     it have more challages face file base storage system .
    
NO-3
   Q - what is DBMS ? what was the need for DBMS ?
   A - DBMS - data base storage system 
     - Database Management Systems (DBMS) are software systems used to store, retrieve, and run queries on data. A DBMS serves as an interface between an end-user and a database, allowing users to create, read, update, and delete data in the database.
     - Database management systems can be classified based on a variety of criteria such as the data model, the database distribution, or user numbers. The most widely used types of DBMS software are relational, distributed, hierarchical, object-oriented, and network.
     - DBMS are classifiled in to 5 types that is 
       1- distributed database menegment system 
       2- hierarchical database menegment system
       3- network database menegment system
       4- relational databese menegment system 
       5 - object oriented database menegment system
      * Need for DBMS - 
    - A Data Base Management System is a system software for easy, efficient and reliable data processing and management.
    - DBMS allow users to organize large amounts of data in a structured and systematic way. Data is organized into tables, fields, and records, making it easy to manage, store, and retrieve information.

NO-4 
   Q - Explain 5 chalanges of file base storage system which was tackled by DBMS.
   A - file base storage system which have defance more chalanges
    1- redundancy :
            Redundancy is a kind of duplication that occurs if the same type of information exists in different locations.
    2- Accessibility:
            Accessing data in file management system is not an easy process. It is not convenient as it should be. Whenever a user needs to access an information using different approaches, they must execute a special program.
    3- Integrity:
            The data that is present on a file management system can get integrated. Meaning it is not correct and consistent. Most often this is caused in the presence of consistency constraints. Constraints are imposed by the programmers using programming codes. If the integrity continues, it can make the process of adding new constraints to be difficult.
    4- Security:
            Traditional file organization has security advantages over electronic filing, but it also has its disadvantages. Electronic files are usually accessible on a network, which means it's possible for an unauthorized person to gain access to electronic data over the Internet through hacking methods. Electronic data can also be damaged by software security problems like computer viruses. On the other hand, paper files can be lost in fires and floods, but electronic data is easy to backup in multiple locations, reducing the potential for permanent data loss.
    5- Complexity:
            A traditional file approach is less complex than electronic systems, which can make it easier for untrained people to access and manipulate data. Anyone can look through alphabetized filing cabinets to find a file. Locating and manipulating an electronic database information may require technical training, and user error can result in unintended alterations or data loss.

NO-5
   Q - List out the different types of clasificationin DBMS and explian them in depth.
   A - Database management systems can be classified based on a variety of criteria such as the data model, the database distribution, or user numbers. The most widely used types of DBMS software are relational, distributed, hierarchical, object-oriented, and network.
     - DBMS are classifiled in to 5 types that is 
       1- distributed database menegment system 
       2- hierarchical database menegment system
       3- network database menegment system
       4- relational databese menegment system 
       5 - object oriented database menegment system

       1. A distributed database management system (DDBMS) is a set of multiple, logically interrelated databases distributed over a network. They provide a mechanism that makes the distribution of data transparent to users.
       2.A hierarchical database is a data model in which data is stored in the form of records and organized into a tree-like structure, or parent-child structure, in which one parent node can have many child nodes connected through links.
       3.A network database is a type of database model wherein multiple member records or files can be linked to multiple owner files and vice versa. The model can be viewed as an upside-down tree where each member information is the branch linked to the owner, which is the bottom of the tree. Essentially, relationships are in a net-like form where a single element can point to multiple data elements and can itself be pointed to by multiple data elements.
       4.A relational database management system (RDBMS) is a database that stores information in the form of tables called relations. These tables include numerous rows and columns, often called records and fields. Each record typically contains its own unique ID called a key. An RDBMS may include millions of rows. The columns often consist of one type of data, such as names and numbers, that contain attributes of the records. Most modern businesses, IT systems and other programs often use RDBMSs because they can use the data in relation to other stored datasets.
       5.Object-oriented databases emerged to meet the need of coupling object-oriented programming languages with a database. Although object-oriented databases have been around since the late 1970s, they have seen relatively low adoption in recent decades with the growing prevalence of functional programming languages and relational databases. But a growing user community is awakening to the ability of object-oriented databases to deliver fast queries with lighter code.

NO-6
   Q - What is significace of data modeling and explian the type of data modeling.

   A - Data modeling (data modelling) is the process of creating a data model for the data to be stored in a database. This data model is a conceptual representation of Data objects, the associations between different data objects, and the rules.
   - Types of Data Models in DBMS
Types of Data Models: There are mainly three different types of data models: conceptual data models, logical data models, and physical data models, and each one has a specific purpose. The data models are used to represent the data and how it is stored in the database and to set the relationship between data items.

Conceptual Data Model: This Data Model defines WHAT the system contains. This model is typically created by Business stakeholders and Data Architects. The purpose is to organize, scope and define business concepts and rules.
Logical Data Model: Defines HOW the system should be implemented regardless of the DBMS. This model is typically created by Data Architects and Business Analysts. The purpose is to developed technical map of rules and data structures.
Physical Data Model: This Data Model describes HOW the system will be implemented using a specific DBMS system. This model is typically created by DBA and developers. The purpose is actual implementation of the database.

NO-7
   Q - Explain 3 schema a architecture along with  its advantages.
   A - The 3-schema architecture is a fundamental concept in database design and management, providing a structured approach to organizing data within a database system. It comprises three distinct schemas: External Schema, Conceptual Schema, and Internal Schema, each serving a unique purpose and offering several advantages.

External Schema:

Purpose: Represents the user interface and how data is viewed by end-users and applications.
Advantages:
Data Abstraction: Hides the complexity of the underlying data structure, allowing for user-friendly data access.
Security: Enforces access control to ensure that users only access authorized data.
Flexibility: Permits customization of schemas for different user groups or applications.
Conceptual Schema:

Purpose: Provides an abstract and unified view of the entire database system, independent of specific users or applications.
Advantages:
Data Integration: Centralizes and standardizes data, enabling integration from various external schemas.
Data Independence: Facilitates changes in external or internal schemas without affecting the overall database structure.
Database Design: Serves as a blueprint for efficient database design and management.
Internal Schema:

Purpose: Defines how data is physically stored and organized within the database management system.
Advantages:
Performance Optimization: Allows administrators to optimize data storage and access for efficient query processing.
Data Security: Enhances data security through access control at a lower level.
Maintenance: Provides an abstraction layer for database maintenance and storage changes.

        

   