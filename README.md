# Autóbérlés

## Funkcionális követelmények:

**Vendég:**
* Vendégként szeretnénk az aktuális ajánlatok között böngészni.
* Vendégként szeretnénk megtekinteni, az autókat.
* Vendégként szeretnénk autót keresni.
* Vendégként szeretnénk regisztrálni az oldalra.

**Felhasználó:**
* Felhasználóként szeretnénk bejelentkezni az oldalra.
* Felhasználóként szeretném szerkeszteni a profilomat, pénzt feltölteni.
* Felhasználóként szeretnénk autót bérelni.

**Admin:**
* Adminként szeretnénk új atókat felvinni.
* Adminként szeretnénk jóváhagyni/törölni a rendeléseket.

## Nem funcionális követelmények
* Felhasználóbarát kinézet.
* Gyors működés.
* Biztonságos működés.

## Szerepkörök
* **Vendég:** Az autók böngészését, keresését végezheti.
* **Felhasználó:** A vendég szerepkörön túl az autók bérlését is kezdeményezheti, illetve a saját egyenlegét kezelheti.
* **Admin:** A felhasználó szerepkörén túl új autókat vihet fel az adatbázisba, jóváhagyhatja, illetve törölheti a leadott bérlésekre.

## Végpontok
```html
GET /: főoldal
GET /help: help oldal
GET /login: bejelentkező oldal
POST /login: bejelentkezési adatok felküldése
POST /register: regisztálás
GET /vehicle: autók listázása
POST /vehicle: autó létrehozása
GET /vehicles/new: új autó form
GET /rent: bérlések listázása
POST /rent: új bérlés
GET /rent/new: új bérlés form
GET /logout: kijelentkezés
```

## Adatmodell

![adatmodell](https://raw.githubusercontent.com/namisi/alkfejl_bead_2017/master/datamodell.png "adatmodell")
