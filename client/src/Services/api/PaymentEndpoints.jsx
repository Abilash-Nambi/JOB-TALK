import { axiosInstance } from "./AxiosInterceptor";

export const orderPayment = async (data) => {
  const amount = 500;
  const currency = "INR";
  const receiptId = "qwsaq1";

  const options = {
    amount,
    currency,
    receipt: receiptId,
  };
  try {
    const response = await axiosInstance.post("/payment/create", options);
  } catch (error) {}
};
