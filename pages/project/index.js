import React from 'react'
import { data } from '../api/data'
import ProjectCard from '../../components/Projects/ProjectCard';
import Meta from '../../components/Meta/Meta';

function Project() {

    return (
        <section className="project helper__top">
            <Meta title="Project - Jeff Bermejo" />
        <div>
            <h1 className="section__title">Projects I&apos;ve Built</h1>
        </div>
        <div className="selected__project__wrapper">
            {data.map((project, index) => {
                const {
                    img,
                    alt,
                    description,
                    title,
                } = project;
                return (
                   <ProjectCard
                   key={index}
                   img={img}
                   alt={alt}
                   title={title}
                   description={description}
                   />
                );
            })}
        </div>
    </section>
    )
}

export default Project
