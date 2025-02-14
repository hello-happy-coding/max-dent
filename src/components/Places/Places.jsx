import React from 'react';
import './Places.css';
import 'animate.css';

import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Places = () => {
  return (
    <div className='Information'>
      <div className='left-section'>
        <div className='city'>OLKUSZ</div>

        <div className='contact-item'>
          <FaPhone className='icon' />
          <span>669 000 700</span>
        </div>

        <div className='contact-item'>
          <FaEnvelope className='icon' />
          <span>arkzurek@gmail.com</span>
        </div>

        <div className='contact-item'>
          <FaMapMarkerAlt className='icon' />
          <span>ul. Nowa 13, Olkusz</span>
        </div>
      </div>

      {/* Tabela godzin otwarcia */}
      <div className='right-section-table'>
        <table className='schedule-table'>
          <tbody>
            <tr>
              <td className='lunes'>Poniedziałek</td>
              <td className='lunes'>11:00 - 18:00</td>
            </tr>
            <tr>
              <td className='martes'>Wtorek</td>
              <td className='martes'>11:00 - 18:00</td>
            </tr>
            <tr>
              <td className='viernes'>Czwartek</td>
              <td className='viernes'>11:00 - 18:00</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Places;
