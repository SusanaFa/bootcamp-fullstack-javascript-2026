# Normalización de Base de Datos (1FN, 2FN, 3FN)

## 📌 ¿Qué veremos aquí?

En este material aprenderás cómo transformar una tabla desordenada en un modelo de base de datos correctamente normalizado.

📄 Revisa el pdf adjunto en esta carpeta.

---

## 🧱 Paso 1: Tabla inicial

Partimos con una tabla que contiene toda la información:

- Cursos
- Autores
- Temas
- Formato

❗ Problemas:

- Hay columnas con múltiples valores (TEMAS)
- Se repite mucha información

---

## 🔹 1FN – Primera Forma Normal

### ✔ Regla

Todos los atributos deben ser atómicos.

### 🔍 Problema

Una celda tiene múltiples temas.

### ✅ Solución

Separar cada tema en una fila.

---

## 🔹 2FN – Segunda Forma Normal

### ✔ Regla

Todos los atributos deben depender completamente de la clave primaria.

### 🔍 Problema

La información del autor se repite en cada fila.

### ✅ Solución

Crear tabla AUTORES y referenciarla con clave foránea.

---

## 🔁 Relación N:M

### 🔍 Problema

Un curso tiene muchos temas, y un tema puede estar en muchos cursos.

### ✅ Solución

Crear tabla intermedia: CURSOS_TEMAS

---

## 🔹 3FN – Tercera Forma Normal

### ✔ Regla

No deben existir dependencias transitivas.

### 🔍 Problema

REGIÓN e IDIOMA no dependen directamente del autor.

### ✅ Solución

Separarlos en tablas independientes.

---

## ✅ Resultado final

Obtendremos un modelo con:

- CURSOS
- AUTORES
- TEMAS
- FORMATOS
- CURSOS_TEMAS
- REGIONES
- IDIOMAS

🎯 Ahora los datos:

- No se repiten
- Son consistentes
- Son escalables
