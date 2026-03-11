# Actividad Git Colaborativa

## Objetivo

Practicar el flujo básico de trabajo con **Git y GitHub** mediante una actividad colaborativa.

Durante esta actividad aprenderemos a:

- Hacer **Fork** de un repositorio
- **Clonar** un repositorio en nuestro computador
- Crear una **rama (branch)**
- Realizar **cambios en el proyecto**
- Guardar cambios con **commit**
- Subir cambios con **push**
- Enviar un **Pull Request**

Flujo de trabajo que utilizaremos:

```
Fork → Clone → Branch → Commit → Push → Pull Request
```

## Flujo del ejercicio

```
Repositorio de la profesora
        │
        ▼
      Fork
        │
        ▼
Repositorio del estudiante
        │
        ▼
      Clone
        │
        ▼
Cambios en el computador
        │
        ▼
       Push
        │
        ▼
   Pull Request
        │
        ▼
Repositorio de la profesora
```

---

# Paso 1: Hacer Fork del repositorio

1. Ir al repositorio del ejercicio.
2. Hacer clic en el botón **Fork** ubicado en la parte superior derecha.

Esto creará **una copia del repositorio en tu cuenta de GitHub**.

---

# Paso 2: Clonar el repositorio

Desde **tu fork**, copia la URL del repositorio.

Luego abre la terminal y ejecuta:

```bash
git clone URL_DE_TU_FORK
```

Entrar a la carpeta del proyecto:

```bash
cd git-github-practice-FSJS-22-2
```

---

# Paso 3: Crear una nueva rama

Primero verifica en qué rama estás:

```bash
git branch
```

Una **rama (branch)** permite trabajar en cambios sin modificar directamente la versión principal del proyecto.

```bash
git checkout -b aporte-tu-nombre
```

Ejemplo:

```bash
git checkout -b aporte-susana
```

---

# Paso 4: Realizar modificaciones

Busca la carpeta correspondiente a tu grupo:

```
G1
G2
G3
G4
```

Dentro encontrarás un archivo `index.html`.

Edita el archivo y agrega:

- tu nombre
- tu ciudad
- qué aprendiste hoy sobre Git
- incorpora estilos y un script sencillo

Ejemplo:

```html
<p>Susana - Angol</p>
<p>Aprendí cómo funciona el flujo básico de Git y GitHub.</p>
```

Guarda los cambios.
Puedes verificar los cambios realizados con:

```bash
git status
```

---

# Paso 5: Guardar cambios con Git

Agregar los archivos modificados:

```bash
git add .
```

Crear un commit:

```bash
git commit -m "Agrego mi participación en la actividad"
```

---

# Paso 6: Subir cambios a GitHub

Subir la rama al repositorio:

```bash
git push origin aporte-tu-nombre
```

---

# Paso 7: Crear un Pull Request

1. Ir a tu repositorio en GitHub.
2. Verás un botón **Compare & Pull Request**.
3. Crear el **Pull Request** hacia el repositorio original.

---

# Resultado esperado

Si todo está correcto:

- tu cambio aparecerá como **Pull Request**
- la profesora podrá revisarlo
- luego se podrá **fusionar (merge)** al proyecto principal

---

# Comando útil

Si en algún momento no sabes en qué estado está tu repositorio, puedes usar:

```bash
git status
```

---

# Problemas comunes

### 1. No puedo hacer push

Asegúrate de estar trabajando en tu rama.

Puedes verificarlo con:

```bash
git branch
```

Si no estás en tu rama:

```bash
git checkout nombre-de-tu-rama
```

---

### 2. No aparecen mis cambios

Verifica el estado del repositorio:

```bash
git status
```

Si los archivos aparecen en rojo, debes agregarlos:

```bash
git add .
```

---

### 3. No aparece el botón "Compare & Pull Request"

Asegúrate de haber hecho **push de tu rama**:

```bash
git push origin nombre-de-tu-rama
```

Luego vuelve a GitHub y debería aparecer el botón.

---
