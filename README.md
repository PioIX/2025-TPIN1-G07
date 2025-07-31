
# ⚽ FUTBOLPIO - Juego de Preguntas y Ranking de Usuarios

FutbolPIO es una aplicación web interactiva donde los usuarios compiten en un juego de preguntas relacionadas al fútbol. Incluye login, registro, panel de administración de usuarios, consignas, jugadores por consigna, tabla de puntajes y más.

## 📌 Tecnologías usadas

- **Frontend:** HTML, CSS, JavaScript (vanilla)
- **Backend:** Node.js + Express
- **Base de datos:** MySQL
- **Conexión cliente-servidor:** Fetch API

---

## 📁 Estructura del proyecto

```
├── front/
│   ├── index.html              # Pantalla principal
│   ├── pantallaJuego.html      # Juego interactivo
│   ├── admin.html              # Panel admin (gestiona usuarios)
│   ├── puntajes.html           # Panel de puntajes (muestra los puntajes al final del juego)
│   ├── funciones.js            # Funciones JS comunes
│   ├── app.js                  # JS principal
│   ├── ranking.js              # Ranking de usuarios
│   └── pantallaJuego.css  # Estilos y diseño de la pagina de pantallaJuego.html
│   └── puntajes.css       # Estilos y diseño de la pagina de puntaje.html
│   └── styles.css       # Estilos y diseño de la pagina de index.html
├── back/ modulos/
│   └── mysql.js                # Conexión y query a MySQL
├── index.js                    # Servidor Express
├── pio.env                   # para entrar desde el colegio
├── home.env                   # para entrar desde otro sitio
└── README.md                   # Este archivo
```

---

## 🚀 Cómo correr el proyecto

### 🔧 Requisitos previos

- Node.js instalado
- MySQL instalado
- Crear la base de datos y tablas necesarias (ver más abajo)

### 🛠️ Instalación

1. Cloná este repositorio:
   ```bash
   git clone https://github.com/tu_usuario/futbolpio.git
   cd futbolpio
   ```

2. Instalá las dependencias:
   ```bash
   npm install
   ```

3. Iniciá el servidor:
   ```bash
   node index.js
   ```

4. Abrí el archivo `index.html` con Live Server o directamente en el navegador.

---

## 🗄️ Estructura de la base de datos (MySQL)

**Tabla `Usuarios`**
```sql
CREATE TABLE Usuarios (
  id INT AUTO_INCREMENT PRIMARY KEY,
  userName VARCHAR(100),
  email VARCHAR(100),
  password VARCHAR(100),
  totalTime INT DEFAULT 0
);
```

**Tabla `Jugadores`**
```sql
CREATE TABLE Jugadores (
  idJugadores INT AUTO_INCREMENT PRIMARY KEY,
  nombreCompleto VARCHAR(100),
  pais VARCHAR(100)
);
```

**Tabla `Consignas`**
```sql
CREATE TABLE Consignas (
  idConsigna INT AUTO_INCREMENT PRIMARY KEY,
  categoria VARCHAR(100)
);
```

**Tabla `JugadoresPorConsigna`**
```sql
CREATE TABLE JugadoresPorConsigna (
  idJugadorConsigna INT AUTO_INCREMENT PRIMARY KEY,
  idConsigna INT,
  idJugador INT,
  FOREIGN KEY (idConsigna) REFERENCES Consignas(idConsigna),
  FOREIGN KEY (idJugador) REFERENCES Jugadores(idJugadores)
);
```

---

## ✨ Funcionalidades

- ✅ Registro y login de usuarios
- ✅ Mostrar y actualizar puntajes
- ✅ Rendir o completar consignas (suma y resta puntos)
- ✅ Ranking ordenado por puntaje
- ✅ Panel de administración:
  - Agregar usuario
  - Modificar usuario (nombre, email, contraseña)
  - Eliminar usuario
- ✅ Mostrar jugadores y países (5 segundos al rendirse)
- ✅ Backend con endpoints REST (GET, POST, PUT, DELETE)

---


## ✍️ Autor

Desarrollado por Victoria Palacio, Franco Romero, Tiziana Arias, Simon Anesini y Oriana Martinez 
Proyecto de fin de cuatrimestre
