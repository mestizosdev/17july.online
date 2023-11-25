# 17july.online
Cloud app

## Software
- Maria DB -> https://mariadb.org/download
- Node -> https://nodejs.org/en
- Git -> https://git-scm.com/downloads
- Visual Studio Code -> https://code.visualstudio.com/
- Insomnia -> https://insomnia.rest/download

## Create backend project
```
mkdir backend
```
```
cd backend
```
```
node -v
```
```
npm --version
```
```
npm init
```
## Create frontend project
- Vite

## Access Read to .pem file
```
icacls .\Jorge.pem /reset
icacls .\Jorge.pem /grant:r "$($env:username):(r)"
icacls .\Jorge.pem /inheritance:r
```
