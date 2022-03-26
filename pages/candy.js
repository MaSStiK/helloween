import Image from 'next/image'
import Menu from '../components/menu'
import Trick1 from '../images/trick-treat1-img.png'
import Trick2 from '../images/trick-treat2-img.png'
import Trick3 from '../images/trick-treat3-img.png'
import Trick4 from '../images/trick-treat4-img.png'
import Trick5 from '../images/trick-treat5-img.png'
import Trick6 from '../images/trick-treat6-img.png'


export default function Candy() {
  return (
    <div className="site">
      <div className="site__wrapper">
        <div className="site__menu">
          <Menu />
        </div>
        <div className="site__content">
          <div className="candy__title">
            Trick Or Treat
          </div>
          <div className="candy__types">
            <div className="candy__type">
              <div className="candy__img">
                <Image
                  src={Trick1}
                  width="150px"
                  height="150px"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
