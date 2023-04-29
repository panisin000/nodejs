FROM node:16 as builder
WORKDIR /app
COPY package.json /app/package.json
COPY package-lock.json /app/package-lock.json
COPY . /app/
RUN npm insatll && npx prisma generate
RUN npm run build



FROM node:16 as app
WORKDIR /app
COPY --from=builder /app/node_modules /app/node_modules
COPY --from=builder /app/build /app/build
RUN echo $(ls -a /app)
CMD [ "node","build/server.js" ]