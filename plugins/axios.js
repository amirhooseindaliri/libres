import axios from "axios";

export const httpRequest = axios.create({
  baseURL: "http://116.203.140.175:4668/api/v1/",
  headers: {
    "Content-Type": "application/json",
  },
});
httpRequest.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    $nuxt.$swal({
      toast: true,
      icon: "error",
      position: "top-end",
      title: error.response.data.detail,
      showConfirmButton: false,
      timer: 1500,
      customClass: {
        container: "ltr",
      },
    });
    if (error.response.status === 401) {
      localStorage.clear();
      window.location.replace("/auth/signin");
    }
    return error;
  }
);
