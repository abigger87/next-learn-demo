import {withAmp} from 'next/amp';
import Header from '../components/Header';

function About(){
  return (
    <div>
      <p>This is the about page</p>
    </div>
  )
}

export default withAmp(About, {hybrid:true})
