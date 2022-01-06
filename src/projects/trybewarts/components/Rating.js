import React from 'react';

function Rating() {
  return (
    <div>
      <div className='avalia'>
        <label htmlFor='' id='label-rate'>
          Como você avalia a Trybewarts?
        </label>
        <label htmlFor='rate-1'>
          <input type='radio' name='rate' id='rate-1' value='1' />1
        </label>
        <label htmlFor='rate-2'>
          <input type='radio' name='rate' id='rate-2' value='2' />2
        </label>
        <label htmlFor='rate-3'>
          <input type='radio' name='rate' id='rate-3' value='3' />3
        </label>
        <label htmlFor='rate-4'>
          <input type='radio' name='rate' id='rate-4' value='4' />4
        </label>
        <label htmlFor='rate-5'>
          <input type='radio' name='rate' id='rate-5' value='5' />5
        </label>
        <label htmlFor='rate-6'>
          <input type='radio' name='rate' id='rate-6' value='6' />6
        </label>
        <label htmlFor='rate-7'>
          <input type='radio' name='rate' id='rate-7' value='7' />7
        </label>
        <label htmlFor='rate-8'>
          <input type='radio' name='rate' id='rate-8' value='8' />8
        </label>
        <label htmlFor='rate-9'>
          <input type='radio' name='rate' id='rate-9' value='9' />9
        </label>
        <label htmlFor='rate-10'>
          <input type='radio' name='rate' id='rate-10' value='10' />
          10
        </label>
      </div>
      <label htmlFor='textarea' className='textarea'>
        Deixe seu comentário:
      </label>
      <textarea
        name=''
        id='textarea'
        cols='30'
        rows='10'
        maxLength='500'
      ></textarea>
    </div>
  );
}

export default Rating;
