import Image from 'next/image'
import Menu from '../components/menu'
import AboutImg from '../images/about-img.png'


export default function About() {
  return (
    <div className="site">
      <div className="site__wrapper">
        <div className="site__menu">
          <Menu />
        </div>
        <div className="site__content">
          <div className="site__about">
            <div className="about__alltext">
              <div className="about__title">
                About Halloween<br/>Night
              </div>
              <div className="about__text">
                Night of the scariest, or all the ahead, is<br/>
                celebrated on October 31 and it is a very fun<br/>
                international celebration, this celebration comes<br/>
                from ancient origins, and is already celebrated<br/>
                by everyone.
              </div>
              <div className="about__button">
                <div className="orange__button">
                  Know more
                </div>
              </div>
              
            </div>
            <div className="about__img">
              <Image
                src={AboutImg}
                width="250px"
                height="350px"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
