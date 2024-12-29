# Gestionnaire_t-ches_101

## Aperçu du projet

Le projet **Gestionnaire_t-ches_101** est une application backend permettant de gérer des tâches. Cette application permet aux utilisateurs de créer, lire, mettre à jour et supprimer des tâches. Les tâches sont stockées dans une base de données MongoDB, et l'application expose des endpoints API pour interagir avec ces données.

## Fonctionnalités

- **Ajout de tâches** : Permet à l'utilisateur d'ajouter une nouvelle tâche avec un titre et une description.
- **Affichage de toutes les tâches** : Affiche toutes les tâches existantes avec leur titre, description et statut (terminée ou non).
- **Mise à jour d'une tâche** : Permet à l'utilisateur de modifier le statut de la tâche (par exemple, marquer comme terminée).
- **Suppression d'une tâche** : Permet à l'utilisateur de supprimer une tâche par son identifiant unique.
- **Validation des entrées** : Validation des champs obligatoires (titre et description) et gestion des erreurs lors de l'accès à la base de données.

## Technologies Utilisées

- **Node.js** : Environnement d'exécution pour le backend.
- **Express.js** : Framework pour créer l'API et gérer les routes.
- **MongoDB** : Base de données NoSQL pour stocker les tâches.
- **Mongoose** : ODM (Object Document Mapping) pour interagir avec MongoDB.
- **Postman** : Outil utilisé pour tester les API.
