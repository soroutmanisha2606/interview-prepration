//we can control which code we want to load or which we don't want
import React,{lazy, Suspense} from 'react'
// import Lazycomponet2 from './lazycomponet2'
// import Parent from '../memo hook/difference_usemomo_and_momo'
const Lazycomp=lazy(()=>import('./lazycomp'))
const Lazycomponet2=lazy(()=>import('./lazycomponet2'))
const Lazy = () => {
  return (
    <div>
        <h1>Lazy loading</h1>
        <Suspense fallback={<h2>....parent component is loading</h2>}>
        <Lazycomp/>
        </Suspense>
        
<Suspense fallback={<h6>....componet2 is loading.....</h6>}>
        <Lazycomponet2/>
        </Suspense>
        
    </div>
  )
}

export default Lazy