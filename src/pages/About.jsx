const About = () => {
    return (
        <div>
            <div style={{ textAlign: "center", marginTop: "50px" }}>
                <div className="w-full flex justify-center">
                    <p className="bg-[#c9c5c5] text-[17px] w-[300px] p-0.5 rounded-2xl">TUNE UP YORSELF WITH TUNEUP</p>
                </div>
                <div className="text-7xl my-20 flex justify-center flex-col w-full" >
                    <h1>We make <span className="bg-[#0c0c18] text-[white] italic  rounded-[15px] px-4 pb-3">lmpossible</span>  </h1>
                    <div className=" w-full flex justify-center  p-[5px] mt-[20px] ">
                         <div className=" bg-[#0c0c18] text-[#ffffff] italic rounded-[20px] w-lg mt-2 pb-3">to i'm possible.</div></div>

                </div>
                <div>
                    <pre>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore ducimus alias <br />
                        provident libero magni similique consequuntur vero quos! Aliquid ea id omnis labore animi.<br />
                        Cupiditate sapiente magni aliquam quidem autem.</pre>
                </div>
            </div>


            {/* ABOUT US */}

            <div style={{ textAlign: "center", backgroundColor: "#3d454b", height: "500px", padding: "50px", borderRadius: "40px" }}>
                <div>

                    <div>
                        <h1>ABOUT US</h1>
                    </div>
                    <div>
                        <h3>We Mack Impossible to I,m Posible</h3>
                        <p>At TuneUp Technologies, we are a leading software development company dedicated to delivering innovative, scalable, and user-focused solutions that empower businesses to thrive in the digital era. Specializing in custom software development, SaaS products, and web and mobile applications, we blend creativity and technical expertise to craft software that meets the unique needs of startups and enterprises alike. With a commitment to quality, security, and continuous innovation, our team partners with clients to transform ideas into impactful, future-ready digital solutions. At TuneUp Technologies, we don’t just build software; we build success.</p>
                    </div>

                    {/* provides */}
                    <div>
                        <h2>The solution we provide:</h2>
                        <div style={{ display: "flex", alignContent: "center", justifyContent: "center", display: "grid-row", gap: "10px" }}>
                            <div style={{ backgroundColor: "#1c1f30", borderRadius: "50px", padding: "10px" }}>Web Appliction</div>
                            <div style={{ backgroundColor: "#1c1f30", borderRadius: "50px", padding: "10px" }}>Mobile Appliction</div>
                            <div style={{ backgroundColor: "#1c1f30", borderRadius: "50px", padding: "10px" }}>IT Support</div>
                        </div>

                        {/* icons */}
                        <div style={{}}>
                            <img src="https://img.icons8.com/?size=100&id=ZmG5l3ueI6FO&format=png&color=000000" alt="" />
                            <img src="https://img.icons8.com/?size=100&id=h0zeLDJFpm3k&format=png&color=000000" alt="" />
                            <img src="https://img.icons8.com/?size=100&id=22028&format=png&color=000000" alt="" />
                            <img src="https://img.icons8.com/?size=100&id=efFfwotdkiU5&format=png&color=000000" alt="" />
                        </div>


                    </div>
                </div>

            </div>

        </div>
    );
};
export default About;        