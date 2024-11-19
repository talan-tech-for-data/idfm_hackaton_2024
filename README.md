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

## To setup this project in Onyxia's VSCode
- Run:
```sh
sh -c "$(curl --location https://taskfile.dev/install.sh)" -- -d -b ~/.local/bin

git clone https://github.com/talan-tech-for-data/idfm_hackaton_2024.git .

sudo apt-get update -y
sudo apt-get install -y pipx

pipx install poetry

poetry config virtualenvs.in-project true

poetry install

```




## Other Notes
https://openwebui.com/assets/files/whitepaper.pdf

### Dev container extension won't work, because their current vscode implementation has Open Remote SSH off
![alt text](image-1.png)