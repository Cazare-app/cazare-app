# Usar a imagem oficial do JDK para rodar Kotlin
FROM openjdk:17-jdk-slim

# Definir o diretório de trabalho dentro do container
WORKDIR /app

# Copiar os arquivos de build do Gradle
COPY gradlew .
COPY gradle ./gradle

# Copiar os arquivos do projeto
COPY build.gradle.kts .
COPY settings.gradle.kts .
COPY src ./src

# Instalar dependências e compilar o projeto
RUN ./gradlew installDist

# Expõe a porta do Ktor (geralmente 8080)
EXPOSE 8080

# Comando para rodar o aplicativo
CMD ["./build/install/backEnd/bin/backend"] 
