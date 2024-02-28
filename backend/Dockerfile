FROM mcr.microsoft.com/dotnet/sdk:8.0-alpine AS build-env
WORKDIR /src

COPY ["DataAccess/DataAccess.csproj", "DataAccess/"]
COPY ["Domain/Domain.csproj", "Domain/"]
COPY ["IoCConfig/IoCConfig.csproj", "IoCConfig/"]
COPY ["Service/Service.csproj", "Service/"]
COPY ["WebApi/WebApi.csproj", "WebApi/"]

RUN dotnet restore "WebApi/WebApi.csproj"

COPY . .

WORKDIR "/src/WebApi"

RUN dotnet build "WebApi.csproj" -c Release -o /app

RUN dotnet publish "WebApi.csproj" -c Release -o /app

FROM mcr.microsoft.com/dotnet/aspnet:8.0-alpine

WORKDIR "/app"

COPY --from=build-env /app .

ENTRYPOINT ["dotnet", "WebApi.dll"]
