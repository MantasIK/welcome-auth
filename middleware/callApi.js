// const url = `${process.env.SERVER_URL}/api/userData`;
//screw next.js

export const postData = async (data) => {
  console.log(process.env.SERVER_URL);
  try {
    const res = await fetch(`https://welcome-auth.vercel.app/api/userData`, {
      method: "post",
      body: JSON.stringify(data),
    });
  } catch (error) {
    console.log(error);
  }
};
