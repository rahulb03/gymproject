import React, { useContext } from 'react';
import axios from 'axios';
import { Form, Formik } from 'formik';
import { Col, Input, Label } from 'reactstrap';
import { useTranslation } from '@/app/i18n/client';
import I18NextContext from '@/Helper/I18NextContext';
import { YupObject, emailSchema, nameSchema, passwordSchema, phoneSchema } from '@/Utils/Validation/ValidationSchemas';
import FormBtn from '@/Components/Common/FormBtn';
import SimpleInputField from '@/Components/Common/InputFields/SimpleInputField';
import { SIGNIN_API } from '@/Config/Constant';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const RegisterForm = () => {
  const { i18Lang } = useContext(I18NextContext);
  const { t } = useTranslation(i18Lang, 'common');

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      const response = await axios.post(SIGNIN_API, {
        name: values.name,
        email: values.email,
        password: values.password,
        phone: values.phone,
        country_code: values.country_code,
      });

      if (response.status === 200) {
        toast.success(t('SignupSuccessful'));
      } else {
        toast.error(t('SignupFailed'));
      }
    } catch (error) {
      toast.error(t('SignupFailed'));
    } finally {
      setSubmitting(false);
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
        {({ isSubmitting }) => (
          <Form className='row g-md-4 g-3'>
            <SimpleInputField
              nameList={[
                {
                  name: 'name',
                  placeholder: t('FullName'),
                  title: 'Name',
                  label: 'Full Name',
                },
                {
                  name: 'email',
                  placeholder: t('EmailAddress'),
                  title: 'Email',
                  label: 'Email Address',
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

            <FormBtn title={t('SignUp')} classes={{ btnClass: 'btn btn-animation w-100' }} disabled={isSubmitting} />
          </Form>
        )}
      </Formik>
    </>
  );
};

export default RegisterForm;
