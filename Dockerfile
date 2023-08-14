# Escolha uma imagem base. Neste caso, será a imagem oficial do Node.js
FROM node:14

# Defina o diretório de trabalho no contêiner
WORKDIR /app

# Copie o arquivo package.json e package-lock.json (se disponível)
COPY package*.json ./

# Instale as dependências do projeto
RUN npm install

# Copie os arquivos do projeto para o diretório de trabalho no contêiner
COPY . .

# Exponha a porta que o app vai rodar
EXPOSE 5173


# Comando para iniciar o app
CMD ["npm", "run", "dev"]
