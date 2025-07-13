# -------- Stage 1: Build with Maven --------
FROM maven:3.9.4-eclipse-temurin-17 AS build

WORKDIR /app

COPY pom.xml .
RUN mvn dependency:go-offline

COPY . .

RUN mvn clean package -DskipTests

# -------- Stage 2: Run with Jetty --------
FROM eclipse-temurin:17-jdk

ENV JETTY_VERSION=11.0.14
ENV JETTY_HOME=/opt/jetty

# Install Jetty
RUN apt-get update && apt-get install -y wget && \
    wget https://repo1.maven.org/maven2/org/eclipse/jetty/jetty-distribution/${JETTY_VERSION}/jetty-distribution-${JETTY_VERSION}.tar.gz && \
    tar -xzf jetty-distribution-${JETTY_VERSION}.tar.gz && \
    mv jetty-distribution-${JETTY_VERSION} $JETTY_HOME && \
    rm jetty-distribution-${JETTY_VERSION}.tar.gz

# Set up base
RUN mkdir /jetty-base
WORKDIR /jetty-base

RUN java -jar $JETTY_HOME/start.jar --add-module=webapp

# Copy WAR file from build stage
COPY --from=build /app/target/*.war ./webapps/ROOT.war

EXPOSE 8080

CMD ["java", "-jar", "/opt/jetty/start.jar"]
