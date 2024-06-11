import React, { useContext } from 'react';
import Link from 'next/link';
import { RiCloseLine } from 'react-icons/ri';
import ProductBoxAction from './ProductBox1Action';
import ProductBox1Cart from './ProductBox1Cart';
import ProductBox1Rating from './ProductBox1Rating';
import Avatar from '../../Avatar';
import { placeHolderImage } from '../../../../../Data/CommonPath';
import Btn from '@/Elements/Buttons/Btn';
import I18NextContext from '@/Helper/I18NextContext';
import ProductBagde from './ProductBagde';
import SettingContext from '@/Helper/SettingContext';
import { ModifyString } from '@/Utils/CustomFunctions/ModifyString';
import { ASSETS_URL } from '@/Config/Constant';

const ProductBox1 = ({ imgUrl, productDetail, isClose, addAction = true, classObj, setWishlistState }) => {
  const { i18Lang } = useContext(I18NextContext);
  const { convertCurrency } = useContext(SettingContext);
  const handelDelete = (currObj) => {
    setWishlistState((prev) => prev.filter((elem) => elem.id !== currObj?.id));
  };
  return (
    <div className={`product-box ${classObj?.productBoxClass}`}>
      <ProductBagde productDetail={productDetail} />
      {isClose && (
        <div className='product-header-top' onClick={() => handelDelete(productDetail)}>
          <Btn className='wishlist-button close_button'>
            <RiCloseLine />
          </Btn>
        </div>
      )}
      <div className='product-image'>
        <Link href={`/${i18Lang}/product/kettlebell-weights?layout=product_images`}>
          <Avatar data={ASSETS_URL + imgUrl} placeHolder={placeHolderImage} customeClass={'img-fluid'} name={productDetail?.productName} height={500} width={500} />
        </Link>
        <ProductBoxAction productObj={productDetail} listClass='product-option' />
      </div>
      <div className='product-detail'>
        <Link href={`/${i18Lang}/product/kettlebell-weights?layout=product_images`}>
          <h6 className='name'>{productDetail?.productName}</h6>
          {/* <p dangerouslySetInnerHTML={{ __html: productDetail?.short_description }} /> */}
        </Link>
        {productDetail?.unit && <h6 className='unit mt-1'>{productDetail?.unit}</h6>}
        <h5 className='sold text-content'>
          <span className='theme-color price'>{convertCurrency(productDetail?.productPrice)}</span>
          <del>{convertCurrency(productDetail?.productMrp)}</del>
        </h5>

        <div className='product-rating mt-sm-2 mt-1'>
          <ProductBox1Rating totalRating={productDetail?.productRatingStar || 0} />
          <h6 className='theme-color'>{ModifyString(productDetail.productStockStatus, false, '_')}</h6>
        </div>
        {addAction && <ProductBox1Cart productObj={productDetail} />}
      </div>
    </div>
  );
};

export default ProductBox1;
