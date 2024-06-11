// import Cookies from "js-cookie";
// import { useRouter } from "next/navigation";
// import { useMutation } from "@tanstack/react-query";
// import request from "../../AxiosUtils";
// import { VerifyTokenAPI } from "../../AxiosUtils/API";
// import { ToastNotification } from "../../CustomFunctions/ToastNotification";

// const useOtpVerification = () => {
//   const router = useRouter();
//   return useMutation((data) => request({ url: VerifyTokenAPI, method: "post", data }), {
//     onSuccess: (responseData, requestData) => {
//       if (responseData.status === 200) {
//         Cookies.set('uo', requestData?.token)
//         router.push("/auth/update-password");
//         ToastNotification("success", responseData.data.message);
//       }
//     },
//   });
// };
// export default useOtpVerification;


import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { LOGIN_API } from '@/Config/Constant';
import { toast } from 'react-toastify';

const useOtpVerification = () => {
  const router = useRouter();

  return useMutation(
    (data) => axios.post(LOGIN_API, data), // Use LOGIN_API for OTP verification
    {
      onSuccess: (responseData, requestData) => {
        if (responseData.status === 200 || responseData.status === 201) {
          Cookies.set('uo', requestData?.token);
          toast.success(responseData.data.message);
          router.push("/auth/update-password");
        }
      },
      onError: (error) => {
        toast.error(error.response?.data?.message || 'An error occurred');
      },
    }
  );
};

export default useOtpVerification;
