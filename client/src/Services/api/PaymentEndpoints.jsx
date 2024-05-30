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
export const validatePayment = async (data) => {
  console.log("🚀 + orderPayment + data:", data);
  const { razorpay_payment_id, razorpay_order_id, razorpay_signature } = data;
  const options = {
    razorpay_payment_id,
    razorpay_order_id,
    razorpay_signature,
  };
  try {
    const response = await axiosInstance.post("/payment/validate", options);
    console.log("🚀 + validatePayment + response:", response);
    return response;
  } catch (error) {
    console.log("🚀 + orderPayment + error:", error);
    return error;
  }
};
