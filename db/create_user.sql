INSERT INTO users
(username,password,profile_pic)
VALUES
(${username},${password},${profilePic})
RETURNING *;