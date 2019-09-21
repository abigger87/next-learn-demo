import { withAmp } from 'next/amp';
import Header from '../components/Header';

const Index = withAmp(() => {
  return (
    <div>
      <Header />
      <p>Hello Next.js</p>
    </div >
  );
}, { hybrid: true })

export default Index;
