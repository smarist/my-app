import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import {useTransition, animated, useSpringRef} from 'react-spring'
import NavigationMenu from "./NavigationMenu"

export default function Navigation(){
    const [showMenu, setShowMenu] = React.useState(false)
 //Mwnu className="fixed bg-white top-0 left-0 w-4/5 h-full z-50 shadow"
 //Mask className="bg-black-t-50 fixed top-0 left-0 w-full h-full z-50"

  /*  let menu
    let menuMask

    if(showMenu){
        menu=
        <div className="fixed bg-white top-0 left-0 w-4/5 h-full z-50 shadow p-3">
            <NavigationMenu closeMenu={()=> setShowMenu(false)}/>
        </div>
       
        menuMask=
        <div className="bg-black-t-50 fixed top-0 left-0 w-full h-full z-50" onClick={()=> setShowMenu(false)}>
        </div>
    }
*/

const maskTransitions = useTransition(showMenu, {
    from: { position: 'absolute', opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
})

const menuTransitions = useTransition(showMenu, {
    from: { opacity: 0, transform: 'translateX(-100%)' },
    enter: { opacity: 1, transform: 'translateX(0%)' },
    leave: { opacity: 0, transform: 'translateX(-100%)' },
})

  return(
      <nav>
          <span className="text-xl">
            <FontAwesomeIcon
                icon={faBars}
                onClick={()=> setShowMenu(!showMenu)}/>
          </span>
          {
                maskTransitions.map(({ item, key, props }) =>
                    item && 
                    <animated.div 
                        key={key} 
                        style={props}
                        className="bg-black-t-50 fixed top-0 left-0 w-full h-full z-50"
                        onClick={() => setShowMenu(false)}
                    >
                    </animated.div>
                )
            }

            {
                menuTransitions.map(({ item, key, props }) =>
                    item && 
                    <animated.div 
                        key={key} 
                        style={props}
                        className="fixed bg-white top-0 left-0 w-4/5 h-full z-50 shadow p-3"
                    >
                        <NavigationMenu 
                            closeMenu={() => setShowMenu(false)}
                        />
                    </animated.div>
                )
            }
      </nav>
  )
}