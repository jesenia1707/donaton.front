const handleLogin = async (e) => {
e.preventDefault();

try {

```
const response = await fetch(
  "http://localhost:30080/api/usuarios/login",
  {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email,
      password
    }),
  }
);

if (!response.ok) {
  alert("Correo o contraseña incorrectos");
  return;
}

const usuario = await response.json();

localStorage.setItem(
  "usuarioId",
  usuario.id
);

localStorage.setItem(
  "rol",
  usuario.rol
);

localStorage.setItem(
  "nombre",
  usuario.nombre
);

if (usuario.rol === "ADMIN") {
  navigate("/dashboard");
}
else if (usuario.rol === "VOLUNTARIO") {
  navigate("/voluntario");
}
else {
  navigate("/donante");
}
```

} catch (error) {

```
console.error(error);

alert(
  "No se pudo conectar con el servidor"
);
```

}
};
