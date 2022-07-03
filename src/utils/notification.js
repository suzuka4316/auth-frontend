import { toast } from "react-toastify";

export const error = (message) => {
  toast.error(message, {
    className: 'toast-error',
    progressClassName: 'error-progress-bar',
  });
}

export const defaultError = () => {
  toast.error("Something has gone wrong...", {
    className: 'toast-error',
    progressClassName: 'error-progress-bar',
  });
}

export const success = (message) => {
  toast.success(message, {
    className: 'toast-success',
    progressClassName: 'success-progress-bar',
  });
}

