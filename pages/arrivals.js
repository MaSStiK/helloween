import Image from 'next/image'
import Menu from '../components/menu'
import Arrivals1 from '../images/new1-img.png'
import Arrivals2 from '../images/new2-img.png'
import Arrivals3 from '../images/new3-img.png'



export default function Arrivals() {
  return (
    <div className="site">
      <div className="site__wrapper">
        <div className="site__menu">
          <Menu />
        </div>
        <div className="site__content">
          <div className="arrivals__block">
            <div className="arrivals__title">New Arrivals</div>
            <div className="arrivals__types">
              <div className="arrivals__type">
              <div className="arrivals__new">New</div>
                <div className="arrivals__img">
                  <Image
                    src={Arrivals1}
                    width="150px"
                    height="150px"
                  />
                </div>
                <div className="arrivals__name">Haunted House</div>
                <div className="arrivals__typename">Arrivals souvenir</div>
                <div className="arrivals__price__block">
                  <div className="arrivals__price">$20.99</div>
                  <div className="arrivals__end">Ends up</div>
                </div>
                
              </div>
              <div className="arrivals__type">
                <div className="arrivals__new">New</div>
                <div className="arrivals__img">
                  <Image
                    src={Arrivals2}
                    width="150px"
                    height="150px"
                  />
                </div>
                <div className="arrivals__name">Helloween Handle</div>
                <div className="arrivals__typename">Arrivals souvenir</div>
                <div className="arrivals__price__block">
                  <div className="arrivals__price">$31.99</div>
                  <div className="arrivals__end">Ends up</div>
                </div>
              </div>
              <div className="arrivals__type">
                <div className="arrivals__new">New</div>
                <div className="arrivals__img">
                  <Image
                    src={Arrivals3}
                    width="150px"
                    height="150px"
                  />
                </div>
                <div className="arrivals__name">Witch Hat</div>
                <div className="arrivals__typename">Arrivals souvenir</div>
                <div className="arrivals__price__block">
                  <div className="arrivals__price">$14.99</div>
                  <div className="arrivals__end">Ends up</div>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  )
}
