import Link from 'next/link'

const Hero = () => {
    return (
        <div className="hero">
            {/* <Fade top> */}
                <div>
                    <h1 className="hero__bigheader">
                        Hi there I&apos;m <span className="hero__span">Jeff</span>
                    </h1>
                </div>
                <div>
                    <h1 className="hero__bigheader">
                        I <span className="hero__span">build</span> things for
                        the <span className="hero__span">Web.</span>
                    </h1>
                    <p className="hero__text">
                        I design and build quality responsive websites, clean
                        user interfaces and interactive web apps. Mainly
                        focusing in Reactjs framework and other web development
                        technologies.
                    </p>
                </div>
            {/* </Fade> */}
            {/* <Fade bottom> */}
                <div className="hero__cta">
                    <h3>
                        Get in touch
                        <i className="bx bx-mail-send"></i>
                        <Link href="mailto:bermejojeffreyg@gmail.com" passHref={true}>
                            bermejojeffreyg@gmail.com
                        </Link>
                    </h3>
                </div>
            {/* </Fade> */}
        </div>
    );
};

export default Hero;
