import { Card } from "@material-tailwind/react";
import Navbar from "../components/Navbar";

const HomePage = () => {
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
      <div className=" bg-blue-gray-200">
        <div className="bg-blue-gray-300  text-center">
          <h1 className="text-4xl font-bold py-10 bg-blue-10 text-green-900 ">
            About Us
          </h1>
        </div>

        <div className="grid grid-cols-3 py-10 sm:px-8 msm:px-3 msm:grid-cols-1    mmd:grid-cols-2 msm:gap-10 ">
          <div className="col-span-1">
            <Card className="h-[300px] w-[350px]">
              <h1 className="text-center">Imagine Infotech</h1>
              <p className="text-center py-5">
                Imagine Infotech is a leading IT company based in Kathmandu that
                specializes in website development, hosting, and domain
                registration services. Our team of experienced and skilled
                developers is committed to delivering top-notch services that
                exceed our clients' expectations.
              </p>
            </Card>
          </div>

          <div className="col-span-2">
            <Card className="  h-[400px] w-[800px]  msm:h-[950px] msm:w-[350px]">
              <h1 className="text-black space-x-5 py-8 text-justify px-5 ">
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

      <div className="bg-blue-gray-300">
        <div className="text-center py-14">
          <h1 className="text-4xl font-bold text-green-900 ">Our Service</h1>
          <div className="py-1">
            <p className="text-sm font-bold">
              Discover our comprehensive range of services tailored to <br />{" "}
              meet your unique needs and drive your business forward.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-3 py-10 px-20 msm:px-3 gap-20  msm:grid-cols-1 mmd:grid-cols-2">
          <div className=" ">
            <Card className="h-[350px]  w-[350px] transform hover:scale-105 transition-transform duration-300 ">
              <div className="flex items-center justify-center">
                <img
                  className="h-[60px] w-[60px] "
                  src="https://www.imagineinfosys.com/images/Domain-hosting-removebg-preview.png"
                  alt=""
                />
              </div>

              <h1 className="text-center font-bold text-2xl text-blue-700">
                Apps Development
              </h1>
              <h1 className="text-center text-2xl py-3 ">
                {" "}
                We deliver native and cross-platform iOS and Android mobile
                solutions for business and consumer applications to bring your
                project to market.
              </h1>
              <h1 className="text-center py-5 font-bold hover:bg-blue-800 hover:text-red-900">
                {" "}
                Learn More <i class="fa-solid fa-arrow-right"></i>
              </h1>
            </Card>
          </div>

          <div>
            <Card className="h-[350px]  w-[350px] py-2 transform hover:scale-105 transition-transform duration-300">
              <div className="flex items-center justify-center">
                <img
                  className="h-[60px] w-[60px] "
                  src="https://www.imagineinfosys.com/images/web-dev%20icon.png"
                  alt=""
                />
              </div>
              <h1 className="text-center font-bold text-2xl text-blue-700">
                Web Development
              </h1>
              <h1 className="text-center text-2xl py-3 ">
                {" "}
                We carry more than just good coding skills. Our experience makes
                us stand out from other web development.
              </h1>
              <h1 className="text-center py-8 font-bold hover:bg-blue-800 hover:text-red-900">
                {" "}
                Learn More <i class="fa-solid fa-arrow-right"></i>
              </h1>
            </Card>
          </div>
          <div>
            <Card className="h-[350px]  w-[350px] transform hover:scale-105 transition-transform duration-300">
              <div className="flex items-center justify-center">
                <img
                  className="h-[60px] w-[60px] py-2 "
                  src="https://www.imagineinfosys.com/images/news-portal-icon-removebg-preview.png"
                  alt=""
                />
              </div>
              <h1 className="text-center font-bold text-2xl text-blue-700">
                Software Development
              </h1>
              <h1 className="text-center text-2xl py-3 ">
                We offer an efficient and effective software development service
                that manages the software assets with our expert software
                developers.
              </h1>
              <h1 className="text-center py-5 font-bold hover:bg-blue-800 hover:text-red-900">
                {" "}
                Learn More <i class="fa-solid fa-arrow-right"></i>
              </h1>
            </Card>
          </div>

          <div>
            <Card className=" h-[350px]  w-[350px] py-2 transform hover:scale-105 transition-transform duration-300">
              <div className="flex items-center justify-center">
                <img
                  className="h-[60px] w-[60px] "
                  src="https://www.imagineinfosys.com/images/team-icon.png"
                  alt=""
                />
              </div>
              <h1 className="text-center font-bold text-2xl text-blue-700">
                Imagine independent
              </h1>
              <h1 className="text-center text-2xl  py-3">
                Give yourself extra options and become better positioned to
                serve your world and position yourself for what the emerging
                global economy wants..
              </h1>
              <h1 className="text-center py-5 font-bold hover:bg-blue-800 hover:text-red-900">
                {" "}
                Learn More <i class="fa-solid fa-arrow-right"></i>
              </h1>
            </Card>
          </div>

          <div>
            <Card className=" h-[350px]  w-[350px] py-2 transform hover:scale-105 transition-transform duration-300">
              <div className="flex items-center justify-center">
                <img
                  className="h-[60px] w-[60px] "
                  src="https://www.imagineinfosys.com/images/team-icon.png"
                  alt=""
                />
              </div>
              <h1 className="text-center font-bold text-2xl text-blue-700">
                Digital Marketing
              </h1>
              <h1 className="text-center text-2xl py-3 ">
                Give yourself extra options and become better positioned to
                serve your world and position yourself for what the emerging
                global economy wants..
              </h1>
              <h1 className="text-center py-5 font-bold hover:bg-blue-800 hover:text-red-900">
                {" "}
                Learn More <i class="fa-solid fa-arrow-right"></i>
              </h1>
            </Card>
          </div>

          <div>
            <Card className=" h-[350px]  w-[350px] py-2 transform hover:scale-105 transition-transform duration-300">
              <div className="flex items-center justify-center">
                <img
                  className="h-[60px] w-[60px] "
                  src="https://www.imagineinfosys.com/images/team-icon.png"
                  alt=""
                />
              </div>
              <h1 className="text-center font-bold text-2xl text-blue-700">
                Social Branding
              </h1>
              <h1 className="text-center text-2xl py-3">
                Give yourself extra options and become better positioned to
                serve your world and position yourself for what the emerging
                global economy wants..
              </h1>
              <h1 className="text-center py-5 font-bold hover:bg-blue-800 hover:text-red-900">
                {" "}
                Learn More <i class="fa-solid fa-arrow-right"></i>
              </h1>
            </Card>
          </div>

          <div>
            <Card className=" h-[350px]  w-[350px] py-2 transform hover:scale-105 transition-transform duration-300">
              <div className="flex items-center justify-center">
                <img
                  className="h-[60px] w-[60px] "
                  src="https://www.imagineinfosys.com/images/team-icon.png"
                  alt=""
                />
              </div>
              <h1 className="text-center font-bold text-2xl text-blue-700">
                Alibaba Cloud Servers
              </h1>
              <h1 className="text-center text-2xl py-3 ">
                Give yourself extra options and become better positioned to
                serve your world and position yourself for what the emerging
                global economy wants..
              </h1>
              <h1 className="text-center py-5 font-bold hover:bg-blue-800 hover:text-red-900">
                {" "}
                Learn More <i class="fa-solid fa-arrow-right"></i>
              </h1>
            </Card>
          </div>

          <div>
            <Card className=" h-[350px]  w-[350px] py-2 transform hover:scale-105 transition-transform duration-300">
              <div className="flex items-center justify-center">
                <img
                  className="h-[60px] w-[60px] "
                  src="https://www.imagineinfosys.com/images/team-icon.png"
                  alt=""
                />
              </div>
              <h1 className="text-center font-bold text-2xl text-blue-700">
                Web Hosting
              </h1>
              <h1 className="text-center text-2xl  py-3">
                Give yourself extra options and become better positioned to
                serve your world and position yourself for what the emerging
                global economy wants..
              </h1>
              <h1 className="text-center py-5 font-bold hover:bg-blue-800 hover:text-red-900">
                {" "}
                Learn More <i class="fa-solid fa-arrow-right"></i>
              </h1>
            </Card>
          </div>

          <div>
            <Card className=" h-[350px]  w-[350px] py-2 transform hover:scale-105 transition-transform duration-300">
              <div className="flex items-center justify-center">
                <img
                  className="h-[60px] w-[60px] "
                  src="https://www.imagineinfosys.com/images/team-icon.png"
                  alt=""
                />
              </div>
              <h1 className="text-center font-bold text-2xl text-blue-700">
                Domains Registration
              </h1>
              <h1 className="text-center text-2xl py-3 ">
                Give yourself extra options and become better positioned to
                serve your world and position yourself for what the emerging
                global economy wants..
              </h1>
              <h1 className="text-center py-5 font-bold hover:bg-blue-800 hover:text-red-900">
                {" "}
                Learn More <i class="fa-solid fa-arrow-right"></i>
              </h1>
            </Card>
          </div>

          <div>
            <Card className=" h-[350px]  w-[350px] py-2 transform hover:scale-105 transition-transform duration-300">
              <div className="flex items-center justify-center">
                <img
                  className="h-[60px] w-[60px] "
                  src="https://www.imagineinfosys.com/images/team-icon.png"
                  alt=""
                />
              </div>
              <h1 className="text-center font-bold text-2xl text-blue-700">
                Cloud Shared Hosting
              </h1>
              <h1 className="text-center text-2xl py-3">
                Give yourself extra options and become better positioned to
                serve your world and position yourself for what the emerging
                global economy wants..
              </h1>
              <h1 className="text-center py-5 font-bold hover:bg-blue-800 hover:text-red-900">
                {" "}
                Learn More <i class="fa-solid fa-arrow-right"></i>
              </h1>
            </Card>
          </div>
          <div>
            <Card className=" h-[350px]  w-[350px] py-2 transform hover:scale-105 transition-transform duration-300">
              <div className="flex items-center justify-center">
                <img
                  className="h-[60px] w-[60px] "
                  src="https://www.imagineinfosys.com/images/team-icon.png"
                  alt=""
                />
              </div>
              <h1 className="text-center font-bold text-2xl text-blue-700">
                Reseller Hosting
              </h1>
              <h1 className="text-center text-2xl py-3">
                Give yourself extra options and become better positioned to
                serve your world and position yourself for what the emerging
                global economy wants..
              </h1>
              <h1 className="text-center py-5 font-bold hover:bg-blue-800 hover:text-red-900">
                {" "}
                Learn More <i class="fa-solid fa-arrow-right"></i>
              </h1>
            </Card>
          </div>

          <div>
            <Card className=" h-[350px]  w-[350px] py-2 transform hover:scale-105 transition-transform duration-300">
              <div className="flex items-center justify-center">
                <img
                  className="h-[60px] w-[60px] "
                  src="https://www.imagineinfosys.com/images/team-icon.png"
                  alt=""
                />
              </div>
              <h1 className="text-center font-bold text-2xl text-blue-700">
                Google One Setup
              </h1>
              <h1 className="text-center text-2xl py-3 ">
                Give yourself extra options and become better positioned to
                serve your world and position yourself for what the emerging
                global economy wants..
              </h1>
              <h1 className="text-center py-5 font-bold hover:bg-blue-800 hover:text-red-900">
                {" "}
                Learn More <i class="fa-solid fa-arrow-right"></i>
              </h1>
            </Card>
          </div>

          <div>
            <Card className=" h-[350px]  w-[350px] py-1 transform hover:scale-105 transition-transform duration-300">
              <div className="flex items-center justify-center">
                <img
                  className="h-[60px] w-[60px] "
                  src="https://www.imagineinfosys.com/images/team-icon.png"
                  alt=""
                />
              </div>
              <h1 className="text-center font-bold text-2xl text-blue-700">
                SSL Certificate
              </h1>
              <h1 className="text-center text-2xl py-3">
                Give yourself extra options and become better positioned to
                serve your world and position yourself for what the emerging
                global economy wants..
              </h1>
              <h1 className="text-center py-5 font-bold hover:bg-blue-800 hover:text-red-900">
                {" "}
                Learn More <i class="fa-solid fa-arrow-right"></i>
              </h1>
            </Card>
          </div>

          <div>
            <Card className=" h-[350px]  w-[350px] py-1 transform hover:scale-105 transition-transform duration-300">
              <div className="flex items-center justify-center">
                <img
                  className="h-[60px] w-[60px] "
                  src="https://www.imagineinfosys.com/images/team-icon.png"
                  alt=""
                />
              </div>
              <h1 className="text-center font-bold text-2xl text-blue-700">
                SEO
              </h1>
              <h1 className="text-center text-2xl py-3">
                Give yourself extra options and become better positioned to
                serve your world and position yourself for what the emerging
                global economy wants..
              </h1>
              <h1 className="text-center py-5 font-bold hover:bg-blue-800 hover:text-red-900">
                {" "}
                Learn More <i class="fa-solid fa-arrow-right"></i>
              </h1>
            </Card>
          </div>

          <div>
            <Card className=" h-[350px]  w-[350px] py-1 transform hover:scale-105 transition-transform duration-300">
              <div className="flex items-center justify-center">
                <img
                  className="h-[60px] w-[60px] "
                  src="https://www.imagineinfosys.com/images/team-icon.png"
                  alt=""
                />
              </div>
              <h1 className="text-center font-bold text-2xl text-blue-700">
                Bulk SMS
              </h1>
              <h1 className="text-center text-2xl py-3">
                Give yourself extra options and become better positioned to
                serve your world and position yourself for what the emerging
                global economy wants..
              </h1>
              <h1 className="text-center py-5 font-bold  hover:bg-blue-800 hover:text-red-900">
                {" "}
                Learn More <i class="fa-solid fa-arrow-right"></i>
              </h1>
            </Card>
          </div>
        </div>

        {/* PRICING */}

        <div className=" py-14">
          <div className="text-center">
            <h1 className="font-bold text-4xl  text-green-900">PRICING</h1>
          </div>
          <div className="grid grid-cols-3  sm:px-20 py-16 gap-5 msm:grid-cols-1 mmd:grid-cols-2 msm:px-5 msm:gap-10">
            <div className="">
              <Card className="h-[400px]  w-[350px]  bg-blue-gray-50 transform hover:scale-105 transition-transform duration-300">
                <div className="py-2">
                  <div className="text-center">
                    <h1 className="font-bold text-2xl text-blue-400">
                      BASIC PLAN
                    </h1>
                  </div>
                  <div className="text-black px-16 py-3">
                    <p className="text-2xl">Rs 30,0000.00</p>
                    <div className="space-y-5 py-3">
                      <li className="">5GB Storage </li>
                      <li>50GB Bandwidth</li>
                      <li>Pre Made Themes</li>
                      <li>Free CDN</li>
                      <li>Renew Rs.250,000/year</li>
                    </div>
                  </div>
                </div>
                <div className="py-4 px-20">
                  <button className="bg-gray-700 hover:bg-deep-orange-800 text-black h-[50px] w-40  rounded-full">
                    Order Now
                  </button>
                </div>
              </Card>
            </div>

            <div className="">
              <Card className="h-[400px]  w-[350px]   bg-blue-gray-50 transform hover:scale-105 transition-transform duration-300">
                <div className="py-2">
                  <div className="text-center">
                    <h1 className="font-bold text-2xl  text-blue-400">
                      STANDARD PLAN
                    </h1>
                  </div>
                  <div className="text-black px-16 py-3 ">
                    <p className="text-2xl">Rs 30,0000.00</p>
                    <div className="space-y-5 py-3">
                      <li className="">20GB Storage </li>
                      <li>300GB Bandwidth</li>
                      <li>Custom Themes</li>
                      <li>Free CDN</li>
                      <li>Renew Rs.350,000/year</li>
                    </div>
                  </div>
                </div>
                <div className="py-4 px-20">
                  <button className="bg-gray-700 hover:bg-deep-orange-800 text-black h-[50px] w-40  rounded-full">
                    Order Now
                  </button>
                </div>
              </Card>
            </div>
            <div>
              <Card className="h-[400px] w-[350px] bg-blue-gray-50 transform hover:scale-105 transition-transform duration-300">
                <div className="py-2  ">
                  <div className="text-center">
                    <h1 className="font-bold text-2xl text-blue-400">
                      PREMIUM PLAN
                    </h1>
                  </div>
                  <div className="text-black px-16  py-3">
                    <p className="text-2xl">Rs 30,0000.00</p>
                    <div className="space-y-5 py-3">
                      <li className="">40GB Storage </li>
                      <li>400GB Bandwidth</li>
                      <li>Custom Theme</li>
                      <li>Daily Backup</li>
                      <li>Renew Rs.250,000/year</li>
                    </div>
                  </div>
                </div>
                <div className="py-4 px-20">
                  <button className="bg-gray-700 text-black h-[50px] w-40  rounded-full hover:bg-deep-orange-800">
                    {" "}
                    Order Now
                  </button>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>

      {/* Our Recent Blog */}
      <div className="py-14">
        <div className="text-center ">
          <h1 className="text-4xl font-bold text-green-900">Our Recent Blog</h1>
        </div>
        <div className="text-center py-2">
          <h1 className="text-base font-bold">
            Discover our latest blog, packed with insights, trends, and <br />{" "}
            expert perspectives on the cutting-edge of technology.
          </h1>
        </div>

        <div className=" grid grid-cols-3 sm:px-20 py-10  msm:grid-cols-1 mmd:grid-cols-2 gap-5 msm:px-3 msm:gap-10  ">
          <div className="msm:w-[400px]">
            <Card className="h-[400px]  w-[350px] transform hover:scale-105 transition-transform duration-300 ">
              <div>
                <img
                  src="https://alpharic.com/jufatchi/2023/07/digital-product-design.webp"
                  alt=""
                />
              </div>

              <div className="text-center">
                <h1 className="text-2xl font-bold text-indigo-900">
                  Digital Product Design
                </h1>
                <p className="text-justify text-sm px-10 py-3">
                  Digital product design has become an essential aspect of
                  business success in the technology industry. In today’s
                  competitive market, companies need to create user-centric
                  products that not only meet the
                </p>
              </div>
            </Card>
          </div>

          <div className="">
            <Card className="h-[400px]  w-[350px] transform hover:scale-105 transition-transform duration-300 ">
              <div>
                <img
                  src="https://alpharic.com/jufatchi/2023/07/cloud-and-devops.webp"
                  alt=""
                />
              </div>

              <div className="text-center">
                <h1 className="text-2xl font-bold text-indigo-900">
                  Cloud & DevOps
                </h1>
                <p className="text-justify text-sm px-10 py-3">
                  Digital product design has become an essential aspect of
                  business success in the technology industry. In today’s
                  competitive market, companies need to create user-centric
                  products that not only meet the
                </p>
              </div>
            </Card>
          </div>

          <div className="">
            <Card className="h-[400px]  w-[350px] transform hover:scale-105 transition-transform duration-300">
              <div>
                <img
                  src="	https://alpharic.com/jufatchi/2023/07/software-development.webp"
                  alt=""
                />
              </div>

              <div className="text-center">
                <h1 className="text-2xl font-bold text-indigo-900 ">
                  How Software Development Can Transform Your Business
                </h1>
                <p className="text-justify text-sm px-10 py-3">
                  Digital product design has become an essential aspect of
                  business success in the technology industry. In today’s
                  competitive market, companies need to create user-centric
                  products that not only meet the
                </p>
              </div>
            </Card>
          </div>
        </div>
      </div>

      {/* Our Clients */}

      <div className="bg-white px-20 py-10">
        <div className="py-10">
          <h1 className="text-center font-bold text-4xl text-green-900">
            Our Clients
          </h1>
        </div>
        <div className="grid grid-cols-3  sm:px-20 msm:grid-cols-1    mmd:grid-cols-2 gap-10 ">
          <div className="">
            <img
              className=" transform hover:scale-105 transition-transform duration-300 h-[350px] w-[350px]"
              src="image/t.jpg"
              alt=""
            />
          </div>

          <div>
            <img
              className=" transform hover:scale-105 transition-transform duration-300 h-[300px] w-[350px]"
              src="image/i.jpg"
              alt=""
            />
          </div>

          <div>
            <img
              className=" transform hover:scale-105 transition-transform duration-300 h-[350px] w-[350px]"
              src="	image/p.jpg"
              alt=""
            />
          </div>

          <div>
            <img
              className="transform hover:scale-105 transition-transform duration-300 h-[400px] w-[350px]"
              src="image/l.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              className="transform hover:scale-105 transition-transform duration-300 h-[400px] w-[350px]"
              src="image/q.jpg"
              alt=""
            />
          </div>

          <div>
            <img
              className=" transform hover:scale-105 transition-transform duration-300 h-[400px] w-[350px]"
              src="image/m.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              className=" transform hover:scale-105 transition-transform duration-300 h-[400px] w-[350px]"
              src="image/b.jpg	"
              alt=""
            />
          </div>
          <div className=" ">
            <img
              className="transform hover:scale-105 transition-transform duration-300 h-[400px] w-[350px]"
              src="image/c.jpg"
              alt=""
            />
          </div>

          <div>
            <img
              className="transform hover:scale-105 transition-transform duration-300 h-[400px] w-[350px]"
              src="image/u.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
      {/* meet our team */}

      <div className="bg-blue-gray-800 py-14  ">
        <div className="py-9 text-center text-white ">
          <h1 className="text-4xl">Meet Our Team</h1>
        </div>
        <div className="text-white text-center ">
          <p className="text-lg px-20">
            Introducing our exceptional teams, driven by passion and expertise,
            ready to collaborate and <br /> bring your vision to life.
          </p>
        </div>
        <div className=" grid grid-cols-4 px-8 py-5 msm:grid-cols-1  msm:px-12  mmd:grid-cols-2  ">
          <div className="px-5 py-5">
            <Card className="h-[300px]  w-[250px]  bg-blue-gray-500  transform hover:scale-110 transition-transform duration-300">
              <div className="px-6 py-2">
                <Card className=" h-[200px]  w-[200px]">
                  <img
                    className="h-[200px] w-[200px]"
                    src="image/n.jpg"
                    alt=""
                  />
                </Card>
              </div>
              <div className="text-white text-center">
                <h1>Aman Adhikari</h1>
                <p>Ceo Founder</p>
              </div>
            </Card>
          </div>

          <div className="px-5 py-5">
            <Card className="h-[300px]  w-[250px] bg-blue-gray-500 transform hover:scale-110 transition-transform duration-300">
              <div className="px-6 py-2">
                <Card className="h-[200px]  w-[200px]">
                  <img src="image/o.jpg" alt="" />
                </Card>
              </div>
              <div className="text-white text-center">
                <h1>Bishal Pokhrel</h1>
                <p>Director</p>
              </div>
            </Card>
          </div>
          <div className="px-5 py-5">
            <Card className="h-[300px]  w-[250px] bg-blue-gray-500 transform hover:scale-110 transition-transform duration-300">
              <div className="px-6 py-2">
                <Card className="h-[200px]  w-[200px] ">
                  <img
                    className="h-[200px] w-[200px]"
                    src="image/k.jpg"
                    alt=""
                  />
                </Card>
              </div>
              <div className="text-white text-center">
                <h1>Aashish Jung Xettri</h1>
                <p>Graphic Designer</p>
              </div>
            </Card>
          </div>
          <div className="px-5 py-5">
            <Card className="h-[300px]  w-[250px] bg-blue-gray-500 shadow-lg transform hover:scale-110 transition-transform duration-300">
              <div className="px-6 py-2">
                <Card className="h-[200px]  w-[200px]">
                  <img
                    className="h-[200px] w-[200px]"
                    src="image/j.jpg"
                    alt=""
                  />
                </Card>
              </div>
              <div className="text-white text-center">
                <h1>Saroj Raj Shahi</h1>
                <p>Manager</p>
              </div>
            </Card>
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
              <i class="fa-brands fa-instagram  transform hover:scale-105 transition-transform duration-300"></i>
              <i class="fa-brands fa-tiktok  transform hover:scale-105 transition-transform duration-300"></i>
              <i class="fa-brands fa-viber  transform hover:scale-110 transition-transform duration-300"></i>
              <i class="fa-brands fa-whatsapp  transform hover:scale-105 transition-transform duration-300"></i>
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
export default HomePage;
