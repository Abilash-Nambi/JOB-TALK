import { axiosInstance } from "./AxiosInterceptor";

export const orderPayment = async (data) => {
  console.log("🚀 + orderPayment + data:", data);
  const amount = data;
  const currency = "INR";
  const receiptId = "qwsaq1";

  const options = {
    amount,
    currency,
    receipt: receiptId,
  };
  try {
    const response = await axiosInstance.post("/payment/create", options);
    return response;
  } catch (error) {
    console.log("🚀 + orderPayment + error:", error);
    return error;
  }
};
