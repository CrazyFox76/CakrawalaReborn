# Panduan Git buat 2 Orang

## Setiap mau mulai ngoding (WAJIB!):
```bash
git checkout main
git pull
git checkout Wega   # atau ibeng
git merge main
```

## Abis selesai ngoding:
```bash
git add .
git commit -m "tulis pesan"
git push origin Wega   # atau ibeng
```

## Kalo mau gabung ke main (gabungin hasil kerja):
```bash
git checkout main
git pull origin main
git merge Wega              # ganti sesuai branch lu
git push origin main
```

## Biar aman:
1. Sebelum coding: selalu pull + merge main dulu
2. Jangan kerja di branch main, pake branch masing-masing
3. Kalo bingung error, tinggal baca pesan errornya atau tanya
