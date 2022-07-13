FROM node:10-alpine
WORKDIR /app

# Copy app files into container
COPY . /app

#CMD docker container stop scaffold2
#CMD docker container rm scaffold2
# Install node packages
RUN npm install

CMD npm start
# CMD npm run dev
EXPOSE 3000
 
