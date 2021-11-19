FROM node:14-alpine

ARG WORKDIR=/var/allmywork

WORKDIR ${WORKDIR}

ENV TZ=America/Sao_Paulo

COPY . .

RUN npm ci
RUN npm cache clean --force

EXPOSE 3000

CMD ["npm", "run", "dev"]