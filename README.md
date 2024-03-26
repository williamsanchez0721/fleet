## Getting Started

First, run the command for to clone this repository:

```bash
git clone https://github.com/williamsanchez0721/fleet.git
```

Then, install all dependecys for to run the project with the command: 

```bash
npm install
```
Run this command for to migrate in prisma but before to configure the file .env with the configuration in the variable DATABASE_URL=""

```bash
npx prisma migrate deploy
```

To change the module imports for the project to ES6

for run the project of way local with this command 
```bash
npm run dev
```

## About this project

The technollogy for this project are: 

Nextjs, tailwindcss, axios, stripe, prisma, 

## Deploy 


## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

# Variables de Entorno

Este proyecto utiliza varias variables de entorno para la configuración y funcionamiento adecuado. A continuación, se detallan las variables necesarias y sus respectivos valores:

## `DATABASE_URL`
- Descripción: URL de conexión a la base de datos PostgreSQL.
- Valor predeterminado: `"postgresql://postgres:root@localhost:5432/fleet?schema=public"`

## `STRIPE_PRIVATE_KEY`
- Descripción: Clave privada de Stripe para integración de pagos.
- Valor predeterminado: `"sk_test_51OqzuTGIi2qOmAI9uzXR3cxAnhM0G4XZA9rzrnoXMCU0B9jTK16lMdeaLyMVu3dDvF0qIngJSsv9OfW3Bhf0c3BJ00TOInih12"`

## `PORT`
- Descripción: Puerto en el que se ejecuta el servidor.
- Valor predeterminado: `"8000"`

## `URL_FRONT`
- Descripción: URL del frontend asociado al proyecto.
- Valor predeterminado: `"http://localhost"`

## `PRIVATE_PASSWORD_ENCRY`
- Descripción: Clave privada utilizada para encriptación de contraseñas.
- Valor predeterminado: `"567202306@Atsu"`

## Variables de Entorno Google Auth

Estas variables son específicas para la autenticación con Google.

### `CLIENT_ID`
- Descripción: ID de cliente para la autenticación con Google.

### `CLIENT_SECRET`
- Descripción: Clave secreta de cliente para la autenticación con Google.

### `CLIENT_URL`
- Descripción: URL del cliente asociado a la autenticación con Google.
- Valor predeterminado: `"http://localhost:8000/api/auth/login/success"`

### `CALLBACKURL`
- Descripción: URL de callback para la autenticación con Google.
- Valor predeterminado: `"http://localhost:8000/api/auth/google/callback"`

---

**Nota:** Asegúrate de configurar estas variables de entorno según sea necesario para tu entorno de desarrollo, prueba o producción. Los valores predeterminados aquí proporcionados son solo ejemplos y pueden requerir modificaciones.

### `Ejecutar seeders del proyecto`

```bash
npm run seed
```