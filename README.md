# Prekių sąrašas ir krepšelis

React Native namų darbas su Expo SDK 58, skirtas Android. Pradėjau nuo išvalyto Expo šablono.

Programėlėje rodomos trys prekės su nuotraukomis, kainomis ir kategorijomis. Paspaudus „Pridėti į krepšelį“, skaitiklis padidėja vienetu. Paspaudus krepšelio ikoną atsidaro langelis, kuriame galima išvalyti krepšelį.

## Paleidimas

```sh
npm install
npm start
```

Telefone per Expo Go, palaikantį SDK 58, nuskenuoti QR kodą. Telefonas ir kompiuteris turi būti tame pačiame Wi-Fi tinkle.

Android emuliatoriui: `npm run android`.

## Failai

- `src/app/App.tsx` – pagrindinis ekranas, `FlatList` ir krepšelio skaičius su `useState`.
- `src/components/ProductCard.tsx` – prekės kortelė, duomenis ir pridėjimo funkciją gauna per props.
- `src/components/CartInfo.tsx` – krepšelio skaitiklis ir išvalymo langelis.
- `src/data/products.ts` – prekių masyvas.
- `assets/images` – prekių nuotraukos.

Stilius generavome su AI pagalba.
