import './App.css';
import React from 'react';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
    const [name, setName] = useState('');
  const [review, setReview] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic
    console.log('Name:', name);
    console.log('Review:', review);
    // Reset form fields
    setName('');
    setReview('');
  };

  return (
    <div className="App">
      <div className='WholeContent container'>
    <div className='RightSide'>
    <div className="review-form-container">
      <h2>Customer Review Form</h2>
      <form className="review-form" onSubmit={handleSubmit}>
      <div className='YourName'>
      <input
          type="text"
          placeholder="FirstName"
          className='firstN'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="LastName"
          className='lastN'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

      </div>

    <input id="name" type="text" name="name" placeholder=" Email" class="form-inputs" required/> 
    <input id="phone" type="phone" name="phone" placeholder=" (000-000-000-)" class="form-inputs" required/> 

    <div className='Rating'><p>Let Us Know your Rate from 1 to 5 :</p> </div>
    <div class="select">

  <select>
    <option value="1">1</option>
    <option value="2">2</option>
    <option value="3">3</option>
    <option value="4">4</option>
    <option value="5">5</option>
  </select>
</div>
<br/>

        <textarea
          placeholder="Write your review..."
          value={review}
          onChange={(e) => setReview(e.target.value)}
        ></textarea>
        <button type="submit">Submit</button>
      </form>
    </div>
    </div>
    <div className='LeftSide'>
    <img src="https://img.freepik.com/free-vector/medium-feedback-concept-illustrated_23-2148967055.jpg?w=740&t=st=1685721403~exp=1685722003~hmac=eb7db88485c2b7c08f59c4c92dc32d65cd92d74ee03d461c38f662e7f4c92433" alt='error'/>
    </div>
    </div>
    </div>
  );
}

export default App;
