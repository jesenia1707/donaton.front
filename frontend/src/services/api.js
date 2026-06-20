const API_URL =
  process.env.REACT_APP_API_URL ||
  "http://localhost:30321/api/donaciones";

export const registrarDonacion = async (donacion) => {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(donacion),
  });

  if (!response.ok) {
    throw new Error(`Error HTTP: ${response.status}`);
  }

  return await response.json();
};

export const obtenerResumen = async () => {
  const response = await fetch(API_URL);

  if (!response.ok) {
    throw new Error(`Error HTTP: ${response.status}`);
  }

  return await response.json();
};