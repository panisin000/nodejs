npm init -y
npm i express
npm i -D prettier  //-D = dev dependency
npm i -D eslint
npm i -D eslint-config-prettier
npm i -D typescript @types/node ts-node ts-node-dev @typescript-eslint/parser @typescript-eslint/eslint-plugin  //run server ts & recompile restart 
npx tsc --init 
npm i -D @types/express
npm i prisma
npx prisma init

create db 
docker-compose.yml
npx prisma migrate dev --name user 


npx prisma migrate reset //reset db

setting vs code
- format on save
- require config => add file .prettierrc.js => module.exports = {};
add prisma plugin
add in package.json => 
"format": "prettier --write \"./src/**/*.{js,ts}\"",
"lint": "eslint \"./src/**/*.{js,ts}\" --quiet",
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

