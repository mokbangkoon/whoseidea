#/bin/env bash
echo 'drop database whoseidea' | mysql -u root -p1234 whoseidea
echo 'create database whoseidea' | mysql -u root -p1234 mysql
(
    cd whoseidea/server/
    rm -rf prisma/migrations/*
    npx prisma migrate dev --name create_categories
)
cat <<\dummy-data | mysql -u root -p1234 whoseidea
-- users
INSERT INTO Users VALUES( null,"user1","password1","user1@mail.com","user1 profile");
INSERT INTO Users VALUES( null,"user2","password2","user2@mail.com","user2 profile");

-- posts
INSERT INTO Posts VALUES( null,1,"user1 post title1","/image1.png","1","1","user1 post context1","2022-04-11 12:59:59");
INSERT INTO Posts VALUES( null,2,"user2 post title1","/image2.png","2","2","user2 post context1","2022-04-11 12:59:59");

-- comments
INSERT INTO Comments VALUES( null,"user1 comments1",1,1);
INSERT INTO Comments VALUES( null,"user2 comments1",2,2);

-- likes
INSERT INTO Likes VALUES( null,1,1);
INSERT INTO Likes VALUES( null,2,2);

-- message
INSERT INTO Message VALUES( null,1,"user1 message1");
INSERT INTO Message VALUES( null,2,"user2 message1");
dummy-data
