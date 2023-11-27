import { Card } from "@material-tailwind/react";
import Navbar from "../components/Navbar";

const NewPage = () => {
  const services = [
    {
      img_url: "https://cdn-icons-png.flaticon.com/512/2920/2920329.png",
      title: "Apps Development",
      description:
        "Transform your ideas into reality with our expert team of mobile app developers. We deliver cutting-edge native and cross-platform iOS and Android solutions to bring your business or consumer applications to market.",
    },
    {
      img_url: "https://cdn-icons-png.flaticon.com/512/841/841364.png",
      title: "Web Development",
      description:
        "Crafting exceptional web experiences goes beyond coding for us. Our web development team combines skill and experience to create websites that stand out, delivering more than just good coding – we deliver a complete online presence.",
    },
    {
      img_url: "https://cdn-icons-png.flaticon.com/512/10061/10061767.png",
      title: "Software Development",
      description:
        "Unlock the full potential of your business with our efficient and effective software development service. Our expert software developers manage your software assets, ensuring seamless integration and innovation.",
    },
    {
      img_url: "https://cdn-icons-png.flaticon.com/512/1006/1006627.png",
      title: "Imagine Independent",
      description:
        "Empower yourself with extra options and a global perspective. Position yourself to serve the world and thrive in the emerging global economy with Imagine Independent.",
    },
    {
      img_url: "https://cdn-icons-png.flaticon.com/512/1998/1998087.png",
      title: "Digital Marketing",
      description:
        "Stand out in the digital landscape with our digital marketing services. Gain the extra options needed to better position yourself for success in the evolving global economy.",
    },
    {
      img_url: "https://cdn-icons-png.flaticon.com/512/2316/2316109.png",
      title: "Alibaba Cloud Servers",
      description:
        "Elevate your digital presence with Alibaba Cloud Servers. Gain the extra options needed to better position yourself for success in the evolving global economy.",
    },
    {
      img_url: "https://cdn-icons-png.flaticon.com/512/7925/7925621.png",
      title: "Web Hosting",
      description:
        "Experience reliable and secure web hosting services. Give yourself the extra options to better serve your world and position yourself for success in the emerging global economy.",
    },
    {
      img_url: "https://cdn-icons-png.flaticon.com/512/6200/6200442.png",
      title: "Domains Registration",
      description:
        "Secure your online identity with our domain registration services. Gain the extra options needed to better position yourself for success in the evolving global economy.",
    },
    {
      img_url: "https://cdn-icons-png.flaticon.com/512/9398/9398327.png",
      title: "Cloud Shared Hosting",
      description:
        "Experience the power of cloud shared hosting. Give yourself extra options and become better positioned to serve your world and thrive in the emerging global economy.",
    },
    {
      img_url: "https://cdn-icons-png.flaticon.com/512/9362/9362326.png",
      title: "Reseller Hosting",
      description:
        "Unlock opportunities with our reseller hosting services. Gain the extra options needed to better position yourself for success in the evolving global economy.",
    },
    {
      img_url: "https://cdn-icons-png.flaticon.com/512/10829/10829170.png",
      title: "Google One Setup",
      description:
        "Optimize your digital experience with Google One. Gain the extra options needed to better position yourself for success in the evolving global economy.",
    },
    {
      img_url: "https://cdn-icons-png.flaticon.com/512/6472/6472048.png",
      title: "SSL Certificate",
      description:
        "Ensure security with SSL certificates. Gain the extra options needed to better position yourself for success in the evolving global economy.",
    },
    {
      img_url: "https://cdn-icons-png.flaticon.com/512/273/273564.png",
      title: "SEO",
      description:
        "Boost your online visibility with our SEO services. Gain the extra options needed to better position yourself for success in the evolving global economy.",
    },
    {
      img_url: "https://cdn-icons-png.flaticon.com/512/3649/3649431.png",
      title: "Bulk SMS",
      description:
        "Connect with your audience through bulk SMS services. Gain the extra options needed to better position yourself for success in the evolving global economy.",
    },
    {
      img_url: "https://cdn-icons-png.flaticon.com/512/2314/2314577.png",
      title: "Custom Service",
      description:
        "Tailored solutions for your unique needs. Gain the extra options needed to better position yourself for success in the evolving global economy.",
    },
  ];

  const plans = [
    {
      title: "BASIC PLAN",
      price: "Rs 30,0000.00",
      features: [
        "5GB Storage",
        "50GB Bandwidth",
        "Pre Made Themes",
        "Free CDN",
        "Renew Rs.250,000/year",
      ],
    },
    {
      title: "STANDARD PLAN",
      price: "Rs 30,0000.00",
      popular: true,
      features: [
        "20GB Storage",
        "300GB Bandwidth",
        "Custom Themes",
        "Free CDN",
        "Renew Rs.350,000/year",
      ],
    },
    {
      title: "PREMIUM PLAN",
      price: "Rs 30,0000.00",
      features: [
        "40GB Storage",
        "400GB Bandwidth",
        "Custom Theme",
        "Daily Backup",
        "Renew Rs.250,000/year",
      ],
    },
  ];

  const teamData = [
    {
      name: "Aman Adhikari",
      role: "CEO Founder",
      image: "image/n.jpg",
    },
    {
      name: "Bishal Pokhrel",
      role: "Director",
      image: "image/o.jpg",
    },
    {
      name: "Aashish Jung Xettri",
      role: "Graphic Designer",
      image: "image/k.jpg",
    },
    {
      name: "Saroj Raj Shahi",
      role: "Manager",
      image: "image/j.jpg",
    },
  ];

  const blogs = [
    {
      title: "Digital Product Design",
      image:
        "https://alpharic.com/jufatchi/2023/07/digital-product-design.webp",
      description:
        "Digital product design has become an essential aspect of business success in the technology industry. In today’s competitive market, companies need to create user-centric products that not only meet the",
    },
    {
      title: "Cloud & DevOps",
      image: "https://alpharic.com/jufatchi/2023/07/cloud-and-devops.webp",
      description:
        "Digital product design has become an essential aspect of business success in the technology industry. In today’s competitive market, companies need to create user-centric products that not only meet the",
    },
    {
      title: "How Software Development Can Transform Your Business",
      image: "https://alpharic.com/jufatchi/2023/07/software-development.webp",
      description:
        "Digital product design has become an essential aspect of business success in the technology industry. In today’s competitive market, companies need to create user-centric products that not only meet the",
    },
  ];

  const clientImages = [
    { src: "image/t.jpg" },
    { src: "image/i.jpg" },
    { src: "image/p.jpg" },
    { src: "image/l.jpg" },
    { src: "image/q.jpg" },
    { src: "image/m.jpg" },
    { src: "image/b.jpg" },
    { src: "image/c.jpg" },
    { src: "image/u.jpg" },
  ];

  return (
    <div>
      <Navbar />
      <div
        className="msm:grid-cols-1 mmd:grid-cols-2"
        style={{
          backgroundImage: `url('https://i.ytimg.com/vi/KDf8n0IJqcs/maxresdefault.jpg')`,
        }}
      >
        <div className=" sm:flex sm:py-10 msm:py-20">
          <div className=" sm:px-36 msm:px-5 sm:py-40 msm:py-5 ">
            <h1 className="font-bold  sm:text-5xl text-white msm:text-3xl animate-bounce">
              Better Solutions For Your Business
            </h1>
            <div className="py-2">
              <h1 className="font-medium text-lg text-blue-100">
                We are team of talented designers making websites with Imagine
                Infotech
              </h1>
            </div>
          </div>
          <div className="">
            <img
              className="sm:h-[500px] sm:w-[700px]"
              src="https://www.imagineinfosys.com/images/IMG-2262-removebg-preview.png"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className=" bg-blue-gray-50/50">
        <div className="bg-blue-gray-50 text-center">
          <h1 className="text-4xl font-bold py-10 bg-blue-10 text-gray-800 ">
            About Us
          </h1>
        </div>

        <div className="grid grid-cols-1 gap-2 lg:grid-cols-3 py-10 container mx-auto">
          <div className="col-span-1">
            <Card className="p-2 border-l-2 rounded">
              <h1 className="text-center text-xl">Imagine Infotech</h1>
              <p className="text-center py-5">
                Imagine Infotech is a leading IT company based in Kathmandu that
                specializes in website development, hosting, and domain
                registration services. Our team of experienced and skilled
                developers is committed to delivering top-notch services that
                exceed our clients' expectations.
              </p>
            </Card>
          </div>

          <div className="col-span-1 lg:col-span-2">
            <Card className="rounded">
              <h1 className="text-gray-800 space-x-5 py-8 text-justify px-5 ">
                When it comes to website development, we understand that every
                business is unique and has its own set of requirements.
                Therefore, we take a customized approach to website development
                that is tailored to meet our clients' specific needs. Our team
                works closely with clients to understand their business, their
                goals, and their target audience, ensuring that we deliver a
                website that is not only visually appealing but also functional
                and user-friendly. At Imagine infotech , we also offer reliable
                and affordable hosting services to ensure that our clients’
                websites are always up and running. Our hosting plans are
                designed to meet the needs of businesses of all sizes, from
                small startups to large enterprises. We use the latest
                technologies and employ stringent security measures to ensure
                that our clients’ websites are always secure and protected. In
                addition to website development and hosting, we also offer
                domain registration services to help businesses establish their
                online presence. We can help clients register their domain name
                and manage their domain records, ensuring that their website is
                easily accessible to their target audience. In conclusion, at
                imagine infotech, we are passionate about helping businesses
                succeed online. Whether you need a new website, reliable
                hosting, or domain registration services, we have the expertise
                and experience to help you achieve your goals. Contact us today
                to learn more about our services and how we can help your
                business grow.
              </h1>
            </Card>
          </div>
        </div>
      </div>

      {/* SERVICE */}

      <div className="bg-blue-gray-50/50 container mx-auto">
        <div className="container mx-auto">
          <div className="text-center py-14">
            <h1 className="text-4xl font-bold text-gray-800 ">Our Service</h1>
            <div className="py-1">
              <p className="text-sm font-bold text-gray-700">
                Discover our comprehensive range of services tailored to meet
                your unique needs and drive your business forward.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {services.map((service, index) => (
              <div key={index} className="p-4">
                <img
                  className="h-20 w-20 mx-auto mb-4"
                  src={service.img_url}
                  alt={`Icon for ${service.title}`}
                />
                <h2 className="text-xl font-bold text-blue-700">
                  {service.title}
                </h2>
                <p className="text-gray-600 text-justify">
                  {service.description}
                </p>
                <button className="mt-4 bg-blue-200/20 text-blue-500 px-4 py-2 rounded hover:bg-blue-200/30 hover:text-blue-600">
                  Learn More <i className="fa-solid fa-arrow-right"></i>
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* PRICING */}
      <div className="bg-white">
        <div className="py-14 container mx-auto">
          <div className="font-bold text-center">
            <h2 className="text-4xl text-gray-800">PRICING</h2>
            <p className="text-gray-700">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe
              beatae ut quos vitae nobis facilis !
            </p>
          </div>
          <div className="flex flex-wrap justify-center divide-x mt-16">
            {plans.map((plan, index) => (
              <div key={index}>
                <div
                  className={`min-w-[300px] relative ${
                    plan.popular && "border-t-2 border-indigo-400"
                  }`}
                >
                  {plan.popular && (
                    <small className="absolute right-0 top-0 px-2 pb-1 bg-indigo-400 text-white rounded-bl-lg">
                      popular
                    </small>
                  )}
                  <div className="py-8">
                    <div className="text-center">
                      <h1 className="font-bold text-2xl text-blue-400">
                        {plan.title}
                      </h1>
                    </div>
                    <div className="text-black px-8 py-3">
                      <p className="text-2xl">{plan.price}</p>
                      <ul className="list-disc list-inside space-y-3 py-3">
                        {plan.features.map((feature, featureIndex) => (
                          <li key={featureIndex}>{feature}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="px-16 pb-8">
                    <button className=" bg-blue-200/20 text-blue-500 px-4 py-2 rounded hover:bg-blue-200/30 hover:text-blue-600">
                      Continue With This{" "}
                      <i className="fa-solid fa-arrow-right"></i>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Our Recent Blog */}
      <div className="py-14 container mx-auto">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800">Our Recent Blog</h1>
        </div>
        <div className="text-center py-2">
          <h1 className="text-base font-bold text-gray-700">
            Discover our latest blog, packed with insights, trends, and <br />{" "}
            expert perspectives on the cutting-edge of technology.
          </h1>
        </div>

        <div className="py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2">
          {blogs.map((blog, index) => (
            <article key={index} className="overflow-hidden">
              <img
                alt={blog.title}
                src={blog.image}
                className="h-56 w-full object-cover rounded-xl"
              />

              <div className="bg-white p-4 sm:p-6">
                <time
                  datetime="2022-10-10"
                  className="block text-xs text-gray-500"
                >
                  10th Oct 2024
                </time>

                <a href="#">
                  <h3 className="mt-0.5 text-lg text-gray-900 line-clamp-2">
                    {blog.title}
                  </h3>
                </a>

                <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
                  {blog.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Our Clients */}
      <div className="bg-white px-20 py-10">
        <div className="py-10">
          <h1 className="text-center font-bold text-4xl text-gray-800">
            Our Clients
          </h1>
        </div>
        <div className="columns-1 gap-1 sm:columns-2 md:columns-3 lg:columns-4 [&>img:not(:first-child)]:mt-8">
          {clientImages.map((image) => (
            <div key={image.src} className="p-3">
              <img
                className="transform hover:scale-105 duration-300"
                src={image.src}
                alt=""
              />
            </div>
          ))}
        </div>
      </div>

      {/* meet our team */}

      <div className="bg-gradient-to-br from-gray-100 to-gray-200 py-14">
        <div className=" container mx-auto">
          <div className="text-center text-gray-800">
            <h1 className="text-4xl">Meet Our Team</h1>
          </div>
          <div className="text-gray-700 text-center ">
            <p className="text-lg px-20">
              Introducing our exceptional teams, driven by passion and
              expertise, ready to collaborate and <br /> bring your vision to
              life.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 px-8 py-5 md:px-12">
            {teamData.map((member, index) => (
              <div key={index}>
                <div className="bg-white rounded-lg text-gray-800 shadow-xl relative pt-16 mt-16">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-28 h-28 object-cover rounded-full shadow-2xl mx-auto absolute -top-14 left-1/2 -translate-x-1/2"
                  />
                  <div className="pb-5 text-center">
                    <h3 className="text-lg font-bold text-gray-800">
                      {member.name}
                    </h3>
                    <p className="text-gray-700 font-bold text-sm">
                      {member.role}
                    </p>
                    <div className="flex gap-2 justify-center mt-2">
                      <i className="fa-brands fa-github text-indigo-500"></i>
                      <i className="fa-brands fa-twitter text-indigo-500"></i>
                      <i className="fa-brands fa-linkedin text-indigo-500"></i>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* footer */}

      <div className="bg-gray-900 py-10">
        <div className="grid grid-cols-5 sm:px-5 msm:px-12 msm:gap-10 py-10 msm:grid-cols-1 mmd:grid-cols-2">
          <div>
            <h1 className="py-1 px-3 text-2xl text-white">IMAGINE INFOTECH </h1>
            <h1 className="text-white text-justify">
              Imagine Infotech is the only IT training institute in Kathmandu,
              Nepal offering paid internships after the course completion.
              Carrying more than 5 years of experience in training with various
              courses covering everything from programming to designing and
              marketing, our professional instructor of highly educated
              educators is committed to assisting you in succeeding.
            </h1>
          </div>

          <div className=" sm:px-20  text-white space-y-3 text-sm">
            <h1 className="text-2xl font-bold ">COMPANY</h1>
            <h1 className="font-bold">About Us</h1>
            <h1 className="font-bold "> Our Service</h1>
            <h1 className="font-bold">Contact Us</h1>
            <h1 className="font-bold">Online admisson </h1>
            <h1 className="font-bold">Course</h1>
          </div>

          <div className="text-white space-y-3 text-sm ">
            <h1 className=" sm:px-25 text-2xl font-bold  ">CONTACT US</h1>
            <h1>IMAGINE INFOTECH</h1>
            <h1>Kathmandu PutaliSadak</h1>
            <h1>Nepalgunj-11' Banke</h1>Nepalgunj-11' Banke Nepal
            <p>Phone: +977 9768451222</p>
            <p>Email:imagineinfotech4@gmail.com</p>
          </div>

          <div className="text-white ">
            <h1 className=" text-2xl font-bold underline-offset-1">
              IMPORTANT LINKS
            </h1>
            <div className="flex space-x-5  sm:py-5">
              <i className="fa-brands fa-facebook  transform hover:scale-105 transition-transform duration-300 "></i>
              <i className="fa-brands fa-instagram  transform hover:scale-105 transition-transform duration-300"></i>
              <i className="fa-brands fa-tiktok  transform hover:scale-105 transition-transform duration-300"></i>
              <i className="fa-brands fa-viber  transform hover:scale-110 transition-transform duration-300"></i>
              <i className="fa-brands fa-whatsapp  transform hover:scale-105 transition-transform duration-300"></i>
            </div>
          </div>
          <div>
            <h1 className="text-center text-2xl  font-bold text-white">
              WE ACCEPT
            </h1>
            <div className="flex  gap-4 py-3 ">
              <div className="">
                <img
                  className="h-[50px] w-[60px]  transform hover:scale-105 transition-transform duration-300"
                  src="https://th.bing.com/th/id/OIP.wPj2u0L9A6vbH9af1DwPhgHaD4?pid=ImgDet&rs=1"
                  alt=""
                />
              </div>
              <div>
                <img
                  className="h-[50px] w-[60px] transform hover:scale-105 transition-transform duration-300 "
                  src="https://th.bing.com/th/id/OIP.1tj_vA3gLSXBJ1exP5VkFAHaFk?pid=ImgDet&rs=1"
                  alt=""
                />
              </div>
              <div>
                <img
                  className="h-[50px] w-[60px] transform hover:scale-105 transition-transform duration-300"
                  src="https://lh3.googleusercontent.com/daBK0EXWm2fMFeupwWSefARuzuvookgy6wDy0dJyHSYrn88jtyDbN2r_KLpB_7F07Rc"
                  alt=""
                />
              </div>
              <div>
                <img
                  className="h-[50px] w-[60px] transform hover:scale-105 transition-transform duration-300"
                  src="https://th.bing.com/th/id/R.ab32ab77428180fd8e2f89af55909d11?rik=rOONsXzuqHJ1TA&riu=http%3a%2f%2fwww.cultureartgroup.com%2fimages%2fpayment%2f1.png&ehk=uGSpmXy91FCyFQxTEIaVZfiHWU3FPswOsmE6bszlv4Y%3d&risl=&pid=ImgRaw&r=0"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default NewPage;
