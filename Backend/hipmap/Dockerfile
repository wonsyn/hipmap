FROM openjdk:11
WORKDIR /var/jenkins_home/workspace/hipmapdpl/Backend/hipmap
#VOLUME /tmp
#ARG JAR_FILE=build/libs/*.jar
#COPY {JAR_FILE} app.jar
RUN ln -snf /usr/share/zoneinfo/Asia/Seoul /etc/localtime
COPY build/libs/hipmap-0.0.1-SNAPSHOT.jar app.jar
ENTRYPOINT ["java","-jar","app.jar"]