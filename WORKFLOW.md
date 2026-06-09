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
Buka GitHub.com → repo → **Pull Requests** → **New Pull Request**
- base: main ← compare: Wega (atau ibeng)
- klik **Create Pull Request** → **Merge Pull Request**

## Biar aman:
1. Sebelum coding: selalu pull + merge main dulu
2. Jangan kerja di branch main, pake branch masing-masing
3. Kalo bingung error, tinggal baca pesan errornya atau tanya
