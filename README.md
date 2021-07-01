# Mecaelect
Sigue los pasos para configurar el repositorio


## Configuración de git

### Fork
Ir al botón Fork de la parte superior derecha y hacer click en él.

Luego de realizar el fork al proyecto https://github.com/lorevallejosserrano/mecaelect, debes clonar este desde tu repositorio de GIT https://github.com/YOUR_REPO_NAME/mecaelect

Debes ir a tu local, abrir git bash y ejecutar el siguiente comando:
```sh
git clone https://github.com/YOUR_REPO_NAME/mecaelect.git
```

Luego, debes cambiarte a la rama dev.
```sh
git checkout dev
```

Para ver la configuración actual del repositorio, ejecutar el siguiente comando.
```sh
git remote -v
```

Debería desplegar la siguiente información.
```sh
> origin  https://github.com/YOUR_REPO_NAME/mecaelect.git (fetch)
> origin  https://github.com/YOUR_REPO_NAME/mecaelect.git (push)
```

Realiza el siguiente comando para configurar el upstream del proyecto.
```sh
git remote add upstream https://github.com/lorevallejosserrano/mecaelect.git
```

Para verificar el upstream con tu fork, vuelve a ejecutar el siguiente comando.
```sh
git remote -v
```

Pero esta vez, se debe desplegar de la siguiente forma.
```sh
> origin  https://github.com/YOUR_REPO_NAME/mecaelect.git (fetch)
> origin  https://github.com/YOUR_REPO_NAME/mecaelect.git (push)
> upstream        https://github.com/lorevallejosserrano/mecaelect.git (fetch)
> upstream        https://github.com/lorevallejosserrano/mecaelect.git (push)
```

En caso de que no veas tu repositorio en el origin, intenta lo siguiente.
```sh
git remote set-url origin https://github.com/YOUR_NAME/mecaelect.git
```


## Importante
Siempre debes trabajar en tu rama. Para descargar los cambios que hayan hecho otros colaboradores, debes cambiarte a la rama principal del proyecto (dev), pero una vez descargados, debes copiar esos cambios desde esa rama a tu rama y continuar trabajando allí.


## Bajar archivos

Para poder bajar los cambios que hayan subido otros colaboradores, primero debes hacer commit de las últimas modificaciones que hayas hecho en el proyecto.
```sh
git status
```

Si hay cambios (aparecerán en rojo), debes agregarlos al commit.
```sh
git add .
```

Luego, hay que escribir un breve comentario en inglés (una frase) sobre qué trata este nuevo cambio, antecedido por el nombre de tu rama.
```sh
git commit -m "TU_RAMA | this is a comment"
```

Ahora puedes bajar los cambios de otros.
```sh
git fetch upstream
```
```sh
git pull upstream dev
```
```sh
git pull origin dev
```

Una vez que hayas actualizado el proyecto, debes volver a tu rama para hacer nuevas modificaciones.
```sh
git checkout TU_RAMA
```


## Subir archivos

Revisa si hay cambios nuevos.
```sh
git status
```

Si hay cambios (aparecerán en rojo), debes agregarlos al commit.
```sh
git add .
```

Luego, hay que escribir un breve comentario en inglés (una frase) sobre qué trata este nuevo cambio, antecedido por el nombre de tu rama.
```sh
git commit -m "TU_RAMA | this is a comment"
```

Ahora que ya se ha agregado el commit con los nuevos cambios, se puede subir al repositorio.
```sh
git push -u origin TU_RAMA
```

Ahora debes ir a tu perfil en github y hacer click en el botón verde "compare & pull request". 
Si este botón no fue generado automáticamente, puedes hacer el pull request de forma manual, yendo a la pestaña "Pull request" y haciendo click en el botón verde "new pull request".
Luego, fijarte que la configuración este así: 
base:dev | compare: TU_RAMA
Hacer click en el botón verde "create pull request".
De esta forma estarás creando el pull request. 

Nota: Luego aparecerá un botón que dice "merge". NO debes hacer click en él, debes esperar a que el dueño del proyecto revise tu código y una vez que esté listo, él hará el merge.

Una vez aprobado, debes hacer nuevamente el proceso para bajar a tu local, estos cambios que están en github.


## Crear una nueva rama

Todas las ramas deben ser copias de la rama principal (dev), la cual tiene las actualizaciones que han aportado todos los colaboradores. 
Para poder crear una rama nueva, debes estar en la rama principal y a partir de ella, creas la nueva rama.
```sh
git checkout -b TU_NUEVA_RAMA
```

Si quieres moverte a otra rama ya existente, debes ejecutar el siguiente comando
```sh
git checkout OTRA_RAMA
```

