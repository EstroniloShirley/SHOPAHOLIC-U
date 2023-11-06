import { useNavigate, Link } from 'react-router-dom';

export const Contact = () => {
  const navigate = useNavigate();
  //eslint-disable-next-line
  const handleSubmit = () => {
    console.log('------');
    return navigate('/');
  };

  return (
    <main>
      <form className="container mx-auto mt-30 py-20 w-1/2 ">
        <div className="con bg-gray-100 rounded-lg p-8 shadow-md">
          <h1 className="text-xl font-bold mb-2 text-pink-500 mt-5">
            Contact Shopaholic-U
          </h1>
          <p className="text-gray-700 text-sm leading-7">
            We'd love to hear from you! If you have any questions, concerns, or
            feedback, please feel free to get in touch with us. Your
            satisfaction is important to us, and we're here to assist you with
            any inquiries or support you might need.
          </p>
          <div className="mt-6">
            <h2 className="text-xl font-semibold mb-2 text-primary mt-5 ">
              Contact Information:
            </h2>
            <h2 className="text-lg font-semibold mb-2 text-primary mt-5">
              {' '}
              Via Facebook Messaging (Recommended){' '}
            </h2>
            <p className="text-xs hover:underline hover:text-pink-500">
              <Link to="https://www.facebook.com/messages/t/61553264665498">
                Message us on Facebook: @shopaholic.u.2023
              </Link>
            </p>
          </div>
          <div className="mt-8">
            <h2 className="text-xl font-semibold mb-2">Get in Touch</h2>
            <form className="grid grid-cols-1 gap-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="mt-1 p-3 focus:ring-primary focus:border-primary block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                  placeholder="Surname, Given Name M.I"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="mt-1 p-3 focus:ring-primary focus:border-primary block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                  placeholder="ShopaholicUstore@gmail.com"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="2"
                  className="mt-1 p-3 focus:ring-primary focus:border-primary block w-full shadow-sm sm:text-sm border-gray-300 rounded-md w-1/2"
                  placeholder="Enter your message here..."
                ></textarea>
              </div>
              <div>
                <button
                  to="ShopaholicUstore@gmail.com"
                  type="submit"
                  className="inline-flex items-center bg-pink-500 px-6 py-1 hover:text-white border border-transparent text-base leading-6 font-bold rounded-md text-black bg-primary hover:bg-primary-dark focus:outline-none focus:ring focus:ring-primary focus:ring-offset-primary active:bg-primary-dark transition duration-150 ease-in-out "
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </form>
    </main>
  );
};
