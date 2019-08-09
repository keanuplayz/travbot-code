FROM mcr.microsoft.com/dotnet/core/runtime:2.2
COPY app/ app/
ENTRYPOINT ["dotnet", "app/KeanuBot.dll"]