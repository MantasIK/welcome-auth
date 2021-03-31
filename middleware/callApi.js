export const postData = async (data) => {
  try {
    const res = await fetch("http://localhost:3000/api/userData", {
      method: "post",
      body: JSON.stringify(data),
    });
  } catch (error) {
    console.log(error);
  }
};
