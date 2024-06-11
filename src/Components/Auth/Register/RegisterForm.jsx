import React, { useContext, useState } from 'react';

import axios from 'axios';

import { Form, Formik } from 'formik';
import { Col, Input, Label } from 'reactstrap';
import { useTranslation } from '@/app/i18n/client';
import I18NextContext from '@/Helper/I18NextContext';
import { YupObject, emailSchema, nameSchema, passwordConfirmationSchema, passwordSchema, phoneSchema } from '@/Utils/Validation/ValidationSchemas';
import FormBtn from '@/Components/Common/FormBtn';
import SimpleInputField from '@/Components/Common/InputFields/SimpleInputField';
import { SIGNIN_API } from '@/Config/Constant';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import { onChange } from 'react-toastify/dist/core/store';


const RegisterForm = () => {
  const { i18Lang } = useContext(I18NextContext);
  const { t } = useTranslation(i18Lang, 'common');
  const {name , setName} = useState();
  const {email , setEmail} = useState();
  const {password , setPassword} = useState();
  const {phone , setPhone} = usestate();
  

const handleSubmit = async (e) => {
  e.preventDefault();
  try {

    const res = await axios.post(SIGNIN_API , {
       name , 
       email , 
       password ,
       phone ,

    });
    
    if(res && res.data.success){
      toast.success(res.data && res.data.message);

    } else{
      toast.error(res.data.message);
    }
  } catch (error) {
     console.log(error);
     toast.error("registration failed ");
  }

};

 

  return (
    <>
      <ToastContainer />
      <Formik
     
     initialValues={{
          name: '',
          email: '',
          password: '',
          country_code: '91',
          phone: '',
        }}
        validationSchema={YupObject({
          name: nameSchema,
          email: emailSchema,
          password: passwordSchema,
          phone: phoneSchema,
        })}
       onSubmit={handleSubmit}
      >
        {({  handleSubmit}) => (
          <Form className='row g-md-4 g-3' onSubmit={handleSubmit}>
            <SimpleInputField 
              nameList={[
               
                { name: 'name',
                   placeholder: t('FullName'),
                    title: 'Name', 
                    label: 'Full Name' 
                    // onchange: (e)  , 
   
                  },
              
                  { name: 'email', 
                    placeholder: t('EmailAddress'),
                     title: 'Email', 
                     label: 'Email Address'
                     },
              ]}
            />
           
            <Col xs='12'>
            
              <div className='country-input' style={{ position: 'relative' }}>
               
                <div className='form-control' style={{ display: 'flex', alignItems: 'left', width: "93px", height: '58px', borderRadius: '5px', position: 'absolute', zIndex: '1', padding: 'auto' }}>
                  <div className='country-code' style={{ fontSize: '17px' }}> + 91</div>
                </div>
              
                <SimpleInputField
                
                nameList={[
                    {
                      name: 'phone',
                      type: 'number',
                      placeholder: t('EnterPhoneNumber'),
                      colclass: 'country-input-box',
                      title: 'Phone',
                      label: 'Phone',
                    },
                  ]}
                />
              </div>

            </Col>

            <SimpleInputField
              nameList={[
                { name: 'password', placeholder: t('Password'), type: 'password', title: 'Password', label: 'Password' },
              ]}
            />

         

            <Col xs={12}>
              <div className='forgot-box'>
                <div className='form-check remember-box'>
                  <Input className='checkbox_animated check-box' type='checkbox' id='flexCheckDefault' />
                  <Label className='form-check-label' htmlFor='flexCheckDefault'>
                    {t('Iagreewith')} <span>{t('Terms')}</span> {t('and')} <span>{t('Privacy')}</span>
                  </Label>
                </div>
              </div>
            </Col>

            <FormBtn title={t('SignUp')} classes={{ btnClass: 'btn btn-animation w-100' }}  />
          </Form>
       
       )}

      </Formik>
    </>
  );
};

export default RegisterForm;
