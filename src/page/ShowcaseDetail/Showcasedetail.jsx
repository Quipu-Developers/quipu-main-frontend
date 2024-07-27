import { useNavigate, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './Showcasedetail.css';
import { showcase_data } from '../../data/showcase_data';

export default function Showcasedetail() {
  const navigate = useNavigate();

  const [windowWidth, setWindowWidth] = useState(window.outerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.outerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  return (
    <div className="showcasedetail-container">

      <div className="showcasedetail-header">
        <h1>{showcase_data[0].project_name}</h1>
      </div>

    </div>
  )
}