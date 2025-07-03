# Tahap 1: Build
# Menggunakan base image Node.js untuk menginstal dependencies dan membangun proyek TypeScript.
FROM node:20-alpine AS builder

# Menetapkan direktori kerja di dalam container
WORKDIR /app

# Menyalin package.json dan package-lock.json
COPY package*.json ./

# Menginstal dependencies proyek
RUN npm install

# Menyalin seluruh kode sumber proyek
COPY . .

# Mengenerate Prisma Client
RUN npx prisma generate

# Mengompilasi kode TypeScript ke JavaScript
RUN npm run build

# Menghapus devDependencies untuk persiapan tahap produksi
RUN npm prune --production


# Tahap 2: Produksi
# Menggunakan base image Node.js yang lebih ringan untuk produksi.
FROM node:20-alpine AS production

# Menetapkan direktori kerja
WORKDIR /app

# Menyalin package.json dan package-lock.json dari tahap builder
COPY --from=builder /app/package*.json ./

# Menyalin node_modules yang sudah di-prune dari tahap builder
COPY --from=builder /app/node_modules ./node_modules

# Menyalin hasil build (direktori dist) dari tahap builder
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/.env ./.env
# Menyalin direktori prisma yang berisi schema dan hasil generate dari tahap builder
COPY --from=builder /app/prisma ./prisma

# Mengekspos port yang akan digunakan oleh aplikasi
EXPOSE 3000

# Perintah untuk menjalankan aplikasi
CMD ["node", "dist/api/index.js"]
