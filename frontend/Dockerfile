# FROM node:16.15.0 as build-stage
# WORKDIR /var/jenkins_home/workspace/hipmapdpl/Frontend/hipmap

# COPY package*.json ./
# RUN npm install
# COPY ./build ./build
# RUN npm run build
# FROM nginx:stable-alpine as production-stage

# COPY --from=build-stage /var/jenkins_home/workspace/deploytest/testproject_react/build /usr/share/nginx/html
# #COPY --from=build-stage /var/jenkins_home/workspace/deploytest/testproject_react/deploy_conf/nginx.conf /etc/nginx/conf.d/default.conf
# EXPOSE 80
# CMD ["nginx", "-g","daemon off;"]

FROM node:16.15.0 as build-stage
WORKDIR /var/jenkins_home/workspace/hipmapdpl/frontend
COPY package.json yarn.lock ./
RUN yarn
COPY . ./
RUN yarn install

COPY .env .
RUN pwd
COPY ./module/index.d.ts ./node_modules/react-full-page/lib/

RUN yarn build
#
WORKDIR /var/jenkins_home
RUN pwd
FROM nginx:stable-alpine as production-stage
COPY --from=build-stage /var/jenkins_home/workspace/hipmapdpl/frontend/build /usr/share/nginx/html
COPY --from=build-stage /var/jenkins_home/workspace/hipmapdpl/frontend/deploy_conf/nginx.conf /etc/nginx/conf.d/default.conf
# RUN mkdir /var/wwww
RUN pwd
COPY --from=build-stage /var/jenkins_home/ws2/certificate.crt /var
COPY --from=build-stage /var/jenkins_home/ws2/private.key /var
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]