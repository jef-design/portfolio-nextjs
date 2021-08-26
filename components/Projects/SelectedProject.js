import Link from 'next/link'
import ProjectCard from './ProjectCard';

function SelectedProject({data}) {
    return (
        <section className="project">
            <div>
                <h2 className="section__title">Some Projects I&apos;ve Built</h2>
            </div>
            <div className="selected__project__wrapper">
                {data.slice(0,3).map((project, index) => {
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
            <Link href="/project" passHref={true}>
            <div className="more__works__cta">
            <h2>See more projects</h2>
            <i className='bx bx-chevron-right'></i>
            </div>
            </Link>
        </section>
    );
}

export default SelectedProject
