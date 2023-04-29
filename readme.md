npm init -y
npm i express
npm i -D prettier //-D = dev dependency
npm i -D eslint
npm i -D eslint-config-prettier
npm i -D typescript @types/node ts-node ts-node-dev @typescript-eslint/parser @typescript-eslint/eslint-plugin //run server ts & recompile restart
npx tsc --init
npm i -D @types/express
npm i prisma
npx prisma init

npx ts-node prisma-test.ts

middleware => `ทำงานที่เป็น common ทำงานคล้ายกับ handler เลย แต่ handler มักจะเป็นตัวสุดท้ายของ business proj

npx prisma format

npx prisma migrate dev

npx prisma migrate reset //-> reset db

create db
docker-compose.yml
npx prisma migrate dev --name user

npx prisma migrate reset //reset db

setting vs code

- format on save
- require config => add file .prettierrc.js => module.exports = {};
  add prisma plugin
  add in package.json =>
  "format": "prettier --write \"./src/**/\*.{js,ts}\"",
  "lint": "eslint \"./src/**/\*.{js,ts}\" --quiet",
  "dev":"ts-node-dev src/server.ts",

npm run format
npm run dev //=> run server ts & recompile restart

// eslint // check styling => check syntax
add file .eslintrc.js =>
module.exports = {
extends: [
"eslint:recommended",
"plugin:@typescript-eslint/recommended",
"plugin:@typescript-eslint/recommended-requiring-type-checking",
"prettier",
],
parser: "@typescript-eslint/parser",
plugins: ["@typescript-eslint"],
parserOptions: {
ecmaVersion: 2022,
sourceType: "module",
project: "./tsconfig.json",
},
env: {
es6: true,
node: true,
},
};

CORS (Cross Origin Resourse Sharing)

HTTP Node Server
Port
Handler

Express
Route = Method + Path + Query
GET, POST, PUT, DELETE
READ,CREATE, UPDATE, DELETE
Handler

Database
Prisma Migrate
Model Schema
database connection
Query
Client Generation (TypeSafe)

class is instant of course

Encode / Decode = Data transform แปลงไป-กลับได้

Encypt/Decypt = Data transform + secret key แปลงไป-กลับได้

Hash = Data transform + secret key แปลงกลับไม่ได้

JWT = Encode+Hash

Http Server = Stateless

Cookies แยก User
user1
user2
user3

Request -> Server -> Generate -> Set Cookie Header -> Response

Request -> Server -> See Cookie -> Response Difference
(Browser check Cookie?
Yes: แปะ Header ไปด้วย
No: ไม่ทำอะไร)

Cookie Problem
Too easy to guess => 1,2,3,4 => solve => random
MD5 => Too small => increase to 32 byte string == token/session

hash(ABC + Key) = XYZ
ABC ให้ user ไป
XYZ เก็บไว้

hash(??? + Key) == XYZ => correct

JWT

HMACSha256( Base64URLEncode(header) +"."+Base64URLEncode(Payload)+Base64URLEncode(header) +"."+Base64URLEncode(Payload))
Hash Mac

npm i jsonwebtoken
npm i bcrypt

http status code
200 -> ok
201 -> Created
202 -> Created without body
400 -> Client Error
401 -> Unathotize
403 -> Prohibit
404 -> Not found
422 -> Invaid Body
500 -> Server Error

npm i zod

## Error handling

npm i express-async-handler => Error handling ไม่ต้อง try catch แทนที่ try catch

- ไม่ต้อง focus unexpected error
- ต้องมี error เหมืิอนกันหมด

## logging request

npm i morgan
npm i @types/morgan -D

## logging business logic wa

npm install winston

## testing
automated 
npm i -D jest
npm i -D @types/jest
npm i -D supertest
npm i -D  @types/supertest
npm install -D @jest/globals
npm i -D supertest @types/supertest jest @types/jest ts-jest
npx ts-jest config:init

npm run test  => npm test -- --runInBand

## deploy
npm i pm2 -g
pm2 start server.js --name course-api


 docker build -t c0

