## CountryList

# Set up rooting des deux pages 
1.ng new countryList
2.ng g c pays && ng g c jokes
3.import des pages dans src/app/app-routing.moudle.ts
4. Ajout des routes suivantes dans src/app/app-routing.moudle.ts
 {path: 'pays', component: PaysComponent},
  {path: 'jokes', component: JokesComponent},

# Page pays
1. créer un service pour appeler l'api suivante : https://restcountries.com/v3.1/all 
voir la doc => https://angular.io/guide/http
Ensuite taper la commande suivante : ng generate service pays. 
On importe puis on injecte le Http Client dans le constructeur de service src/app/pays.service.ts voir la doc suivante : https://angular.io/guide/rx-library
Ensuite on importe le pays service dans la page pays