import { toast } from "react-toastify";

export const toastError = (message: string) => {
  toast.error(message, { position: "bottom-right" });
};

export const toastSuccess = (message: string) => {
  toast.success(message, { position: "bottom-right" });
};
