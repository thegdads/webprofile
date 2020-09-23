## Install CLI
Install mongodb realm CLI (Command Line Interface) dengan execute command ([realm cli])
```
npm install -g mongodb-realm-cli
```

atau jika anda menggunakan yarn bisa menggunakan command
```
yarn global add mongodb-realm-cli
```
---

## Membuat public dan private key

- Masuk ke `Access Manager` page

![access manager]

- Pilih tab `API Keys`

![api key tab]

- Pilih `Create API Key` lalu tekan **Next**

![create api key]

- Copy `Private Key` dan simpan di tempat yang **AMAN**,
  Karena private key ini hanya muncul di halaman ini,
  tidak bisa di panggil lagi dan di munculkan lagi.

![copy private key]

---

## Login mongodb realm CLI

- Login menggunakan api key dan private api key

  ```
  realm-cli login \
  --api-key="<my api key>" \
  --private-api-key="<my private api key>"
  ```

  > Jika ingin logout bisa menggunakan command `realm-cli logout`

  > jika ingin lihat sedang login atau logout bisa menggunakan
  > command `realm-cli whoami`

---

## Export mongodb realm app

- Dapatkan **APP ID**

![app id]

- Export mongodb realm app menggunakan command

```
realm-cli export \
--app-id=source-app-id \
--output=path/to/exported/app/dir
```

- Export app config juga bisa dilakukan dengan GUI

![export gui]

---

## Import mongodb realm app backup

> Import membutuhkan credential, jika sudah logout atau belum login,
> harus login dulu sebelum execute command import

- Command untuk execute import konfigurasi

```
realm-cli import \
  --app-id=destination-app-id \
  --path=./path/to/app/dir \
  --strategy=merge
```

> [Import strategy] name ada 3 (saat blog ini ditulis) :
> **merge**, **replace**, dan **replace by name**

- Jika ingin import ke destination berbeda,
  bisa update file `config.json`, line **app_default_domain**.
  Value-nya ganti dengan value dari app_default_domain destination.

> cara dapatkan **app_default_domain** destination, bisa dengan
> cara export dahulu destination app-nya,
> dan lihat file config.json.

---

## Error issue

- Saat execute diff / import dapat error

  > failed to diff app with currently deployed instance: error: cannot update field "app_default_domain"

  20200819 - Error ini terjadi karena file export (hasil backup) akan
  di import ke tujuan berbeda.

- Saat execute diff / import dapat error

  > failed to diff app with currently deployed instance: error: must provide an existing ID when attempting to update MongoDB Rules. Unable to locate ID: '5f36546b3dd179a234a4bffd'. If you are attempting to create new MongoDB Rules, please ensure that you have removed the 'id' field from all new config files.

  20200819 - Berhubungan dengan parameter "--include-hosting" saat export config,
  Jika paramter tersebut tidak ada, maka hosting tidak ikut ter-backup, tapi diff / import tidak ada kendala
  20200923 - Ternyata filed `id` adalah variable reserved, jadi tidak boleh ada key field `id` di schema.

[realm cli]: https://docs.mongodb.com/realm/deploy/realm-cli-reference/
[access manager]: https://ik.imagekit.io/juncyboy/backup_restore_mongodb_realm_1_VzXjumvWYID.jpg
[api key tab]: https://ik.imagekit.io/juncyboy/thegdads/backup-restore-mongodb-realm-2_JCUmBvP8O.png
[create api key]: https://ik.imagekit.io/juncyboy/thegdads/backup-restore-mongodb-realm-3_a4dFk9ahz4.png
[copy private key]: https://ik.imagekit.io/juncyboy/thegdads/backup-restore-mongodb-realm-4_wxqVWR9nEbB.png
[app id]: https://ik.imagekit.io/juncyboy/thegdads/backup-restore-mongodb-realm-5_o7xBOIZJAHV.png
[import strategy]: https://docs.mongodb.com/realm/deploy/realm-cli-reference/#realm-import-strategies
[export gui]: https://ik.imagekit.io/juncyboy/thegdads/backup-restore-mongodb-realm-6_dZu-g2LLI.png
