# Interrogation Angular

Une fois votre devoir terminer, envoyer le moi par mail à l'adresse : ange.picard@pm.me.

**PENSEZ BIEN A SUPRRIMER LE DOSSIER .git ET node_modules**

> Pas la peine de faire de CSS, uniquement l'aspect fonctionnel sera pris en compte.

## Informations

Nom:   
Prenom:  

## Question ouvertes

Merci de répondre avec vos mots, même s'ils sont inexactes, je veux voir que vous avez compris, pas que vous savez faire un copier-coller.

### Qu'est qu'Angular et quel est son intérêt ?

```
Votre réponse
```

### Qu'est-ce-qu'un composant

```
Votre réponse
```

### Comment est découper un composant dans Angular ?

```
Votre réponse
```

### Pourquoi vaut-il mieux faire de petit composant ?

```
Votre réponse
```

### A quoi sert un service ?

```
Votre réponse
```

### Qu'est-ce-qu'un observable, et quel est son intérêt ?

```
Votre réponse
```

## Exercice 1

- Créer un nouveau projet Angular
- Dans le AppComponent
    - Ajouter un input
    - Ajouter un span
    - Faire en sorte que quand l'utilisateur entre du contenu dans l'input, il soit également écrit dans le span. On voit la même chose dans le span et dans l'input.
    - Ajouter un bouton permettant de vider le contenu de l'input et du span
- Créer un composant ListComponent
    - L'ajouter dans le template du AppComponent
    - Afficher la liste qui suit dans ListComponent
        - ['Jean', 'Jacques', 'Martin']
- Ajouter un bouton "CACHER" dans le AppComponent
    - A chaque click, cacher ou afficher ListComponent

## Exercice 2

Cette partie de l'interrogation porte sur le projet PokeAdopt.

Pour l'instant l'application n'affiche que la première page de la liste de pokemon l'API.

- Ajouter un bouton précédent et suivant en haut de la liste
- Quand on clique sur précédent ou suivant, afficher la page précédente ou suivante de l'API
- Bonus: Griser le bouton précédent s'il n'y a pas de page précédente
- Bonus: Afficher le numéro de page entre les deux boutons (Page 1 / XXX)