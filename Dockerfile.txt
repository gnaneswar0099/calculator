# ------------ Stage 1: Build the project with Maven ------------
FROM maven:3.9.4-eclipse-temurin-17 AS build

WORKDIR /app

# Copy and download dependencies
COPY pom.xml .
RUN mvn dependency:go-offline

# Copy source and build
COPY . .
RUN mvn clean package -DskipTests

# ------------ Stage 2: Run using Jetty ------------
FROM jetty:11.0.14-jdk17

# Copy the generated WAR from build stage to Jetty's webapps directory
COPY --from=build /app/target/*.war /var/lib/jetty/webapps/ROOT.war

EXPOSE 8080

# Jetty will automatically run the WAR
