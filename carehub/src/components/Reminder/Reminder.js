import React, { useState } from 'react';
import './FormStyles.css';
import Sidebar from '../Sidebar/Sidebar';
import Navbar from '../Navbar/Navbar';
import '../main.css';

const Reminder = (props) => {
  const [bool, SetBool] = useState(false);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [title, setTitle] = useState('');
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState(null); // Store the selected image file
  const [cards, setCards] = useState([]);

  function handleMenu() {
    bool ? SetBool(false) : SetBool(true);
  }

  function toggleForm() {
    setIsFormOpen(!isFormOpen);
  }

  function handleSubmit(event) {
    event.preventDefault();

    // Create a new card object with the form data and the selected image
    const newCard = {
      title: title,
      name: name,
      description: description,
      image: URL.createObjectURL(image), // Convert the selected image to a data URL
    };

    setCards([...cards, newCard]);
    setTitle('');
    setName('');
    setDescription('');
    setImage(null); // Clear the selected image
  }

  function handleImageChange(event) {
    const selectedImage = event.target.files[0];
    setImage(selectedImage);
  }

  function handleAddImageButtonClick() {
    // Trigger the click event of the hidden file input element
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  }

  const fileInputRef = React.createRef(); // Create a ref for the file input

  return (
    <div>
      <Sidebar hide={bool && "55px"} active="active2" />
      <Navbar
        menu={handleMenu}
        style={{ left: bool && "60px", width: bool && "calc(100% - 60px)" }}
      />
      <section
        id="content"
        style={{ left: bool && "60px", width: bool && "calc(100% - 60px)" }}
      >
        <main className='charts'>
          <div className="head-title">
            <div className="left">
              <h1>Reminder</h1>
              <ul className="breadcrumb">
                <li>
                  <a href="#">Dashboard</a>
                </li>
                <li><i className='bx bx-chevron-right'></i></li>
                <li>
                  <a className="active" href="#">Reminder</a>
                </li>
              </ul>
            </div>
          </div>

          {/* Container for Form and Cards */}
          <div className="form-cards-container">
            <div className="buttons">
              <button className="button custom-button" onClick={toggleForm}>
                Button 1
              </button>
              <button className="button button2">Button 2</button>
            </div>

            {isFormOpen && (
              <form className="reminder-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="title">Title :</label>
                  <input
                    type="text"
                    id="title"
                    name="title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="name">Name :</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="description">Message :</label>
                  <textarea
                    id="description"
                    name="description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    required
                  ></textarea>
                </div>
                <div className="form-group">
                  {/* Hidden file input element */}
                  <input
                    type="file"
                    accept="image/*"
                    ref={fileInputRef}
                    style={{ display: 'none' }}
                    onChange={handleImageChange}
                  />
                  {/* Combined button for Add Image and Choose File */}
                  <button
                    type="button"
                    className="button custom-button"
                    onClick={handleAddImageButtonClick}
                  >
                    Add Image / Choose File
                  </button>
                  <button type="button" className="button button2">
                    Add Schedule
                  </button>
                </div>

                <button type="submit" className="submit-button">
                  Submit
                </button>
              </form>
            )}

            <div className="cards">
              {cards.map((card, index) => (
                <div className="card" key={index}>
                  <img src={card.image} alt="Card" />
                  <div className="card-content">
                    <h2>{card.title}</h2>
                    <p>Name: {card.name}</p>
                    <p>Message: {card.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </main>
      </section>
    </div>
  );
};

export default Reminder;
