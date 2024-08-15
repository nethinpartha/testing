
import { Home } from 'lucide-react';
import { getPage } from './_utils/utils';
import HomeSlider from '@/app/_components/HomeSlider';
// import { useEffect } from 'react';
// import directus from '@/app/_utils/directus';





export default async function HomePage({ directus }) {
  const [{ blocks: pageBlocks }] = await getPage('/');
  console.log(pageBlocks);
  return (
    <div className="container-fluid">
      {pageBlocks ? pageBlocks.map((block) =>
        <>
          {block.collection === 'block_hero_slider' && <div className=""><HomeSlider slides={block.item.slider_content} /></div>}
          {/* {block.collection === 'block_html' && <div dangerouslySetInnerHTML={{ __html: block.item.raw_html }}></div>} */}
        </>
      ) : <></>}

<section className="bg-red-600 text-white text-center py-12">
        <h1 className="text-3xl font-bold">EASY BANKING IN REAL-TIME</h1>
        <p className="text-center mt-4 text-lg">Bank effortlessly with our range of banking solutions designed to fit your lifestyle.</p>

        <div className="mt-8 flex justify-center space-x-8">

          <div className="flex flex-col items-center">
            <div className="bg-red-500 p-6 rounded-lg">


              <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.32812 12.7969C4.00141 12.7969 2.10938 10.9048 2.10938 8.57812C2.10938 6.25141 4.00141 4.35938 6.32812 4.35938C8.65484 4.35938 10.5469 6.25141 10.5469 8.57812C10.5469 10.9048 8.65484 12.7969 6.32812 12.7969Z" fill="white" />
                <path d="M29.6719 12.7969C27.3452 12.7969 25.4531 10.9048 25.4531 8.57812C25.4531 6.25141 27.3452 4.35938 29.6719 4.35938C31.9986 4.35938 33.8906 6.25141 33.8906 8.57812C33.8906 10.9048 31.9986 12.7969 29.6719 12.7969Z" fill="white" />
                <path d="M18 10.5469C15.0924 10.5469 12.7266 8.18107 12.7266 5.27344C12.7266 2.3658 15.0924 0 18 0C20.9076 0 23.2734 2.3658 23.2734 5.27344C23.2734 8.18107 20.9076 10.5469 18 10.5469Z" fill="white" />
                <path d="M19.0547 10.6533V17.9295C19.0547 18.5125 18.583 18.9842 18 18.9842C17.417 18.9842 16.9453 18.5125 16.9453 17.9295V10.6533C13.377 11.1706 10.6172 14.2202 10.6172 17.9295V24.2577C10.6172 24.8406 11.0889 25.3124 11.6719 25.3124H14.0347L14.8401 35.0338C14.8854 35.5796 15.3427 35.9999 15.8906 35.9999H20.1094C20.6573 35.9999 21.1146 35.5796 21.1599 35.0338L21.9653 25.3124H24.3281C24.9111 25.3124 25.3828 24.8406 25.3828 24.2577V17.9295C25.3828 14.2202 22.623 11.1706 19.0547 10.6533Z" fill="white" />
                <path d="M8.4375 24.3984V18.0703C8.4375 16.4894 8.86289 15.0203 9.54921 13.708C8.60217 13.1427 7.50895 12.7969 6.32812 12.7969C2.83859 12.7969 0 15.6355 0 19.125V24.3984C0 24.9814 0.471727 25.4531 1.05469 25.4531H2.20929L3.1692 35.0504C3.22277 35.589 3.67699 36 4.21875 36H8.4375C8.97926 36 9.43348 35.589 9.48705 35.0504L10.2666 27.2567C9.18977 26.7514 8.4375 25.6646 8.4375 24.3984Z" fill="white" />
                <path d="M36.001 19.125C36.001 15.6355 33.1624 12.7969 29.6729 12.7969C28.492 12.7969 27.3988 13.1427 26.4518 13.708C27.1381 15.0203 27.5635 16.4894 27.5635 18.0703V24.3984C27.5635 25.6646 26.8112 26.7514 25.7344 27.2567L26.5139 35.0504C26.5675 35.589 27.0217 36 27.5635 36H31.7822C32.324 36 32.7782 35.589 32.8318 35.0504L33.7917 25.4531H34.9463C35.5293 25.4531 36.001 24.9814 36.001 24.3984V19.125Z" fill="white" />
              </svg>

            </div>
            <p className="text-justify mt-4 font-semibold">BUSINESS</p>
          </div>


          <div className="flex flex-col items-center">
            <div className="bg-red-500 p-6 rounded-lg">

              <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_1_8630)">
                  <path d="M10.2539 4.10156C10.2539 1.83956 8.41434 0 6.15234 0C3.89034 0 2.05078 1.83956 2.05078 4.10156C2.05078 6.36356 3.89034 8.20312 6.15234 8.20312C8.41434 8.20312 10.2539 6.36356 10.2539 4.10156Z" fill="white" />
                  <path d="M33.9746 32.9491H32.9492V12.3046H33.9746C34.353 12.3046 34.7007 12.0963 34.8788 11.7628C35.0571 11.4292 35.0371 11.0247 34.8278 10.7104L30.7262 4.55806C30.3457 3.98716 29.4004 3.98716 29.0199 4.55806L24.9183 10.7104C24.709 11.0247 24.6889 11.4292 24.8673 11.7628C25.0454 12.0963 25.3931 12.3046 25.7715 12.3046H26.7969V32.9491H24.7461V16.4061H23.7207C23.1541 16.4061 22.6953 16.8649 22.6953 17.4315V32.9491H20.6445V20.5077H19.6191C19.0525 20.5077 18.5938 20.9664 18.5938 21.5331V32.9491H16.543V24.6093H15.5176C14.9509 24.6093 14.4922 25.068 14.4922 25.6346V32.9491H9.22852V24.6093H11.2793C11.8459 24.6093 12.3047 24.1505 12.3047 23.5839V14.3554C12.3047 10.9627 9.54494 8.20301 6.15234 8.20301C2.75974 8.20301 0 10.9627 0 14.3554V23.5839C0 24.1505 0.458756 24.6093 1.02539 24.6093H3.07617V32.9491H1.02539C0.458756 32.9491 0 33.4079 0 33.9745C0 34.5411 0.458756 34.9999 1.02539 34.9999H33.9746C34.5412 34.9999 35 34.5411 35 33.9745C35 33.4079 34.5412 32.9491 33.9746 32.9491Z" fill="white" />
                </g>
                <defs>
                  <clipPath id="clip0_1_8630">
                    <rect width="35" height="35" fill="white" />
                  </clipPath>
                </defs>
              </svg>

            </div>
            <p className="text-justify mt-4 font-semibold">PERSONAL</p>
          </div>


          <div className="flex flex-col items-center">
            <div className="bg-red-500 p-6 rounded-lg">

              <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5.2207 19.0332H8.25102V21.27H5.2207V19.0332Z" fill="white" />
                <path d="M31.9595 13.1084H1.9892C0.890574 13.1084 0 13.999 0 15.0976V32.0109C0 33.1094 0.890574 34 1.9892 34H31.9595C33.0582 34 33.9487 33.1094 33.9487 32.0108V15.0976C33.9487 13.999 33.0582 13.1084 31.9595 13.1084ZM8.02254 29.6837H3.09905V27.6945H8.02254V29.6837ZM10.2401 21.6016C10.2401 22.5156 9.49649 23.2593 8.58248 23.2593H4.88903C3.97501 23.2593 3.23139 22.5156 3.23139 21.6016V18.7018C3.23139 17.7878 3.97501 17.0442 4.88903 17.0442H8.58241C9.49643 17.0442 10.24 17.7878 10.24 18.7018L10.2401 21.6016ZM15.6316 29.6837H10.7081V27.6945H15.6316V29.6837ZM23.2407 29.6837H18.3172V27.6945H23.2407V29.6837ZM30.8497 29.6837H25.9262V27.6945H30.8497V29.6837Z" fill="white" />
                <path d="M26.7027 4.83208L22.4532 0.582615C21.6764 -0.194205 20.4169 -0.194205 19.6401 0.582615L9.10352 11.1192H20.7748L26.7027 4.83208Z" fill="white" />
                <path d="M26.5815 11.1191L29.6919 7.82026L28.1109 6.23926L23.5098 11.1191H26.5815Z" fill="white" />
                <path d="M31.9587 11.1192C32.3859 11.1192 32.7974 11.1877 33.1835 11.313L31.0981 9.22754L29.3145 11.1193L31.9587 11.1192Z" fill="white" />
              </svg>
            </div>
            <p className="text-justify mt-4 font-semibold">CARDS</p>
          </div>
        </div>
      </section>
      <section className="text-center py-12 w-2/3 mx-auto">
        <h1 className="text-3xl font-bold">YOUR DIGITAL BANKING SPACE</h1>
        <p className="text-justify mt-4 text-lg">Experience 24/7 access to all your banking services with our thorough digital services. Our user-friendly app and online platform provide you with complete control over your finances. From checking balances and transferring money to paying bills and customizing your card, everything you need is just a tap away.</p>

        <div className="mt-8 container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-4 ">

          <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg">
            <img src={`${process.env.NEXT_PUBLIC_API_URL}/assets/5d65e407-185c-4292-8bdf-88b07216ae47`} alt="Open An Account" className="rounded-t-lg" />
            <h3 className="mt-4 text-xl font-semibold">Open An Account</h3>
            <p className="text-justify mt-2 text-gray-600">Open various types of bank accounts like savings, and business accounts directly from the app without needing to visit a physical branch.</p>
          </div>

          <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg">
            <img src={`${process.env.NEXT_PUBLIC_API_URL}/assets/a97ddd90-4305-4516-8c1d-9f7604e48bfd`} alt="Card Personalization" className="rounded-t-lg" />
            <h3 className="mt-4 text-xl font-semibold">Card Personalization</h3>
            <p className="text-justify mt-2 text-gray-600">Request a new card to manage everyday transactions and ensure easy cancellation, we prioritize your convenience and security.</p>
          </div>

          <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg">
            <img src={`${process.env.NEXT_PUBLIC_API_URL}/assets/742d7fa9-46ef-4971-818b-43ef3454f212`} alt="ATM & Branch Locator" className="rounded-t-lg" />
            <h3 className="mt-4 text-xl font-semibold">ATM & Branch Locator</h3>
            <p className="text-justify mt-2 text-gray-600">Find the nearest ATMs and bank branches quickly and conveniently. Detailed information about each ATM/branch including address, operating hours, and available services.</p>
          </div>


          <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg">
            <img src={`${process.env.NEXT_PUBLIC_API_URL}/assets/b361121f-d173-4c28-90ea-3a75bfe79fe1`} alt="Online Banking" className="rounded-t-lg" />
            <h3 className="mt-4 text-xl font-semibold">Online Banking</h3>
            <p className="text-justify mt-2 text-gray-600">The "Online Banking" feature provides users with a step-by-step suite of banking services accessible from their mobile devices.</p>
          </div>
        </div>
      </section>
      <section className="flex flex-col lg:flex-row items-center justify-center lg:justify-between py-12 px-6 lg:px-24 container">
        <div className="mb-8 lg:mb-0 lg:mr-8">
          <img src={`${process.env.NEXT_PUBLIC_API_URL}/assets/fac66235-09d5-4c5c-83b3-c443f73a5482`} alt="ATM Usage" className="rounded-lg shadow-lg" />
        </div>
        <div className="text-center lg:text-left">
          <h1 className="text-4xl font-bold">SMART & CONVENIENCE</h1>
          <p className="text-justify mt-4 text-lg">Locate our self-service ATMs at vantage points and settle all money matters!</p>
          <button className="mt-6 px-6 py-3 bg-black text-white rounded-full">Locate ATM</button>
        </div>
      </section>
      <section className="bg-red-600 text-white text-center py-12 px-4">
        <h1 className="text-3xl font-bold mb-8">MORE ONLINE SERVICES</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 container">

          <div className="bg-white text-gray-800 py-6 rounded-lg shadow-lg px-10">
            <h3 className="text-xl font-semibold mb-2">Cheque Book Request</h3>
            <p className="text-justify mb-4">Submit requests online, anytime, whether you need a new chequebook or special services, simply fill out a request form, and we'll handle the rest.</p>
            <div className="text-right">
              <a href="#" className="text-gray-800 text-xl font-semibold">→</a>
            </div>
          </div>


          <div className="bg-white text-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-2">Track Your Request</h3>
            <p className="text-justify mb-4">Monitor the status of your requests in real-time. Receive notifications and updates directly through your online account.</p>
            <div className="text-right">
              <a href="#" className="text-gray-800 text-xl font-semibold">→</a>
            </div>
          </div>


          <div className="bg-white text-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-2">Card Activation / Pin Change</h3>
            <p className="text-justify mb-4">Activate your new card or change your PIN easily through our secure online portal. Enjoy immediate access and enhanced security features.</p>
            <div className="text-right">
              <a href="#" className="text-gray-800 text-xl font-semibold">→</a>
            </div>
          </div>


          <div className="bg-white text-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-2">Card Block/Replacement</h3>
            <p className="text-justify mb-4">Lost or stolen card? Block it instantly online and request a replacement card with just a few clicks to ensure your account's security.</p>
            <div className="text-right">
              <a href="#" className="text-gray-800 text-xl font-semibold">→</a>
            </div>
          </div>


          <div className="bg-white text-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-2">Update Details</h3>
            <p className="text-justify mb-4">Update your personal and contact details quickly and securely. Ensure your account information is always accurate and up-to-date.</p>
            <div className="text-right">
              <a href="#" className="text-gray-800 text-xl font-semibold">→</a>
            </div>
          </div>


          <div className="bg-white text-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-2">Link Account</h3>
            <p className="text-justify mb-4">Easily link your accounts to your mobile device for streamlined management and transfers. Keep all your finances in one place.</p>
            <div className="text-right">
              <a href="#" className="text-gray-800 text-xl font-semibold">→</a>
            </div>
          </div>
        </div>
      </section>
      <section className="text-center py-12 px-4 container">
        <h1 className="text-3xl font-bold mb-8">EXPLORE MORE...</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white text-gray-800 p-6 rounded-lg shadow-lg">
            <img src={`${process.env.NEXT_PUBLIC_API_URL}/assets/a078e7f8-0063-437b-98fb-8acf8358a972`} alt="Give your kids a great start" className="rounded-t-lg w-full h-48 object-cover" />
            <h3 className="text-xl font-semibold mt-4">Give your kids a great start</h3>
            <p className="text-justify mt-2">Open a youth account with easy-to-use features and parental controls. Teach your children good financial habits while giving them the freedom to manage their money safely.</p>
          </div>


          <div className="bg-white text-gray-800 p-6 rounded-lg shadow-lg">
            <img src={`${process.env.NEXT_PUBLIC_API_URL}/assets/b995fc8b-2a3a-480b-b16e-c9eac2b31240`} alt="Convenient Banking" className="rounded-t-lg w-full h-48 object-cover" />
            <h3 className="text-xl font-semibold mt-4">Convenient Banking</h3>
            <p className="text-justify mt-2">Enjoy easy, fast, and secure banking services anytime, anywhere.</p>
          </div>


          <div className="bg-white text-gray-800 p-6 rounded-lg shadow-lg">
            <img src={`${process.env.NEXT_PUBLIC_API_URL}/assets/5a5bf951-314a-49ef-96a8-4a38a81a3890`} alt="Get in the groove" className="rounded-t-lg w-full h-48 object-cover" />
            <h3 className="text-xl font-semibold mt-4">Get in the groove</h3>
            <p className="text-justify mt-2">Benefit from our flexible financial options with competitive rates and fast transactions. Get on the road quickly with a financing plan made just for you.</p>
          </div>


          <div className="bg-white text-gray-800 p-6 rounded-lg shadow-lg">
            <img src={`${process.env.NEXT_PUBLIC_API_URL}/assets/8699e3d8-c0d3-4c7a-b246-404372d760ac`} alt="Enjoy special deals as Retail Partners" className="rounded-t-lg w-full h-48 object-cover" />
            <h3 className="text-xl font-semibold mt-4">Enjoy special deals as Retail Partners</h3>
            <p className="text-justify mt-2">Sign up easily to become a retail partner or agent. Enjoy benefits like commissions on transactions and attract more customers to your location.</p>
          </div>
        </div>
      </section>
    </div>
  );
}