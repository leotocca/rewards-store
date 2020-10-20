export async function getUser() {
  const response = await fetch(
    "https://coding-challenge-api.aerolab.co/user/me",
    {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: process.env.API_TOKEN,
      },
    }
  );

  return response.json();
}

export async function addPoints(points) {
  if (typeof points !== Number) {
    console.error("addPoints() can only receive a Number as a parameter");
  }

  const response = await fetch(
    "https://coding-challenge-api.aerolab.co/user/me",
    {
      method: "POST",
      body: { amount: points },
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: process.env.API_TOKEN,
      },
    }
  );

  return response.json();
}

export async function getUserHistory() {
  const response = await fetch(
    "https://coding-challenge-api.aerolab.co/user/history",
    {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: process.env.API_TOKEN,
      },
    }
  );

  return response.json();
}

export async function redeemProduct(productId) {
  const response = await fetch(
    "https://coding-challenge-api.aerolab.co/redeem",
    {
      method: "POST",
      body: { productId },
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: process.env.API_TOKEN,
      },
    }
  );

  return response.json();
}

export async function getProducts() {
  const response = await fetch(
    "https://coding-challenge-api.aerolab.co/products",
    {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: process.env.API_TOKEN,
      },
    }
  );

  return response.json();
}
