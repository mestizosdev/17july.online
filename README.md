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
## Server EC2 (Ubuntu)
```
sudo apt update
```
```
sudo apt install nginx
```
### https://deb.nodesource.com/
```
sudo apt-get update && sudo apt-get install -y ca-certificates curl gnupg
curl -fsSL https://deb.nodesource.com/gpgkey/nodesource-repo.gpg.key | sudo gpg --dearmor -o /etc/apt/keyrings/nodesource.gpg
NODE_MAJOR=20
echo "deb [signed-by=/etc/apt/keyrings/nodesource.gpg] https://deb.nodesource.com/node_$NODE_MAJOR.x nodistro main" | sudo tee /etc/apt/sources.list.d/nodesource.list
sudo apt-get update && sudo apt-get install nodejs -y
```
### Create Service Systemctl
```
cd /etc/systemd/system
```
```
sudo touch hello.service
```
```
sudo nano hello.service
```
```
[Unit]
Description=Hello application

[Service]
User=ubuntu
ExecStart=/usr/bin/node /home/ubuntu/17july.online/backend/index.js
Restart=on-failure

[Install]
WantedBy=multi-user.target
```
```
sudo systemctl daemon-reload
```
```
systemctl start hello.service
```
```
systemctl status hello.service
```
