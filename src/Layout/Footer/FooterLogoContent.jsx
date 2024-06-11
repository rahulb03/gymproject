import React, { useContext, useEffect, useState } from 'react';
import { Col } from 'reactstrap';
import Link from 'next/link';
import { RiHomeLine, RiMailLine } from 'react-icons/ri';
import Avatar from '@/Components/Common/Avatar';
import ThemeOptionContext from '@/Helper/ThemeOptionsContext';
import { placeHolderImage } from '../../../Data/CommonPath';
import I18NextContext from '@/Helper/I18NextContext';
import { usePathname } from 'next/navigation';
import ParisLogo from '../../../public/assets/images/logo/1.png';
import TokyoLogo from '../../../public/assets/images/logo/2.png';
import RomeLogo from '../../../public/assets/images/logo/3.png';
import MadridLogo from '../../../public/assets/images/logo/4.png';
import OtherLogo from '../../../public/assets/images/logo/6.png';
import { EMAIL_ADD, LIGHT_LOGO, MAP } from '@/Config/Constant';

const FooterLogoContent = () => {
  const { themeOption } = useContext(ThemeOptionContext);
  const [logoAbc, setLogo] = useState('');
  const { i18Lang } = useContext(I18NextContext);
  const pathName = usePathname();
  useEffect(() => {
    let logo = themeOption?.logo?.footer_logo;
    if (pathName == `/${i18Lang}/theme/paris`) {
      logo = { original_url: ParisLogo };
    } else if (pathName == `/${i18Lang}/theme/tokyo`) {
      logo = { original_url: TokyoLogo };
    } else if (pathName == `/${i18Lang}/theme/rome`) {
      logo = { original_url: RomeLogo };
    } else if (pathName == `/${i18Lang}/theme/madrid`) {
      logo = { original_url: MadridLogo };
    } else if (pathName == `/${i18Lang}/theme/berlin` || pathName == `/${i18Lang}/theme/denver`) {
      logo = { original_url: OtherLogo };
    } else {
      logo = themeOption?.logo?.footer_logo;
    }
    setLogo(logo);
  }, [pathName, i18Lang, themeOption?.logo?.footer_logo]);
  return (
    <Col xl={3} sm={6}>
      <div className='footer-logo'>
        <div className='theme-logo'>
          <Link href='/'><Avatar data={LIGHT_LOGO} placeHolder={placeHolderImage} name={'Footer'} height={28} width={160} /></Link>
        </div>

        <div className='footer-logo-contain'>
          {themeOption?.footer?.footer_about && <p>{themeOption?.footer?.footer_about}</p>}

          <ul className='address'>
            {themeOption?.footer?.about_address && (
              <li>
                <RiHomeLine />
                <Link href={MAP} target='_blank'>
                Near, 3rd Floor, Regent Plaza, Rami Park, Surat, Gujarat 394210
                </Link>
              </li>
            )}
            {themeOption?.footer?.about_email && (
              <li>
                <RiMailLine />
                <Link href={`mailto:${EMAIL_ADD}`} target='_blank'>
                {EMAIL_ADD}
                </Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </Col>
  );
};

export default FooterLogoContent;
