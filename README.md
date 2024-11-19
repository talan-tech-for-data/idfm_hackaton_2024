# idfm_hackaton_2024

## Install Windmill
Make sure Docker is started:

Mac: open /Applications/Docker.app
Windows: start docker
Linux: sudo systemctl start docker
and type the following commands:

```sh
curl https://raw.githubusercontent.com/windmill-labs/windmill/main/docker-compose.yml -o docker-compose.yml
curl https://raw.githubusercontent.com/windmill-labs/windmill/main/Caddyfile -o Caddyfile
curl https://raw.githubusercontent.com/windmill-labs/windmill/main/.env -o .env

#docker compose up -d

docker compose -f windmill-docker-compose.yml up -d
```

Go to http://localhost on port 80
- _(Or equivalent in github devcontainer)_
![alt text](image.png)

Then you can login for the first time.







## Other Notes
https://openwebui.com/assets/files/whitepaper.pdf
