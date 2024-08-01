import { useEffect } from 'react';
import './Showcasedetail.css';
import { showcase_data } from '../../data/showcase_data';
import { useLocation } from 'react-router-dom'; // 'react-router' 대신 'react-router-dom' 사용

export default function Showcasedetail() {
  const location = useLocation();
  const index = location.state.index ?? 0; // 중괄호 안에 index만 사용

  useEffect(() => {
    const handleResize = () => console.log(window.outerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="showcasedetail-container">
      <div className="showcasedetail-header">
        <h1>{showcase_data[index].project_name}</h1>
      </div>
    </div>
  );
}
