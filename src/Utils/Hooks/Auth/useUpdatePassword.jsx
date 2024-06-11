// import { useMutation } from '@tanstack/react-query';
// import Cookies from 'js-cookie';
// import { useRouter } from 'next/navigation';
// import request from '../../AxiosUtils';
// import { UpdatePasswordAPI } from '../../AxiosUtils/API';
// import { ToastNotification } from '../../CustomFunctions/ToastNotification';
// import { passwordConfirmationSchema, passwordSchema, YupObject } from '../../Validation/ValidationSchemas';

// export const UpdatePasswordSchema = YupObject({ password: passwordSchema, password_confirmation: passwordConfirmationSchema });

// const useUpdatePassword = () => {
//   const router = useRouter();
//   return useMutation(
//     (data) =>
//       request({
//         url: UpdatePasswordAPI,
//         method: 'post',
//         data: { ...data, token: Cookies.get('uo'), email: Cookies.get('ue') },
//       }),
//     {
//       onSuccess: (resData) => {
//         router.push('/auth/login');
//         Cookies.remove('uo', { path: '/' });
//         Cookies.remove('ue', { path: '/' });
//         ToastNotification('success', 'Your password has been changed successfully. Use your new password to log in.');
//       },
//     },
//   );
// };
// export default useUpdatePassword;


import { useMutation } from '@tanstack/react-query';
import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import { LOGIN_API } from '@/Config/Constant';
import { toast } from 'react-toastify';
import { passwordConfirmationSchema, passwordSchema, YupObject } from '../../Validation/ValidationSchemas';

export const UpdatePasswordSchema = YupObject({
  password: passwordSchema,
  password_confirmation: passwordConfirmationSchema,
});

const useUpdatePassword = () => {
  const router = useRouter();

  return useMutation(
    (data) => 
      axios.post(LOGIN_API, {
        ...data,
        token: Cookies.get('uo'),
        email: Cookies.get('ue'),
      }),
    {
      onSuccess: (resData) => {
        router.push('/auth/login');
        Cookies.remove('uo', { path: '/' });
        Cookies.remove('ue', { path: '/' });
        toast.success('Your password has been changed successfully. Use your new password to log in.');
      },
      onError: (error) => {
        toast.error(error.response?.data?.message || 'An error occurred');
      }
    }
  );
};

export default useUpdatePassword;
