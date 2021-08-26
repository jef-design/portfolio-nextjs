import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { data } from "../../api/data";
import Head from "next/head";
import Image from "next/image";
import Meta from "../../../components/Meta/Meta";
import Link from "next/link";

function ProjectInfo() {
    const router = useRouter();
    const { title } = router.query;
    console.log(title);
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    console.log(title);
    return (
        <section className="project">
            {/* <div>
                <h2 className="section__title">Some Projects I've Built</h2>
            </div> */}
            <div className="project__wrapper">
                {data
                    .filter(info => info.title.toLowerCase() === title)
                    .map((project, index) => {
                        const {
                            img,
                            mobile_view,
                            desktop_view,
                            alt,
                            description,
                            platform,
                            category,
                            title,
                            tech_use,
                            site_link,
                            github_repo,
                        } = project;
                        return (
                            <>
                                <Meta
                                    title={`${title} - Projects`}
                                    image={img}
                                    description={description}
                                />
                                <h2>{title}</h2>
                                <div className="project__container" key={index}>
                                    <div className="project__image">
                                        <Image
                                            src={img}
                                            alt={alt}
                                            placeholder="blur"
                                            blurDataURL={`/_next/image?url=${img}&w=16&q=1`}
                                            loading="lazy"
                                        />
                                    </div>
                                    <div className="project__description">
                                        <div className="project__btn">
                                            <Link
                                                
                                                href={site_link}
                                                passHref={true}
                                            >
                                                <div className="project__link">View live site <i className='bx bx-chevron-right'></i></div>
                                            </Link>

                                            <Link
                                                
                                                href={github_repo}
                                                passHref={true}
                                            >
                                                <div className="project__link">Github Repository <i className='bx bx-chevron-right'></i></div>
                                            </Link>
                                        </div>
                                        <p>{description}</p>
                                        <div>
                                            <h4>Platform</h4>
                                            <p>{platform}</p>
                                            <h4>Category</h4>
                                            <p>{category}</p>
                                        </div>
                                        <h4>Tech used:</h4>
                                        <ul className="project__techuse">
                                            {tech_use.map((tech, i) => {
                                                return (
                                                    <li
                                                        key={i}
                                                        className="project__techlist"
                                                    >
                                                        {tech.name}
                                                    </li>
                                                );
                                            })}
                                        </ul>
                                    </div>
                                </div>
                                <div className="project__device__type">
                                    <div className="desktop__view">
                                        <h3>Desktop view</h3>
                                        <div className="desktop__view__img">
                                            <Image
                                                src={desktop_view}
                                                alt={alt}
                                            />
                                        </div>
                                    </div>
                                    <div className="mobile__view">
                                        <h3>Mobile view</h3>
                                        <div className="desktop__view__img">
                                            <Image
                                                src={mobile_view}
                                                alt={alt}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </>
                        );
                    })}
            </div>
        </section>
    );
}

export default ProjectInfo;
