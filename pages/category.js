import Image from 'next/image'
import Menu from '../components/menu'
import Category1 from '../images/category1-img.png'
import Category2 from '../images/category2-img.png'
import Category3 from '../images/category3-img.png'

export default function Category() {
  return (
    <div className="site">
      <div className="site__wrapper">
        <div className="site__menu">
          <Menu />
        </div>
        <div className="site__content">
          <div className="site__category">
            <div className="category__title">
              <div>Favorite Scare</div>
              <div>Category</div>
            </div>
            <div className="category__content">
              <div className="category__item">
                <div className="item_image">
                  <Image
                    src={Category1}
                    width="200px"
                    height="200px"
                  />
                </div>
                <div className="item__title">Ghost</div>
                <div className="item__text">Choose the ghosts,</div>
                <div className="item__text">the scariest these one.</div>
              </div>
              <div className="category__item">
                <div className="item_image">
                  <Image
                    src={Category2}
                    width="200px"
                    height="200px"
                  />
                </div>
                <div className="item__title">Pumpkins</div>
                <div className="item__text">You look at the scariest</div>
                <div className="item__text">pumpkin there is.</div>
              </div>
              <div className="category__item">
                <div className="item_image">
                  <Image
                    src={Category3}
                    width="200px"
                    height="200px"
                  />
                </div>
                <div className="item__title">Witch Hat</div>
                <div className="item__text">Pick the most stylish</div>
                <div className="item__text">witch hat out there.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
