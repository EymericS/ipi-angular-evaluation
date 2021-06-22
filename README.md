# Interrogation Angular

Une fois votre devoir terminer, envoyer le moi par mail à l'adresse : ange.picard@pm.me.

**PENSEZ BIEN A SUPRRIMER LE DOSSIER .git ET node_modules**

> Pas la peine de faire de CSS, uniquement l'aspect fonctionnel sera pris en compte.

## Informations

Nom: **SERTGOZ**
Prenom: **Eymeric**

## Question ouvertes

Merci de répondre avec vos mots, même s'ils sont inexactes, je veux voir que vous avez compris, pas que vous savez faire un copier-coller.

### Qu'est qu'Angular et quel est son intérêt ?

```
Angular est un framework en TypeScript créé pas des équipes de Google.
Il permet de créer des Single Page Application : Le front est composé d'une seul page ou tout est géré pas le TypeScript ou une fois interprété JavaScript.
Angular suis une architecture Model Vue Controller.

Cependant nous avaons utilisé dans ce cours AngularJS, une version qui ne repose pas sur le concept de MVC mais de components.
```

### Qu'est-ce-qu'un composant

```
Un conponent est une class TypeScript propre à AngularJS servant a réprésernté / manipuler une portion de l'application / vue.
```

### Comment est découpé un composant dans Angular ?

```
Un compsant est composé d'une class TypeScript contenant des méthodes et des atributs ainsi que de la configuration propore à Angular.
Ils sont aussi composé d'une partie "template" contenant le code HTML/CSS/JS pour générer pour le composant.
```
### Pourquoi vaut-il mieux faire de petit composant ?

```
De multiple chose peuvent être fais dans un composant. L'idéal est donc de découpe ça maquette ne un maximum de components permettant de gardé une logic la moi complexe possible.
L'utilisation de component permet aussi de rendre sont code modulaire et réutilisable. En d'autre mot une scalabilité facilité.
```

### A quoi sert un service ?

```
Contrairement au composant qui utilise une porté local, les services permette la gestion et le partage de données entre composant.
```

### Qu'est-ce-qu'un observable, et quel est son intérêt ?

```
A l'instar des promesse en JavaScript Vanilla il permettent un progrmatino asyncrhone de manière "réactive".
Un observable est un objet qui emet des informations permettant d'y réagir l'orsque l'on y est inscrit.
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
