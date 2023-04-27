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
