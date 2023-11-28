FROM denoland/deno:alpine-1.37.0

EXPOSE 3000

WORKDIR /app

COPY . .

RUN deno cache app.js

CMD [ "run", "--allow-net", "--allow-read", "--watch", "--unstable", "app.js" ]