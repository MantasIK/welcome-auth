const server_url = process.env.SERVER_URL
  ? process.env.SERVER_URL
  : "http://localhost:3000";

export const postData = async (data) => {
  try {
    const res = await fetch(`${server_url}/api/userData`, {
      method: "post",
      body: JSON.stringify(data),
    });
  } catch (error) {
    console.log(error);
  }
};
