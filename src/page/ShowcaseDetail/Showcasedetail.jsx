import { useEffect } from 'react';
import './Showcasedetail.css';
import { showcase_data } from '../../data/showcase_data';

export default function Showcasedetail() {
  useEffect(() => {
    const handleResize = () => console.log(window.outerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="showcasedetail-container">
      <div className="showcasedetail-header">
        <h1>{showcase_data[0].project_name}</h1>
      </div>
    </div>
  );
}
