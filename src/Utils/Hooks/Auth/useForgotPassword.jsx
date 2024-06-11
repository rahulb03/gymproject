// import { useMutation } from '@tanstack/react-query';
// import { useRouter } from 'next/navigation';
// import Cookies from 'js-cookie';
// import axios from 'axios';
// import { LOGIN_API } from '@/Config/Constant';
// import { toast } from 'react-toastify';
// import { emailSchema, YupObject } from '../../Validation/ValidationSchemas';

// export const ForgotPasswordSchema = YupObject({ email: emailSchema });

// const useHandleForgotPassword = () => {
//   const router = useRouter();
//   return useMutation(
//     (data) => axios.post(LOGIN_API, data),  // Update the request to use LOGIN_API
//     {
//       onSuccess: (responseData, requestData) => {
//         if (responseData.status === 200 || responseData.status === 201) {
//           const token = responseData.data?.access_token;
//           toast.success(`Password reset link sent successfully. Token: ${token}`);
//           Cookies.set('ue', requestData.email);
//           router.push('/auth/otp-verification');
//         }
//       },
//       onError: (error) => {
//         toast.error(error.response?.data?.message || 'An error occurred');
//       },
//     }
//   );
// };

// export default useHandleForgotPassword;


import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie';
import axios from 'axios';
import { LOGIN_API } from '@/Config/Constant';
import { toast } from 'react-toastify';
import { emailSchema, YupObject } from '../../Validation/ValidationSchemas';

export const ForgotPasswordSchema = YupObject({ email: emailSchema });

const useHandleForgotPassword = () => {
  const router = useRouter();
  return useMutation(
    (data) => axios.post(LOGIN_API, data),
    {
      onSuccess: (responseData, requestData) => {
        console.log('Response Data:', responseData); // Add logging
        console.log('Request Data:', requestData);   // Add logging
        
        if (responseData.status === 200 || responseData.status === 201) {
          const token = responseData.data?.access_token;
          toast.success(`Password reset link sent successfully. Token: ${token}`);
          Cookies.set('ue', requestData.email);
          router.push('/auth/otp-verification');
        }
      },
      onError: (error) => {
        toast.error(error.response?.data?.message || 'An error occurred');
      },
    }
  );
};

export default useHandleForgotPassword;
